import { useEffect, useEffectEvent, useRef } from 'react'
import {
  BookOpen,
  Brain,
  Briefcase,
  Cloud,
  Code2,
  Database,
  Gauge,
  GraduationCap,
  Hand,
  Settings2,
  Shield,
  Workflow,
  ChartColumn,
} from 'lucide-react'

import ProgressivePortrait from './site/ProgressivePortrait'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import useScrollHashSync from '../hooks/useScrollHashSync'
import { LazyMotion, Motion, loadMotionFeatures } from '../lib/motion'
import {
  collaborationServices,
  experienceTimeline,
  faqItems,
  featuredArticles,
  keyImpact,
  navigationLinks,
  siteConfig,
  specialties,
  teachingContent,
  techStackGroups,
  utilityLinks,
} from '../content/siteContent'

const MOTION_DURATION_SCALE = 1.2
const ANCHOR_SCROLL_DURATION = 850
const SECTION_SPACING =
  'lazy-section scroll-mt-24 px-5 py-12 md:scroll-mt-28 md:px-6 md:py-16'
const SECTION_FRAME = 'mx-auto max-w-6xl'
const DIVIDER_LIST = 'divide-y divide-white/[0.08]'
const SECTION_EYEBROW =
  'text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/75'

const homeNavLinks = navigationLinks.map((item) => ({
  ...item,
  href: item.href.replace('/#', '#'),
}))

const homeUtilityLinks = utilityLinks.map((item) => ({
  ...item,
  href: item.href === '/#writing' ? '#writing' : item.href,
}))

const sectionIconMap = {
  database: Database,
  gauge: Gauge,
  shield: Shield,
  workflow: Workflow,
  settings: Settings2,
  chart: ChartColumn,
  cloud: Cloud,
  code: Code2,
  graduation: GraduationCap,
  brain: Brain,
  book: BookOpen,
}

function formatIndex(index) {
  return String(index + 1).padStart(2, '0')
}

export default function DatabaseEngineerLandingPage() {
  const scrollAnimationFrame = useRef(null)

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7 * MOTION_DURATION_SCALE,
        delay,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  }

  const staggerWrap = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12 * MOTION_DURATION_SCALE,
      },
    },
  }

  const getAnchorOffset = () => {
    const header = document.querySelector('[data-site-header]')
    const headerHeight = header?.getBoundingClientRect().height ?? 96

    return headerHeight + 24
  }

  useScrollHashSync({
    selector: 'main > section[id], footer[id]',
    getOffset: getAnchorOffset,
    clearHashWhen: '#hero',
  })

  const stopScrollAnimation = () => {
    if (scrollAnimationFrame.current !== null) {
      window.cancelAnimationFrame(scrollAnimationFrame.current)
      scrollAnimationFrame.current = null
    }
  }

  const animateScrollTo = (top) => {
    stopScrollAnimation()

    const start = window.scrollY
    const distance = top - start
    const startTime = performance.now()

    const easeInOutCubic = (progress) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - ((-2 * progress + 2) ** 3) / 2

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / ANCHOR_SCROLL_DURATION, 1)
      const easedProgress = easeInOutCubic(progress)

      window.scrollTo({
        top: start + distance * easedProgress,
        behavior: 'auto',
      })

      if (progress < 1) {
        scrollAnimationFrame.current = window.requestAnimationFrame(tick)
        return
      }

      scrollAnimationFrame.current = null
    }

    scrollAnimationFrame.current = window.requestAnimationFrame(tick)
  }

  const scrollToSection = (hash, behavior = 'smooth') => {
    const target = document.querySelector(hash)

    if (!target) {
      return
    }

    const top = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset()

    if (
      behavior === 'smooth' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      animateScrollTo(Math.max(top, 0))
      return
    }

    stopScrollAnimation()
    window.scrollTo({ top: Math.max(top, 0), behavior: 'auto' })
  }

  const handleAnchorNavigation = (event) => {
    const hash = event.currentTarget.getAttribute('href')

    if (!hash?.startsWith('#')) {
      return
    }

    event.preventDefault()
    window.history.pushState(null, '', hash)
    scrollToSection(hash)
  }

  const alignHashTarget = useEffectEvent(() => {
    if (!window.location.hash) {
      return
    }

    window.requestAnimationFrame(() => {
      scrollToSection(window.location.hash, 'auto')
    })
  })

  useEffect(() => {
    alignHashTarget()
    window.addEventListener('hashchange', alignHashTarget)
    window.addEventListener('popstate', alignHashTarget)

    return () => {
      stopScrollAnimation()
      window.removeEventListener('hashchange', alignHashTarget)
      window.removeEventListener('popstate', alignHashTarget)
    }
  }, [])

  return (
    <LazyMotion features={loadMotionFeatures}>
      <div className="min-h-screen bg-neutral-950 text-white">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-4 focus:z-50 focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-neutral-950"
        >
          Skip to content
        </a>

        <Motion.div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]"
          animate={{ opacity: [0.7, 1, 0.8] }}
          transition={{
            duration: 6 * MOTION_DURATION_SCALE,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <SiteHeader
          navLinks={homeNavLinks}
          utilityLinks={homeUtilityLinks}
          onAnchorClick={handleAnchorNavigation}
        />

        <main id="content">
        <section
          id="hero"
          aria-labelledby="hero-title"
          className="relative overflow-hidden px-5 py-14 md:px-6 md:py-18 lg:py-28"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:gap-14 lg:gap-20 lg:grid-cols-[minmax(0,1.12fr)_minmax(320px,0.88fr)]">
            <Motion.div
              initial="hidden"
              animate="visible"
              variants={staggerWrap}
              className="space-y-6 md:space-y-8"
            >
              <Motion.p
                variants={fadeUp}
                custom={0}
                className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
              >
                {siteConfig.introLabel}
              </Motion.p>

              <Motion.div variants={fadeUp} custom={0.08} className="space-y-4">
                <h1
                  id="hero-title"
                  className="max-w-5xl font-bold tracking-[-0.06em] text-white"
                >
                  <span className="flex items-center gap-3 text-[1.85rem] leading-[1.02] text-white/96 sm:gap-4 sm:text-[2.5rem] md:text-[3rem] lg:text-[3.35rem]">
                    <Hand
                      aria-hidden="true"
                      className="h-[0.9em] w-[0.9em] shrink-0 text-amber-300"
                      strokeWidth={2.1}
                    />
                    <span>{siteConfig.heroGreeting}</span>
                  </span>
                  <span className="mt-3 block text-[1.95rem] leading-[0.95] tracking-[-0.07em] text-cyan-300 sm:whitespace-nowrap sm:text-[2.75rem] md:text-[3.15rem] lg:text-[3.6rem] xl:text-[4.2rem]">
                    {siteConfig.role}
                  </span>
                </h1>
              </Motion.div>

              <Motion.p
                variants={fadeUp}
                custom={0.16}
                className="max-w-3xl text-lg leading-8 text-white/72 md:text-[1.05rem] md:leading-9"
              >
                {siteConfig.introText}
              </Motion.p>

              <Motion.p
                variants={fadeUp}
                custom={0.22}
                className="max-w-3xl text-base leading-8 text-white/60 md:text-lg md:leading-9"
              >
                {siteConfig.heroSummary}
              </Motion.p>

              <Motion.div
                variants={fadeUp}
                custom={0.3}
                className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4"
              >
                <a
                  href="#experience"
                  onClick={handleAnchorNavigation}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-[1.7rem] border border-white/10 bg-white/5 px-7 py-3.5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:w-auto md:min-w-[11.5rem]"
                >
                  <Briefcase className="h-5 w-5 text-cyan-300" />
                  <span>Experience</span>
                </a>
                <a
                  href="#writing"
                  onClick={handleAnchorNavigation}
                  className="inline-flex w-full items-center justify-center gap-2.5 rounded-[1.7rem] border border-white/10 bg-white/5 px-7 py-3.5 text-lg font-semibold text-white transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:w-auto md:min-w-[11.5rem]"
                >
                  <BookOpen className="h-5 w-5 text-cyan-300" />
                  <span>Read Blogs</span>
                </a>
              </Motion.div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9 * MOTION_DURATION_SCALE, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-end"
            >
              <Motion.div
                className="relative"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4 * MOTION_DURATION_SCALE,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <div className="absolute inset-[-10%] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.18),rgba(168,85,247,0.18)_45%,transparent_72%)] blur-3xl" />
                <ProgressivePortrait
                  sequence={siteConfig.profileImageSequence}
                  alt="Portrait of Kiran Shinde"
                  width={siteConfig.profileImageWidth}
                  height={siteConfig.profileImageHeight}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="relative h-64 w-64 rounded-full border border-white/10 object-cover shadow-2xl shadow-cyan-950/40 sm:h-72 sm:w-72 md:h-[22rem] md:w-[22rem] lg:h-[31rem] lg:w-[31rem]"
                />
              </Motion.div>
            </Motion.div>
          </div>
        </section>

        <section
          id="specialties"
          aria-labelledby="specialties-title"
          className={SECTION_SPACING}
        >
          <div className={`${SECTION_FRAME} grid gap-12 lg:grid-cols-[minmax(0,0.68fr)_minmax(300px,0.32fr)]`}>
            <div>
              <Motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 * MOTION_DURATION_SCALE }}
                className={SECTION_EYEBROW}
              >
                Specialties
              </Motion.p>

              <Motion.h2
                id="specialties-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
                className="mt-4 max-w-4xl text-3xl font-bold tracking-[-0.04em] md:text-5xl"
              >
                Database engineering specialties
              </Motion.h2>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
                className="mt-4 max-w-3xl text-lg leading-8 text-white/65"
              >
                Core areas where I help engineering teams keep critical data systems
                fast, stable, and ready for production growth.
              </Motion.p>

              <Motion.div
                variants={staggerWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className={`mt-10 ${DIVIDER_LIST}`}
              >
                {specialties.map((feature, index) => (
                  <Motion.article
                    key={feature.title}
                    variants={fadeUp}
                    className="grid gap-4 py-6 md:grid-cols-[84px_minmax(0,1fr)] md:gap-6"
                  >
                    <div className="flex items-center gap-3 text-white/60">
                      {(() => {
                        const Icon = sectionIconMap[feature.icon]

                        return (
                          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300">
                            <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                          </span>
                        )
                      })()}
                      <span className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                        {formatIndex(index)}
                      </span>
                    </div>

                    <div className="grid gap-3 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-8">
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="text-sm leading-7 text-white/66 md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </Motion.article>
                ))}
              </Motion.div>
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 * MOTION_DURATION_SCALE, delay: 0.08 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2.2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.16),transparent_36%),linear-gradient(155deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_48%,rgba(8,145,178,0.06))] p-8">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] opacity-25" />
                  <div className="absolute left-1/2 top-1/2 h-[44%] w-[44%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/25" />
                  <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
                  <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6" />

                  {specialties.map((feature, index) => {
                    const positions = [
                      'left-[10%] top-[16%]',
                      'right-[10%] top-[24%]',
                      'left-[14%] bottom-[16%]',
                      'right-[14%] bottom-[12%]',
                    ]

                    return (
                      <div
                        key={feature.title}
                        className={`absolute ${positions[index]} max-w-[10rem] rounded-2xl border border-white/10 bg-neutral-950/70 px-4 py-3 backdrop-blur-md`}
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/75">
                          {formatIndex(index)}
                        </p>
                        <div className="mt-2 flex items-center gap-2 text-sm font-medium text-white/82">
                          {(() => {
                            const Icon = sectionIconMap[feature.icon]

                            return (
                              <Icon className="h-[18px] w-[18px] text-cyan-300" strokeWidth={1.8} />
                            )
                          })()}
                          <span>{feature.title}</span>
                        </div>
                      </div>
                    )
                  })}

                  <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 shadow-[0_0_40px_rgba(34,211,238,0.55)]" />
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        <section
          id="services"
          aria-labelledby="services-title"
          className={SECTION_SPACING}
        >
          <div className={`${SECTION_FRAME} grid gap-10 lg:grid-cols-[minmax(280px,0.34fr)_minmax(0,0.66fr)]`}>
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className={SECTION_EYEBROW}>Collaboration</p>
              <h2
                id="services-title"
                className="mt-4 max-w-md text-3xl font-bold tracking-[-0.04em] md:text-5xl"
              >
                How I help teams with database performance and reliability
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/65">
                The strongest results usually come from focused hands-on work around
                tuning, reliability, schema clarity, and operational maturity.
              </p>
            </Motion.div>

            <Motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className={DIVIDER_LIST}
            >
              {collaborationServices.map((service, index) => (
                <Motion.article
                  key={service.title}
                  variants={fadeUp}
                  className="grid gap-4 py-6 md:grid-cols-[84px_minmax(0,1fr)] md:gap-6"
                >
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                    {formatIndex(index)}
                  </p>
                  <div className="grid gap-3 md:grid-cols-[minmax(0,0.42fr)_minmax(0,0.58fr)] md:gap-8">
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-7 text-white/68 md:text-base">
                      {service.description}
                    </p>
                  </div>
                </Motion.article>
              ))}
            </Motion.div>
          </div>
        </section>

        <section
          id="stack"
          aria-labelledby="stack-title"
          className={SECTION_SPACING}
        >
          <div className={SECTION_FRAME}>
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-end">
              <div>
                <Motion.p
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5 * MOTION_DURATION_SCALE }}
                  className={SECTION_EYEBROW}
                >
                  Stack
                </Motion.p>
                <Motion.h2
                  id="stack-title"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
                  className="mt-4 max-w-3xl text-3xl font-bold tracking-[-0.04em] md:text-5xl"
                >
                  Database stack and platform expertise
                </Motion.h2>
              </div>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
                className="max-w-3xl text-lg leading-8 text-white/65"
              >
                The databases, tooling, operational practices, and cloud workflow I
                rely on to build reliable production systems.
              </Motion.p>
            </div>

            <Motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className={`mt-10 ${DIVIDER_LIST}`}
            >
              {techStackGroups.map((group, index) => (
                <Motion.article
                  key={group.label}
                  variants={fadeUp}
                  className="grid gap-5 py-6 lg:grid-cols-[minmax(230px,0.28fr)_minmax(0,0.72fr)] lg:gap-8"
                >
                  <div className="flex items-center gap-4">
                    {(() => {
                      const Icon = sectionIconMap[group.icon]

                      return (
                        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300">
                          <Icon className="h-5 w-5" strokeWidth={1.8} />
                        </span>
                      )
                    })()}
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                        Skill area {formatIndex(index)}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">{group.label}</h3>
                    </div>
                  </div>

                  <div className="grid gap-x-6 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3 text-white/68">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                        <span className="text-sm leading-7 md:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                </Motion.article>
              ))}
            </Motion.div>
          </div>
        </section>

        <section
          id="experience"
          aria-labelledby="experience-title"
          className={SECTION_SPACING}
        >
          <div className={SECTION_FRAME}>
            <Motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 * MOTION_DURATION_SCALE }}
              className={SECTION_EYEBROW}
            >
              Experience
            </Motion.p>

            <Motion.h2
              id="experience-title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
              className="mt-4 max-w-4xl text-3xl font-bold tracking-[-0.04em] md:text-5xl"
            >
              Professional experience in database engineering
            </Motion.h2>

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
              className="mt-4 max-w-3xl text-lg leading-8 text-white/65"
            >
              Hands-on delivery across SaaS, fintech, and enterprise systems with
              a focus on scalability, performance, resilience, and operational
              reliability.
            </Motion.p>

            <div className="relative mt-12">
              <div className="absolute bottom-0 left-[11px] top-0 hidden w-px bg-gradient-to-b from-cyan-300/35 via-white/10 to-transparent md:block" />
              <Motion.div
                variants={staggerWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="space-y-0"
              >
                {experienceTimeline.map((item) => (
                  <Motion.article
                    key={`${item.company}-${item.role}`}
                    variants={fadeUp}
                    className="relative border-t border-white/[0.08] py-8 first:border-t-0 md:grid md:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] md:gap-10 md:pl-12"
                  >
                    <span className="absolute left-0 top-10 hidden h-6 w-6 rounded-full border border-cyan-300/35 bg-neutral-950 md:block" />

                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                        {item.location}
                      </p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base text-white/70">{item.company}</p>
                      <p className="mt-4 text-sm text-white/48">{item.durationLabel}</p>
                    </div>

                    <ul className="mt-6 space-y-3 text-sm leading-7 text-white/72 md:mt-0 md:text-base">
                      {item.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </Motion.article>
                ))}
              </Motion.div>
            </div>

            <Motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="mt-16"
            >
              <Motion.h3 variants={fadeUp} className="text-3xl font-bold text-white md:text-5xl">
                Key impact
              </Motion.h3>
              <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {keyImpact.map((item, index) => (
                  <Motion.article
                    key={item}
                    variants={fadeUp}
                    className="border-l border-white/[0.08] pl-4"
                  >
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/75">
                      Impact {formatIndex(index)}
                    </p>
                    <p className="mt-4 text-sm leading-7 text-white/74 md:text-base">
                      {item}
                    </p>
                  </Motion.article>
                ))}
              </div>
            </Motion.div>
          </div>
        </section>

        <section
          id="teaching"
          aria-labelledby="teaching-title"
          className={SECTION_SPACING}
        >
          <div className={`${SECTION_FRAME} grid gap-12 lg:grid-cols-[minmax(0,0.6fr)_minmax(280px,0.4fr)]`}>
            <div>
              <Motion.p
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 * MOTION_DURATION_SCALE }}
                className={SECTION_EYEBROW}
              >
                Teaching
              </Motion.p>

              <Motion.h2
                id="teaching-title"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
                className="mt-4 max-w-4xl text-3xl font-bold tracking-[-0.04em] md:text-5xl"
              >
                Teaching and mentorship impact
              </Motion.h2>

              <Motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
                className="mt-6 max-w-4xl text-lg leading-8 text-white/72"
              >
                {teachingContent.intro}
              </Motion.p>

              {teachingContent.paragraphs.map((paragraph) => (
                <Motion.p
                  key={paragraph}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55 * MOTION_DURATION_SCALE }}
                  className="mt-5 max-w-4xl text-base leading-8 text-white/68 md:text-lg"
                >
                  {paragraph}
                </Motion.p>
              ))}

              <Motion.ul
                variants={staggerWrap}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                className={`mt-8 ${DIVIDER_LIST}`}
              >
                {teachingContent.highlights.map((item) => (
                  <Motion.li
                    key={item.text}
                    variants={fadeUp}
                    className="flex items-start gap-4 py-4 text-white/78"
                  >
                    {(() => {
                      const Icon = sectionIconMap[item.icon]

                      return (
                        <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-300">
                          <Icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
                        </span>
                      )
                    })()}
                    <span className="text-sm leading-7 md:text-base">{item.text}</span>
                  </Motion.li>
                ))}
              </Motion.ul>
            </div>

            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 * MOTION_DURATION_SCALE, delay: 0.08 }}
              className="hidden lg:block"
            >
              <div className="sticky top-32 overflow-hidden rounded-[2.2rem] border border-white/10 bg-[linear-gradient(160deg,rgba(255,255,255,0.05),rgba(255,255,255,0.015)_45%,rgba(34,211,238,0.08))] p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.18),transparent_36%),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:auto,30px_30px,30px_30px] opacity-30" />
                <div className="relative space-y-6">
                  {teachingContent.highlights.map((item, index) => (
                    <div
                      key={item.text}
                      className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0"
                    >
                      <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/75">
                        Note {formatIndex(index)}
                      </p>
                      <div className="mt-3 flex items-start gap-3">
                        {(() => {
                          const Icon = sectionIconMap[item.icon]

                          return (
                            <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 bg-neutral-950/60 text-cyan-300">
                              <Icon className="h-5 w-5" strokeWidth={1.8} />
                            </span>
                          )
                        })()}
                        <p className="text-base leading-7 text-white/80">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Motion.div>
          </div>
        </section>

        <section
          id="writing"
          aria-labelledby="writing-title"
          className={SECTION_SPACING}
        >
          <div className={`${SECTION_FRAME} grid gap-10 lg:grid-cols-[minmax(280px,0.34fr)_minmax(0,0.66fr)]`}>
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className={SECTION_EYEBROW}>Writing</p>
              <h2
                id="writing-title"
                className="mt-4 max-w-md text-3xl font-bold tracking-[-0.04em] md:text-5xl"
              >
                Writing on performance, incidents, indexing, and reliability
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/65">
                Practical notes from production database work, including case-study
                style lessons, operational checklists, indexing decisions, and
                things I wish more teams talked about earlier.
              </p>
            </Motion.div>

            <Motion.div
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className={DIVIDER_LIST}
            >
              {featuredArticles.map((article, index) => (
                <Motion.a
                  key={article.slug}
                  href={article.path}
                  variants={fadeUp}
                  className="group grid gap-4 py-6 md:grid-cols-[110px_minmax(0,1fr)_auto] md:items-start md:gap-6"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                      Article {formatIndex(index)}
                    </p>
                    <p className="mt-2 text-sm text-white/45">{article.readTime}</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/42">
                      {article.category}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white transition group-hover:text-cyan-200 md:text-2xl">
                      {article.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 md:text-base">
                      {article.cardDescription}
                    </p>
                  </div>

                  <div className="flex items-center text-sm font-medium text-cyan-300 transition group-hover:translate-x-1">
                    Read article
                  </div>
                </Motion.a>
              ))}
            </Motion.div>
          </div>
        </section>

        <section
          id="faq"
          aria-labelledby="faq-title"
          className={SECTION_SPACING}
        >
          <div className={`${SECTION_FRAME} grid gap-10 lg:grid-cols-[minmax(280px,0.34fr)_minmax(0,0.66fr)]`}>
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <p className={SECTION_EYEBROW}>FAQ</p>
              <h2
                id="faq-title"
                className="mt-4 max-w-md text-3xl font-bold tracking-[-0.04em] md:text-5xl"
              >
                Frequently asked questions
              </h2>
              <p className="mt-4 max-w-md text-lg leading-8 text-white/65">
                A few direct answers about database specializations, writing, and
                how to reach me for technical conversations.
              </p>
            </Motion.div>

            <Motion.dl
              variants={staggerWrap}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.18 }}
              className={DIVIDER_LIST}
            >
              {faqItems.map((item, index) => (
                <Motion.div
                  key={item.question}
                  variants={fadeUp}
                  className="grid gap-3 py-6 md:grid-cols-[72px_minmax(0,1fr)] md:gap-6"
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                    {formatIndex(index)}
                  </dt>
                  <div>
                    <p className="text-lg font-semibold text-white">{item.question}</p>
                    <dd className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                      {item.answer}
                    </dd>
                  </div>
                </Motion.div>
              ))}
            </Motion.dl>
          </div>
        </section>

        </main>

        <SiteFooter id="contact" />
      </div>
    </LazyMotion>
  )
}
