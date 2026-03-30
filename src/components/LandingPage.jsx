import { useEffect, useRef } from 'react'
import { BookOpen, Mail, Sparkles } from 'lucide-react'
import { motion as Motion } from 'framer-motion'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import heroImage from '../assets/hero.png'

const HERO_TITLE = 'Senior Database Engineer'
const MOTION_DURATION_SCALE = 1.2
const MOBILE_NAV_OFFSET = 96
const DESKTOP_NAV_OFFSET = 112
const ANCHOR_SCROLL_DURATION = 850

export default function DatabaseEngineerLandingPage() {
  const scrollAnimationFrame = useRef(null)

  const features = [
    {
      title: 'Scalable Data Platforms',
      description:
        'Designing resilient OLTP and analytics systems with clean schema strategy, partitioning, indexing, and replication.',
      icon: '🗄️',
    },
    {
      title: 'Performance Tuning',
      description:
        'Improving query performance using indexing, execution plans, and workload optimization.',
      icon: '⚡',
    },
    {
      title: 'Reliability & Recovery',
      description:
        'Backup, failover, monitoring, and disaster recovery strategies.',
      icon: '🛡️',
    },
    {
      title: 'Data Modeling',
      description:
        'Designing efficient schemas for scalable and maintainable systems.',
      icon: '🧩',
    },
  ]

  const blogs = [
    {
      title: 'Optimizing PostgreSQL Queries',
      desc: 'Reduced query time from 5s to 200ms using indexing and execution plans.',
      link: '#',
    },
    {
      title: 'Database Indexing Guide',
      desc: 'Understanding B-Tree vs Hash indexing strategies.',
      link: '#',
    },
    {
      title: 'Schema Design Best Practices',
      desc: 'How to design scalable schemas for production systems.',
      link: '#',
    },
  ]

  const techStackGroups = [
    {
      emoji: '🗃️',
      label: 'Databases',
      items: ['MongoDB', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Cassandra'],
    },
    {
      emoji: '⚙️',
      label: 'Core Expertise',
      items: [
        'Replication',
        'Sharding',
        'Query Optimization',
        'Indexing',
        'Partitioning',
        'High Availability',
        'Disaster Recovery',
        'Performance Tuning',
      ],
    },
    {
      emoji: '📊',
      label: 'Monitoring & Tools',
      items: [
        'MongoDB Compass',
        'Atlas',
        'Ops Manager',
        'Kibana',
        'DataGrip',
        'Slow Query Logs',
      ],
    },
    {
      emoji: '☁️',
      label: 'Cloud & DevOps',
      items: ['AWS EC2', 'DigitalOcean', 'Docker'],
    },
    {
      emoji: '💻',
      label: 'Operating Systems & Scripting',
      items: ['Linux', 'Ubuntu', 'Windows', 'Python', 'Bash'],
    },
  ]

  const experienceTimeline = [
    {
      company: 'Zzazz.ai',
      role: 'Database Administrator',
      location: 'Bengaluru',
      duration: 'Jan 2026 - Present',
      highlights: [
        'Own end-to-end performance, scalability, and reliability of MongoDB, PostgreSQL, Elasticsearch, and Redis clusters for high-traffic SaaS applications.',
        'Manage MongoDB replica sets, sharded clusters, and PostgreSQL replication setups across distributed architectures.',
        'Improved critical query performance by 35-40% through EXPLAIN/ANALYZE, index redesign, and query restructuring.',
        'Implemented table partitioning, PostgreSQL autovacuum tuning, WAL optimization, and proactive monitoring across slow queries, replication lag, CPU, memory, and I/O.',
        'Tuned Elasticsearch shard allocation, heap management, and index mappings, improving search latency by 50%.',
        'Designed Redis caching strategies, backup and recovery workflows, RCA practices, and zero-downtime database changes with backend and DevOps teams.',
      ],
    },
    {
      company: 'Sprinklr Inc.',
      role: 'Configuration Specialist',
      location: 'Bengaluru',
      duration: 'Apr 2025 - Jan 2026',
      highlights: [
        'Designed and optimized database configurations for scalable enterprise SaaS deployments.',
        'Improved data ingestion workflows and enhanced system integration performance.',
        'Collaborated with engineering teams on schema optimization and deployment automation.',
        'Supported client onboarding with database validation, troubleshooting, and performance tuning.',
        'Contributed to automation of configuration management and environment provisioning.',
      ],
    },
    {
      company: 'Russell Investments',
      role: 'MongoDB Engineer',
      location: 'Mumbai',
      duration: 'Dec 2024 - Apr 2025',
      highlights: [
        'Architected and deployed high-availability MongoDB clusters using replica sets and sharding.',
        'Installed, configured, and performance-tuned MongoDB across cloud and on-prem infrastructure.',
        'Automated backup and disaster recovery processes using Atlas and Ops Manager.',
        'Led version upgrades and cluster migrations with near-zero downtime.',
        'Implemented RBAC, TLS, and encryption aligned with financial compliance standards.',
        'Monitored replication lag, oplog growth, and overall cluster health metrics.',
      ],
    },
    {
      company: 'HDFC Bank Ltd',
      role: 'Database Engineer',
      location: 'Mumbai',
      duration: 'May 2021 - Dec 2024',
      highlights: [
        'Managed MongoDB, Cassandra, and SQL databases supporting mission-critical banking applications.',
        'Tuned high-frequency transactional queries and reduced execution time by 30%.',
        'Developed and optimized stored procedures, indexes, and joins for reporting systems.',
        'Led UAT and production deployments while maintaining high availability during peak transaction loads.',
        'Coordinated L1 support, resolved critical production incidents, and strengthened reliability during cloud migration initiatives.',
        'Implemented access controls and maintained strong data integrity compliance.',
      ],
    },
  ]

  const keyImpact = [
    'Managed production systems with 100M+ records in distributed environments.',
    'Improved database and search latency by up to 40-50%.',
    'Reduced production incidents through proactive monitoring and performance engineering.',
    'Strengthened high availability, failover, and disaster recovery strategies in high-SLA environments.',
    'Enhanced database observability and reduced downtime risks.',
  ]

  const teachingImpactHighlights = [
    { icon: '🎓', text: 'Mentored 1000+ students over the years.' },
    { icon: '🧠', text: 'Built strong fundamentals and problem-solving skills.' },
    { icon: '📘', text: 'Simplified complex topics into easy-to-understand concepts.' },
  ]

  const contactMethods = [
    {
      label: 'Email',
      value: 'kiranshinde4443@gmail.com',
      href: 'mailto:kiranshinde4443@gmail.com',
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/kiran-shinde-198721184',
      href: 'https://www.linkedin.com/in/kiran-shinde-198721184/',
      icon: FaLinkedinIn,
    },
    {
      label: 'Topmate',
      value: 'topmate.io/kiran_shinde48',
      href: 'https://topmate.io/kiran_shinde48/',
      icon: Sparkles,
    },
  ]

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

  const getAnchorOffset = () =>
    window.matchMedia('(min-width: 768px)').matches
      ? DESKTOP_NAV_OFFSET
      : MOBILE_NAV_OFFSET

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

  useEffect(() => {
    const alignHashTarget = () => {
      if (!window.location.hash) {
        return
      }

      window.requestAnimationFrame(() => {
        scrollToSection(window.location.hash, 'auto')
      })
    }

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
    <div className="min-h-screen bg-neutral-950 text-white">
      <Motion.div
        className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.14),transparent_30%)]"
        animate={{ opacity: [0.7, 1, 0.8] }}
        transition={{
          duration: 6 * MOTION_DURATION_SCALE,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <header className="sticky top-0 z-20 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Motion.nav
            className="hidden gap-6 text-white/70 md:flex"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
          >
            <a
              href="#hero"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Home
            </a>
            <a
              href="#features"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Features
            </a>
            <a
              href="#tech"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Tech
            </a>
            <a
              href="#experience"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Experience
            </a>
            <a
              href="#teaching"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Teaching
            </a>
            <a
              href="#blogs"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Blogs
            </a>
            <a
              href="#contact"
              onClick={handleAnchorNavigation}
              className="transition hover:text-white"
            >
              Contact
            </a>
          </Motion.nav>

          <Motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.2 }}
          >
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-110 hover:text-blue-400"
            >
              <FaLinkedinIn size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-110 hover:text-pink-400"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="https://topmate.io/kiran_shinde48/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:scale-110 hover:text-cyan-300"
            >
              <Sparkles size={18} />
            </a>
            <a
              href="mailto:kiranshinde4443@gmail.com"
              className="transition hover:scale-110 hover:text-emerald-300"
            >
              <Mail size={18} />
            </a>
            <a
              href="#blogs"
              onClick={handleAnchorNavigation}
              className="transition hover:scale-110 hover:text-amber-300"
            >
              <BookOpen size={18} />
            </a>
          </Motion.div>
        </div>
      </header>

      <section
        id="hero"
        className="relative scroll-mt-24 overflow-hidden px-6 py-16 md:scroll-mt-28 md:py-24"
      >
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <Motion.div
            initial="hidden"
            animate="visible"
            variants={staggerWrap}
            className="space-y-6"
          >
            <Motion.p
              variants={fadeUp}
              custom={0}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
            >
              MongoDB • PostgreSQL • Distributed Systems
            </Motion.p>

            <Motion.div variants={fadeUp} custom={0.1}>
              <div className="space-y-3">
                <p className="flex items-center text-white/95">
                  <span className="mr-3 inline-block text-2xl align-middle md:text-4xl">
                    👋
                  </span>
                  <span className="align-middle text-2xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                    Hello! I&apos;m Kiran Shinde
                  </span>
                </p>

                <Motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35 * MOTION_DURATION_SCALE, ease: 'easeOut' }}
                  className="whitespace-nowrap text-[1.9rem] font-bold leading-none tracking-[-0.05em] text-cyan-300 sm:text-[2.4rem] lg:text-[3rem]"
                >
                  {HERO_TITLE}
                </Motion.h1>
              </div>
            </Motion.div>

            <Motion.p
              variants={fadeUp}
              custom={0.2}
              className="max-w-xl whitespace-pre-line text-lg text-white/70"
            >
              {'I design and scale high-performance database systems with a primary focus on MongoDB and strong expertise in PostgreSQL. I specialize in replication, sharding, query optimization, and building reliable distributed data systems for production workloads.\n\nExperienced in optimizing large-scale databases, handling high-throughput systems, and ensuring reliability in production environments.'}
            </Motion.p>

            <Motion.div
              variants={fadeUp}
              custom={0.3}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#experience"
                onClick={handleAnchorNavigation}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Experience 💼
              </a>
              <a
                href="#blogs"
                onClick={handleAnchorNavigation}
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                Read Blogs ✍️
              </a>
            </Motion.div>
          </Motion.div>

          <Motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9 * MOTION_DURATION_SCALE, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
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
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl" />
              <img
                src={heroImage}
                alt="Portrait of Kiran Shinde"
                className="relative h-60 w-60 rounded-full border border-white/10 object-cover shadow-2xl shadow-purple-900/30 md:h-72 md:w-72"
              />
            </Motion.div>
          </Motion.div>
        </div>
      </section>

      <section
        id="features"
        className="scroll-mt-24 px-6 pb-10 md:scroll-mt-28 md:pb-14"
      >
        <div className="mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
            className="text-3xl font-bold md:text-5xl"
          >
            Features ✨
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-white/65"
          >
            Core areas where I help engineering teams keep critical database
            systems fast, stable, and ready for production growth.
          </Motion.p>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          >
            {features.map((feature, index) => (
              <Motion.div
                key={feature.title}
                variants={fadeUp}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.05] to-transparent p-6 backdrop-blur-sm transition hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/8"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-2xl">
                    {feature.icon}
                  </div>
                  <span className="rounded-full border border-white/10 bg-neutral-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                  {feature.description}
                </p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section
        id="tech"
        className="scroll-mt-24 px-6 pt-6 pb-10 md:scroll-mt-28 md:pb-14"
      >
        <div className="mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
            className="text-3xl font-bold md:text-5xl"
          >
            Tech Stack 🛠️
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-white/65"
          >
            The platforms, tools, and core strengths I use to build reliable,
            observable, and high-performance database systems in production.
          </Motion.p>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          >
            {techStackGroups.map((group, index) => (
              <Motion.div
                key={group.label}
                variants={fadeUp}
                whileHover={{ y: -4, scale: 1.01 }}
                className="h-full rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 via-white/5 to-transparent p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                      Skill Area 0{index + 1}
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-white">
                      <span className="mr-2">{group.emoji}</span>
                      {group.label}
                    </h3>
                  </div>
                  <span className="rounded-full border border-white/10 bg-neutral-900/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white/60">
                    {group.items.length} Items
                  </span>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center rounded-xl border border-white/10 bg-neutral-900/75 px-3.5 py-2 text-sm font-medium text-white/85 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-24 px-6 pt-6 pb-10 md:scroll-mt-28 md:pb-14"
      >
        <div className="mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
            className="text-3xl font-bold md:text-5xl"
          >
            Experience 💼
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-white/65"
          >
            Hands-on database engineering experience across SaaS, fintech, and
            enterprise environments, with a focus on scalability, performance,
            resilience, and production reliability.
          </Motion.p>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 space-y-6"
          >
            {experienceTimeline.map((item) => (
              <Motion.article
                key={`${item.company}-${item.role}`}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/8"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                      {item.location}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-base text-white/70">{item.company}</p>
                  </div>
                  <p className="rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2 text-sm text-white/75">
                    {item.duration}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm text-white/75 md:text-base">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </Motion.article>
            ))}
          </Motion.div>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-16"
          >
            <Motion.h3
              variants={fadeUp}
              className="text-3xl font-bold text-white md:text-5xl"
            >
              Key Impact 📈
            </Motion.h3>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {keyImpact.map((item, index) => (
                <Motion.div
                  key={item}
                  variants={fadeUp}
                  className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.05] to-transparent p-5 text-white/80 backdrop-blur-sm"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/75">
                    Impact 0{index + 1}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/78 md:text-base">
                    {item}
                  </p>
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      <section
        id="teaching"
        className="scroll-mt-24 px-6 pt-6 pb-10 md:scroll-mt-28 md:pb-14"
      >
        <div className="mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
            className="text-3xl font-bold md:text-5xl"
          >
            Teaching &amp; Impact 📚
          </Motion.h2>

          <Motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
            whileHover={{ y: -4 }}
            className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/8"
          >
            <p className="max-w-4xl text-lg leading-8 text-white/72">
              Teaching Mathematics has been a passion of mine for the past 8
              years.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
              I started teaching students of 10th, 11th, and 12th grade during
              my third year of engineering, and it gradually became an
              important part of my journey.
            </p>

            <p className="mt-5 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
              Every year, I work with 150+ students, focusing on helping them
              understand concepts clearly rather than just memorizing
              solutions.
            </p>

            <ul className="mt-6 space-y-3 text-white/78">
              {teachingImpactHighlights.map((item) => (
                <li key={item.text} className="flex items-start gap-3">
                  <span className="text-lg leading-none">{item.icon}</span>
                  <span className="text-sm leading-7 md:text-base">{item.text}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 max-w-4xl text-base leading-8 text-white/72 md:text-lg">
              For me, teaching is not just about academics, it&apos;s about
              building confidence and shaping the way students think.
            </p>
          </Motion.article>
        </div>
      </section>

      <section
        id="blogs"
        className="scroll-mt-24 px-6 py-10 md:scroll-mt-28 md:py-14"
      >
        <div className="mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
            className="text-3xl font-bold md:text-5xl"
          >
            Blogs ✍️
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-white/65"
          >
            Writing focused on practical lessons from database operations,
            performance tuning, schema design, and production troubleshooting.
          </Motion.p>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {blogs.map((blog, index) => (
              <Motion.a
                key={blog.title}
                href={blog.link}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="block rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.05] to-transparent p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/8"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                    Article 0{index + 1}
                  </p>
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                    <BookOpen size={18} />
                  </div>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{blog.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/68 md:text-base">
                  {blog.desc}
                </p>
                <p className="mt-6 text-sm font-medium text-cyan-300">
                  Read more →
                </p>
              </Motion.a>
            ))}
          </Motion.div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 px-6 pt-6 pb-10 md:scroll-mt-28 md:pb-14"
      >
        <div className="mx-auto max-w-6xl">
          <Motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE }}
            className="text-3xl font-bold md:text-5xl"
          >
            Contact 📬
          </Motion.h2>

          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 * MOTION_DURATION_SCALE, delay: 0.1 }}
            className="mt-4 max-w-3xl text-lg text-white/65"
          >
            Open to conversations around database engineering, production
            reliability, and performance tuning across high-scale systems.
          </Motion.p>

          <Motion.div
            variants={staggerWrap}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid gap-6 md:grid-cols-3"
          >
            {contactMethods.map((item) => {
              const Icon = item.icon

              return (
                <Motion.a
                  key={item.label}
                  href={item.href}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.01 }}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition hover:border-cyan-400/30 hover:bg-white/8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300/80">
                        {item.label}
                      </p>
                      <p className="mt-3 break-all text-lg font-semibold text-white">
                        {item.value}
                      </p>
                    </div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
                      <Icon size={20} />
                    </div>
                  </div>
                </Motion.a>
              )
            })}
          </Motion.div>
        </div>
      </section>
    </div>
  )
}
