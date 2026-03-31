import { ArrowUpRight, Globe, Mail, MapPin, Sparkles } from 'lucide-react'

import LinkedInIcon from './site/LinkedInIcon'
import { contactMethods, navigationLinks, siteConfig } from '../content/siteContent'

const contactIconMap = {
  linkedin: LinkedInIcon,
  mail: Mail,
  sparkles: Sparkles,
}

export default function SiteFooter({ id }) {
  const currentYear = new Date().getFullYear()
  const footerNavigation = navigationLinks.filter((link) => link.label !== 'Contact')

  return (
    <footer id={id} className="lazy-panel px-5 py-12 md:px-6 md:py-16">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.018))] px-5 py-8 sm:px-6 md:px-8 md:py-10">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(300px,0.9fr)] lg:gap-12">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/75">
              Contact
            </p>
            <p className="font-heading mt-4 text-[2rem] font-semibold leading-[1.02] tracking-[-0.04em] text-white sm:text-3xl md:text-4xl">
              MongoDB, PostgreSQL, and production reliability for systems that need to stay calm under load.
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/60 md:text-base">
              {siteConfig.shortBio}
            </p>

            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/52">
              <span className="inline-flex items-center gap-2">
                <MapPin size={14} className="text-white/35" />
                {siteConfig.location}
              </span>
              <a
                href={siteConfig.siteUrl}
                className="inline-flex items-center gap-2 transition hover:text-white"
              >
                <Globe size={14} className="text-white/35" />
                {siteConfig.siteUrl.replace(/^https?:\/\//, '')}
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/75">
              Reach out
            </p>
            <div className="mt-4">
              {contactMethods.map((item) => {
                const Icon = contactIconMap[item.kind]

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                    className="group flex items-center justify-between gap-4 border-t border-white/[0.08] py-4 first:border-t-0"
                  >
                    <div className="flex min-w-0 items-start gap-3">
                      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/[0.08] bg-white/5 text-cyan-300">
                        <Icon size={16} />
                      </span>
                      <div className="min-w-0">
                        <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/42">
                          {item.label}
                        </p>
                        <p className="mt-2 break-all text-sm font-medium text-white/78 transition group-hover:text-white sm:break-words md:text-base">
                          {item.value}
                        </p>
                      </div>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="shrink-0 text-cyan-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-8 border-t border-white/[0.08] pt-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/75">
              Explore
            </p>
            <nav aria-label="Footer navigation" className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {footerNavigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-white/58 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <p className="text-sm text-white/42 md:text-right">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
