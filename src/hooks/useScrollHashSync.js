import { useEffect, useEffectEvent, useRef } from 'react'

const SYNC_BUFFER = 12
const INITIAL_HASH_SETTLE_MS = 700

function getCurrentUrlWithHash(hash) {
  const url = new URL(window.location.href)
  url.hash = hash
  return `${url.pathname}${url.search}${url.hash}`
}

export default function useScrollHashSync({
  selector,
  getOffset,
  clearHashWhen,
}) {
  const animationFrame = useRef(null)
  const activeHash = useRef('')
  const syncEnabled = useRef(true)
  const settleTimeout = useRef(null)

  const syncHash = useEffectEvent(() => {
    const sections = Array.from(document.querySelectorAll(selector))

    if (!sections.length) {
      return
    }

    const threshold = getOffset() + SYNC_BUFFER
    let currentSection = null

    for (const section of sections) {
      if (section.getBoundingClientRect().top <= threshold) {
        currentSection = section
        continue
      }

      break
    }

    const nextHash = currentSection ? `#${currentSection.id}` : ''
    const normalizedHash = nextHash === clearHashWhen ? '' : nextHash

    if (normalizedHash === activeHash.current) {
      return
    }

    activeHash.current = normalizedHash
    window.history.replaceState(null, '', getCurrentUrlWithHash(normalizedHash))
  })

  useEffect(() => {
    const currentHash = window.location.hash
    const hasTarget = currentHash ? document.querySelector(currentHash) !== null : false

    if (currentHash && hasTarget) {
      activeHash.current = currentHash === clearHashWhen ? '' : currentHash
      syncEnabled.current = false

      settleTimeout.current = window.setTimeout(() => {
        syncEnabled.current = true
        settleTimeout.current = null
      }, INITIAL_HASH_SETTLE_MS)
    } else {
      syncEnabled.current = true
      syncHash()
    }

    const scheduleSync = () => {
      if (!syncEnabled.current) {
        return
      }

      if (animationFrame.current !== null) {
        return
      }

      animationFrame.current = window.requestAnimationFrame(() => {
        animationFrame.current = null
        syncHash()
      })
    }

    window.addEventListener('scroll', scheduleSync, { passive: true })
    window.addEventListener('resize', scheduleSync)

    return () => {
      if (settleTimeout.current !== null) {
        window.clearTimeout(settleTimeout.current)
      }

      if (animationFrame.current !== null) {
        window.cancelAnimationFrame(animationFrame.current)
      }

      window.removeEventListener('scroll', scheduleSync)
      window.removeEventListener('resize', scheduleSync)
    }
  }, [clearHashWhen, getOffset, selector])
}
