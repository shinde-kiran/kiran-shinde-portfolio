import { ArrowUpRight } from 'lucide-react'

import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'
import useScrollHashSync from '../hooks/useScrollHashSync'
import { LazyMotion, Motion, loadMotionFeatures } from '../lib/motion'
import {
  featuredArticles,
  getArticleSummary,
  getArticleTakeaways,
  navigationLinks,
  siteConfig,
  utilityLinks,
} from '../content/siteContent'

const articleNavLinks = navigationLinks.map((item) => item)
const articleUtilityLinks = utilityLinks
const SOFT_DIVIDER = 'divide-y divide-white/[0.08]'
const SECTION_EYEBROW =
  'text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/75'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.68,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

function toSectionId(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

function formatIndex(index) {
  return String(index + 1).padStart(2, '0')
}

export default function BlogPage({ article }) {
  const articleSummary = getArticleSummary(article)
  const articleTakeaways = getArticleTakeaways(article)
  const relatedArticles = featuredArticles
    .filter((item) => item.slug !== article.slug)
    .sort((left, right) => {
      const leftScore = left.category === article.category ? 1 : 0
      const rightScore = right.category === article.category ? 1 : 0

      return rightScore - leftScore
    })
    .slice(0, 3)
  const getAnchorOffset = () => {
    const header = document.querySelector('[data-site-header]')
    const headerHeight = header?.getBoundingClientRect().height ?? 96

    return headerHeight + 24
  }

  useScrollHashSync({
    selector: '[data-article-section]',
    getOffset: getAnchorOffset,
  })

  return (
    <LazyMotion features={loadMotionFeatures}>
      <div className="min-h-screen bg-neutral-950 text-white">
        <Motion.div
          className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(6,182,212,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]"
          animate={{ opacity: [0.7, 1, 0.8] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />

        <SiteHeader navLinks={articleNavLinks} utilityLinks={articleUtilityLinks} compact />

        <main className="px-5 py-14 md:px-6 md:py-18">
        <div className="mx-auto max-w-6xl">
          <Motion.nav
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            aria-label="Breadcrumb"
            className="text-sm text-white/55"
          >
            <a href="/" className="transition hover:text-white">
              Home
            </a>
            <span className="mx-2">/</span>
            <a href="/#writing" className="transition hover:text-white">
              Writing
            </a>
            <span className="mx-2">/</span>
            <span className="text-white/70">{article.title}</span>
          </Motion.nav>

          <Motion.header
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.08}
            className="relative mt-8 overflow-hidden pb-10 md:pb-12"
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.12),transparent_48%),radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_42%)]" />

            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.74fr)_minmax(220px,0.26fr)] lg:gap-10">
              <div>
                <p className={SECTION_EYEBROW}>{article.category}</p>
                <h1 className="mt-5 max-w-4xl text-[2.7rem] font-bold leading-[0.98] tracking-[-0.05em] text-white sm:text-[3.15rem] md:text-[3.8rem] lg:text-6xl">
                  {article.title}
                </h1>
                <p className="mt-5 max-w-3xl text-base leading-8 text-white/70 md:mt-6 md:text-lg">
                  {article.description}
                </p>
              </div>

              <dl className="grid gap-5 border-t border-white/[0.08] pt-5 text-sm text-white/62 sm:grid-cols-3 sm:gap-6 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:gap-5 lg:pl-6 lg:pt-0">
                <div>
                  <dt className={SECTION_EYEBROW}>Read time</dt>
                  <dd className="mt-2 text-base text-white/78">{article.readTime}</dd>
                </div>
                <div>
                  <dt className={SECTION_EYEBROW}>Published</dt>
                  <dd className="mt-2 text-base text-white/78">
                    <time dateTime={article.publishedDate}>{article.publishedDate}</time>
                  </dd>
                </div>
                <div>
                  <dt className={SECTION_EYEBROW}>Updated</dt>
                  <dd className="mt-2 text-base text-white/78">
                    <time dateTime={article.updatedDate ?? article.publishedDate}>
                      {article.updatedDate ?? article.publishedDate}
                    </time>
                  </dd>
                </div>
              </dl>
            </div>
          </Motion.header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(260px,0.3fr)] lg:gap-12">
            <article
              itemScope
              itemType="https://schema.org/BlogPosting"
              className="order-2 space-y-12 lg:order-1"
            >
              <meta itemProp="headline" content={article.title} />
              <meta itemProp="datePublished" content={article.publishedDate} />
              <meta itemProp="dateModified" content={article.updatedDate ?? article.publishedDate} />
              <meta itemProp="author" content={siteConfig.name} />
              <meta itemProp="description" content={article.description} />

              <Motion.section
                id="quick-takeaways"
                data-article-section
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.14}
                className="scroll-mt-28 py-4 lg:grid lg:grid-cols-[104px_minmax(0,1fr)] lg:gap-8"
              >
                <div>
                  <p className={SECTION_EYEBROW}>Overview</p>
                </div>
                <div>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:mt-0 md:text-3xl">
                    Quick takeaways
                  </h2>
                  <p className="mt-6 text-base leading-8 text-white/72 md:text-lg">
                    {articleSummary}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-7 text-white/70 md:text-base">
                    {articleTakeaways.map((takeaway) => (
                      <li key={takeaway} className="flex items-start gap-3">
                        <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Motion.section>

              {article.sections.map((section, index) => {
                const sectionId = toSectionId(section.title)

                return (
                  <Motion.section
                    id={sectionId}
                    data-article-section
                    key={section.title}
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    custom={0.14 + index * 0.08}
                    className="scroll-mt-28 border-t border-white/[0.08] py-8 lg:grid lg:grid-cols-[104px_minmax(0,1fr)] lg:gap-8"
                  >
                    <div>
                      <p className={SECTION_EYEBROW}>Section {formatIndex(index)}</p>
                    </div>

                    <div>
                      <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:mt-0 md:text-3xl">
                        {section.title}
                      </h2>

                      <div className="mt-6 space-y-4 text-base leading-8 text-white/72 md:text-lg">
                        {section.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>

                      <ul className="mt-6 space-y-4 text-sm leading-7 text-white/70 md:text-base">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-cyan-300" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Motion.section>
                )
              })}
            </article>

            <Motion.aside
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0.14}
              className="order-1 space-y-8 lg:order-2 lg:sticky lg:top-28 lg:self-start"
            >
              <section className="border-l border-white/[0.08] pl-4 md:pl-5">
                <p className={SECTION_EYEBROW}>Table of contents</p>
                <nav aria-label="Article sections" className="mt-4 space-y-3.5 md:mt-5 md:space-y-4">
                  <a
                    href="#quick-takeaways"
                    className="grid grid-cols-[28px_minmax(0,1fr)] gap-2.5 text-sm leading-6 text-white/70 transition hover:text-white md:grid-cols-[32px_minmax(0,1fr)] md:gap-3"
                  >
                    <span className="text-cyan-300/78">00</span>
                    <span>Quick takeaways</span>
                  </a>
                  {article.sections.map((section, index) => (
                    <a
                      key={section.title}
                      href={`#${toSectionId(section.title)}`}
                      className="grid grid-cols-[28px_minmax(0,1fr)] gap-2.5 text-sm leading-6 text-white/70 transition hover:text-white md:grid-cols-[32px_minmax(0,1fr)] md:gap-3"
                    >
                      <span className="text-cyan-300/78">{formatIndex(index)}</span>
                      <span>{section.title}</span>
                    </a>
                  ))}
                </nav>
              </section>

              <section className="border-l border-white/[0.08] pl-4 md:pl-5">
                <p className={SECTION_EYEBROW}>About the author</p>
                <div className="mt-4 flex items-center gap-4">
                  <img
                    src={siteConfig.profileImage}
                    alt="Kiran Shinde portrait"
                    width="80"
                    height="80"
                    loading="lazy"
                    fetchPriority="low"
                    decoding="async"
                    className="h-16 w-16 rounded-full border border-white/10 object-cover"
                  />
                  <div>
                    <p className="text-lg font-semibold text-white">{siteConfig.name}</p>
                    <p className="text-sm text-white/60">{siteConfig.role}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-white/70">{siteConfig.shortBio}</p>
                <div className="mt-5 flex flex-wrap gap-x-4 gap-y-3 text-sm font-medium text-white/72">
                  <a
                    href="/"
                    rel="author"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    View profile
                  </a>
                  <a
                    href={siteConfig.linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 transition hover:text-white"
                  >
                    LinkedIn
                  </a>
                </div>
              </section>
            </Motion.aside>
          </div>

          <Motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.42}
            className="lazy-panel mt-14 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(255,255,255,0.02))] px-6 py-8 md:px-8"
          >
            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.68fr)_minmax(240px,0.32fr)] lg:gap-10">
              <div>
                <p className={SECTION_EYEBROW}>Work together</p>
                <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
                  Need help with database performance, schema design, or production
                  reliability?
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-white/70 md:text-lg">
                  I work across MongoDB, PostgreSQL, and distributed database systems to
                  improve latency, reliability, and operational confidence.
                </p>
              </div>

              <div className="pt-2 lg:border-l lg:border-white/[0.08] lg:pl-6 lg:pt-0">
                <div className="flex flex-col gap-4">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="inline-flex items-center justify-between gap-4 text-sm font-medium text-white/78 transition hover:text-white"
                  >
                    <span>Email Kiran</span>
                    <ArrowUpRight className="h-4 w-4 text-cyan-300" strokeWidth={1.9} />
                  </a>
                  <a
                    href={siteConfig.topmateUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-4 text-sm font-medium text-white/78 transition hover:text-white"
                  >
                    <span>Book a Topmate session</span>
                    <ArrowUpRight className="h-4 w-4 text-cyan-300" strokeWidth={1.9} />
                  </a>
                </div>
              </div>
            </div>
          </Motion.section>

          <Motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="lazy-panel mt-12"
          >
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.22em] text-cyan-300/80">
                  Keep reading
                </p>
                <h2 className="mt-2 text-3xl font-bold tracking-[-0.03em] text-white">
                  Related database engineering articles
                </h2>
              </div>
              <a href="/#writing" className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
                Back to writing
              </a>
            </div>

            <div className={`mt-6 ${SOFT_DIVIDER}`}>
              {relatedArticles.map((item, index) => (
                <a
                  key={item.slug}
                  href={item.path}
                  className="group grid gap-4 py-6 md:grid-cols-[110px_minmax(0,1fr)_auto] md:items-start md:gap-6"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">
                      Article {formatIndex(index)}
                    </p>
                    <p className="mt-2 text-sm text-white/45">{item.readTime}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-white/42">
                      {item.category}
                    </p>
                    <h3 className="text-xl font-semibold text-white transition group-hover:text-cyan-200">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66 md:text-base">
                      {item.cardDescription}
                    </p>
                  </div>
                  <div className="flex items-center text-sm font-medium text-cyan-300 transition group-hover:translate-x-1">
                    Read article
                  </div>
                </a>
              ))}
            </div>
          </Motion.section>
        </div>
        </main>

        <SiteFooter />
      </div>
    </LazyMotion>
  )
}
