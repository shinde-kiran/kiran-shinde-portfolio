import { BookOpen, Mail, Sparkles } from 'lucide-react'

import LinkedInIcon from './site/LinkedInIcon'
import { LazyMotion, Motion, loadMotionFeatures } from '../lib/motion'

const iconMap = {
  book: BookOpen,
  linkedin: LinkedInIcon,
  mail: Mail,
  sparkles: Sparkles,
}

function getLinkProps(href) {
  if (href.startsWith('http')) {
    return {
      target: '_blank',
      rel: 'noreferrer',
    }
  }

  return {}
}

export default function SiteHeader({
  navLinks,
  utilityLinks,
  onAnchorClick,
  brandHref = '/',
  compact = false,
}) {
  return (
    <LazyMotion features={loadMotionFeatures}>
      <header
        data-site-header
        className="sticky top-0 z-20 border-b border-white/[0.08] bg-neutral-950/78 backdrop-blur-2xl"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:gap-6 md:px-6">
          <Motion.a
            href={brandHref}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            aria-label="Kiran Shinde home"
            className="font-heading min-w-0 text-[0.98rem] font-semibold leading-tight tracking-[-0.03em] text-white sm:text-base lg:text-lg"
          >
            Kiran Shinde
          </Motion.a>

          <Motion.nav
            aria-label="Primary navigation"
            className="hidden gap-6 text-sm text-white/70 lg:flex"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.href.startsWith('#') ? onAnchorClick : undefined}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </Motion.nav>

          <Motion.div
            className={`flex shrink-0 items-center ${compact ? 'gap-1.5 md:gap-3' : 'gap-2 md:gap-4'}`}
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
          >
            {utilityLinks.map((link) => {
              const Icon = iconMap[link.kind]

              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  onClick={link.href.startsWith('#') ? onAnchorClick : undefined}
                  className="rounded-full p-2 text-white/78 transition hover:scale-105 hover:bg-white/5 hover:text-cyan-300"
                  {...getLinkProps(link.href)}
                >
                  <Icon size={18} />
                </a>
              )
            })}
          </Motion.div>
        </div>

        <Motion.nav
          aria-label="Mobile navigation"
          className="border-t border-white/[0.06] px-5 pb-2.5 pt-2 lg:hidden"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.14 }}
        >
          <div className="-mx-1 flex gap-2 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={link.href.startsWith('#') ? onAnchorClick : undefined}
                className="shrink-0 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-2 text-[0.72rem] font-medium text-white/74 transition hover:border-white/[0.14] hover:bg-white/[0.07] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Motion.nav>
      </header>
    </LazyMotion>
  )
}
