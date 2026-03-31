import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import { navigationLinks, utilityLinks } from '../content/siteContent'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.16),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.12),transparent_28%)]" />

      <SiteHeader navLinks={navigationLinks} utilityLinks={utilityLinks} compact />

      <main className="px-5 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-6xl">
          <section className="grid gap-10 border-t border-white/[0.08] pt-12 md:pt-16 lg:grid-cols-[minmax(0,0.66fr)_minmax(260px,0.34fr)] lg:gap-14">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/78">
                404
              </p>
              <h1 className="font-heading mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.05em] text-white md:text-6xl">
                This page does not exist
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
                The link may be outdated, or the page may have moved. The portfolio
                home page is the best place to continue.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-[1.6rem] border border-cyan-300/22 bg-cyan-300/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-300/16"
                >
                  Back to home
                </a>
                <a
                  href="/#writing"
                  className="inline-flex items-center justify-center rounded-[1.6rem] border border-white/[0.08] bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white/84 transition hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.07]"
                >
                  Browse writing
                </a>
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/[0.08] bg-[linear-gradient(180deg,rgba(255,255,255,0.035),rgba(255,255,255,0.015))] p-6">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/75">
                Helpful links
              </p>
              <div className="mt-5 space-y-4">
                {navigationLinks.slice(0, 4).map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center justify-between gap-4 border-t border-white/[0.08] py-4 first:border-t-0"
                  >
                    <span className="text-sm font-medium text-white/74">{link.label}</span>
                    <span className="text-sm text-cyan-300">Explore</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
