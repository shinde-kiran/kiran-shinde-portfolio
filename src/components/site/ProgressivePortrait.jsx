import { useEffect, useMemo, useState } from 'react'

const imageLoadPromises = new Map()

function decodeImage(image) {
  if (typeof image.decode !== 'function') {
    return Promise.resolve()
  }

  return image.decode().catch(() => {})
}

function preloadImage(src) {
  if (!src) {
    return Promise.resolve()
  }

  const existingPromise = imageLoadPromises.get(src)

  if (existingPromise) {
    return existingPromise
  }

  const promise = new Promise((resolve, reject) => {
    const image = new window.Image()
    let settled = false

    image.decoding = 'async'
    image.fetchPriority = 'low'

    const resolveImage = async () => {
      if (settled) {
        return
      }

      settled = true
      await decodeImage(image)
      resolve(image)
    }

    const rejectImage = (error) => {
      if (settled) {
        return
      }

      settled = true
      imageLoadPromises.delete(src)
      reject(error)
    }

    image.onload = () => {
      void resolveImage()
    }
    image.onerror = rejectImage
    image.src = src

    if (image.complete) {
      void resolveImage()
    }
  })

  imageLoadPromises.set(src, promise)

  return promise
}

export default function ProgressivePortrait({
  sequence = [],
  alt,
  width,
  height,
  className,
  ...imgProps
}) {
  const sources = useMemo(() => sequence.filter(Boolean), [sequence])
  const [currentSrc, setCurrentSrc] = useState(() => sources[0] ?? '')

  useEffect(() => {
    if (typeof window === 'undefined' || sources.length <= 1) {
      return undefined
    }

    let cancelled = false

    const preloadNext = async (index) => {
      const nextSrc = sources[index]

      if (!nextSrc || cancelled) {
        return
      }

      try {
        await preloadImage(nextSrc)
      } catch {
        if (!cancelled) {
          void preloadNext(index + 1)
        }
        return
      }

      if (!cancelled) {
        setCurrentSrc(nextSrc)
        void preloadNext(index + 1)
      }
    }

    void preloadNext(1)

    return () => {
      cancelled = true
    }
  }, [sources])

  return (
    <img
      src={currentSrc || sources[0] || ''}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...imgProps}
    />
  )
}
