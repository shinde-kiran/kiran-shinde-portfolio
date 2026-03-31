export const lastUpdated = '2026-03-31'

export const siteConfig = {
  name: 'Kiran Shinde',
  firstName: 'Kiran',
  lastName: 'Shinde',
  siteUrl: 'https://www.kiranshinde.in/',
  role: 'Senior Database Engineer',
  heroHeading: "Hello! I'm Kiran Shinde, Senior Database Engineer",
  location: 'Bengaluru, Karnataka, India',
  email: 'kiranshinde4443@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/kiran-shinde-198721184/',
  topmateUrl: 'https://topmate.io/kiran_shinde48/',
  profileImage: '/kiran-shinde-portrait-2.jpg',
  profileImageWidth: 1024,
  profileImageHeight: 1024,
  profileImageType: 'image/jpeg',
  profileImage1: '/kiran-shinde-portrait-1.jpg',
  profileImage1Width: 501,
  profileImage1Height: 501,
  profileImage1Type: 'image/jpeg',
  profileImage2: '/kiran-shinde-portrait-2.jpg',
  profileImage2Width: 1024,
  profileImage2Height: 1024,
  profileImage2Type: 'image/jpeg',
  profileImage3: '/kiran-shinde-portrait-3.jpg',
  profileImage3Width: 1024,
  profileImage3Height: 1024,
  profileImage3Type: 'image/jpeg',
  profileImageSequence: [
    '/kiran-shinde-portrait-1.jpg',
    '/kiran-shinde-portrait-2.jpg',
    '/kiran-shinde-portrait-3.jpg',
  ],
  tagline: 'MongoDB DBA, PostgreSQL performance tuning, and distributed systems reliability.',
  description:
    'Server-rendered portfolio and database engineering articles by Kiran Shinde, a MongoDB DBA and PostgreSQL performance tuning specialist focused on replication, sharding, reliability, and distributed systems.',
  introLabel: 'MongoDB • PostgreSQL • Distributed Systems',
  heroGreeting: "Hello! I'm Kiran Shinde",
  introText:
    'I design and scale high-performance database systems with a primary focus on MongoDB and strong expertise in PostgreSQL. I specialize in replication, sharding, query optimization, and building reliable distributed data systems for production workloads.',
  heroSummary:
    'Experienced in optimizing large-scale databases, handling high-throughput systems, and ensuring reliability in production environments.',
  shortBio:
    'Senior database engineer focused on MongoDB, PostgreSQL, query tuning, indexing strategy, schema design, and production reliability.',
  currentCompany: 'Zzazz.ai',
  knowsAbout: [
    'MongoDB',
    'PostgreSQL',
    'Elasticsearch',
    'Redis',
    'Database performance tuning',
    'Query optimization',
    'Replication',
    'Sharding',
    'High availability',
    'Disaster recovery',
    'Database observability',
    'Distributed systems',
  ],
  keywords: [
    'Kiran Shinde',
    'Senior Database Engineer',
    'Database Engineer portfolio',
    'MongoDB DBA',
    'PostgreSQL DBA',
    'Database performance tuning',
    'Query optimization',
    'Replication and sharding',
    'Distributed systems engineer',
    'Database reliability engineer',
  ],
}

export const collaborationServices = [
  {
    title: 'Database performance tuning',
    description:
      'Slow query diagnosis, execution-plan analysis, index strategy, and workload-aware optimizations for MongoDB and PostgreSQL.',
  },
  {
    title: 'Reliability and production readiness',
    description:
      'Replication design, failover planning, backup strategy, recovery testing, and observability improvements for critical environments.',
  },
  {
    title: 'Schema and data-model reviews',
    description:
      'Practical schema design for scalable systems with attention to growth, maintainability, and real production access patterns.',
  },
  {
    title: 'Operational mentoring',
    description:
      'Hands-on guidance for teams working on database administration, incident response, and long-term database engineering maturity.',
  },
]

export const faqItems = [
  {
    question: 'What databases does Kiran Shinde specialize in?',
    answer:
      'Kiran specializes primarily in MongoDB and PostgreSQL, with additional production experience across Redis, Elasticsearch, and Cassandra.',
  },
  {
    question: 'What kind of database engineering problems does Kiran work on?',
    answer:
      'Typical focus areas include query optimization, indexing strategy, replication and sharding, schema design, database reliability, backup and recovery, and observability for production systems.',
  },
  {
    question: 'Is Kiran available for mentoring or advisory conversations?',
    answer:
      'Yes. The portfolio includes direct contact options for email and Topmate, which makes it easy to start a mentoring, advisory, or technical discussion.',
  },
  {
    question: 'Does this site include writing about database performance and schema design?',
    answer:
      'Yes. The writing section includes practical pages on PostgreSQL query tuning, database indexing, schema design, MongoDB failovers, replication lag, sharding readiness, and production reliability checklists.',
  },
]

export const navigationLinks = [
  { label: 'Specialties', href: '/#specialties' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Teaching', href: '/#teaching' },
  { label: 'Writing', href: '/#writing' },
  { label: 'Contact', href: '/#contact' },
]

export const utilityLinks = [
  {
    label: 'LinkedIn profile',
    href: siteConfig.linkedinUrl,
    kind: 'linkedin',
  },
  {
    label: 'Topmate profile',
    href: siteConfig.topmateUrl,
    kind: 'sparkles',
  },
  {
    label: 'Send email',
    href: `mailto:${siteConfig.email}`,
    kind: 'mail',
  },
  {
    label: 'Read writing',
    href: '/#writing',
    kind: 'book',
  },
]

export const specialties = [
  {
    title: 'Scalable Data Platforms',
    description:
      'Designing resilient OLTP and analytics systems with clean schema strategy, partitioning, indexing, and replication.',
    icon: 'database',
  },
  {
    title: 'Performance Tuning',
    description:
      'Improving query performance using indexing, execution plans, storage tuning, and workload optimization.',
    icon: 'gauge',
  },
  {
    title: 'Reliability and Recovery',
    description:
      'Building operational confidence through backups, failover design, incident response, and disaster recovery planning.',
    icon: 'shield',
  },
  {
    title: 'Data Modeling',
    description:
      'Designing schemas that stay maintainable under high growth, evolving product needs, and production constraints.',
    icon: 'workflow',
  },
]

export const techStackGroups = [
  {
    icon: 'database',
    label: 'Databases',
    items: ['MongoDB', 'PostgreSQL', 'Elasticsearch', 'Redis', 'Cassandra'],
  },
  {
    icon: 'settings',
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
    icon: 'chart',
    label: 'Monitoring and Tooling',
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
    icon: 'cloud',
    label: 'Cloud and DevOps',
    items: ['AWS EC2', 'DigitalOcean', 'Docker'],
  },
  {
    icon: 'code',
    label: 'Operating Systems and Scripting',
    items: ['Linux', 'Ubuntu', 'Windows', 'Python', 'Bash'],
  },
]

export const experienceTimeline = [
  {
    company: 'Zzazz.ai',
    role: 'Database Administrator',
    location: 'Bengaluru, India',
    durationLabel: 'Jan 2026 - Present',
    startDate: '2026-01',
    endDate: null,
    highlights: [
      'Own end-to-end performance, scalability, and reliability of MongoDB, PostgreSQL, Elasticsearch, and Redis clusters for high-traffic SaaS applications.',
      'Manage MongoDB replica sets, sharded clusters, and PostgreSQL replication setups across distributed architectures.',
      'Improved critical query performance by 35 to 40 percent through EXPLAIN ANALYZE reviews, index redesign, and query restructuring.',
      'Implemented table partitioning, PostgreSQL autovacuum tuning, WAL optimization, and proactive monitoring across slow queries, replication lag, CPU, memory, and I/O.',
      'Tuned Elasticsearch shard allocation, heap management, and index mappings, improving search latency by 50 percent.',
      'Designed Redis caching strategies, backup and recovery workflows, RCA practices, and zero-downtime database changes with backend and DevOps teams.',
    ],
  },
  {
    company: 'Sprinklr Inc.',
    role: 'Configuration Specialist',
    location: 'Bengaluru, India',
    durationLabel: 'Apr 2025 - Jan 2026',
    startDate: '2025-04',
    endDate: '2026-01',
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
    location: 'Mumbai, India',
    durationLabel: 'Dec 2024 - Apr 2025',
    startDate: '2024-12',
    endDate: '2025-04',
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
    location: 'Mumbai, India',
    durationLabel: 'May 2021 - Dec 2024',
    startDate: '2021-05',
    endDate: '2024-12',
    highlights: [
      'Managed MongoDB, Cassandra, and SQL databases supporting mission-critical banking applications.',
      'Tuned high-frequency transactional queries and reduced execution time by 30 percent.',
      'Developed and optimized stored procedures, indexes, and joins for reporting systems.',
      'Led UAT and production deployments while maintaining high availability during peak transaction loads.',
      'Coordinated L1 support, resolved critical production incidents, and strengthened reliability during cloud migration initiatives.',
      'Implemented access controls and maintained strong data integrity compliance.',
    ],
  },
]

export const keyImpact = [
  'Managed production systems with 100M+ records in distributed environments.',
  'Improved database and search latency by up to 40 to 50 percent.',
  'Reduced production incidents through proactive monitoring and performance engineering.',
  'Strengthened high availability, failover, and disaster recovery strategies in high-SLA environments.',
  'Enhanced database observability and reduced downtime risks.',
]

export const teachingContent = {
  intro:
    'Teaching Mathematics has been a parallel craft for the last 8 years, shaped by the same problem-solving mindset I bring to engineering.',
  paragraphs: [
    'I started teaching students in 10th, 11th, and 12th grade during my third year of engineering, and it steadily became a meaningful part of my journey.',
    'Each year, I work with more than 150 students, focusing on concept clarity, reasoning, and confidence rather than rote learning.',
    'For me, teaching is not just about academics. It is about helping students think clearly, ask better questions, and build self-belief.',
  ],
  highlights: [
    { icon: 'graduation', text: 'Mentored 1000+ students over the years.' },
    { icon: 'brain', text: 'Built strong fundamentals and problem-solving skills.' },
    { icon: 'book', text: 'Simplified complex topics into easy-to-understand concepts.' },
  ],
}

export const contactMethods = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    kind: 'mail',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/kiran-shinde-198721184',
    href: siteConfig.linkedinUrl,
    kind: 'linkedin',
  },
  {
    label: 'Topmate',
    value: 'topmate.io/kiran_shinde48',
    href: siteConfig.topmateUrl,
    kind: 'sparkles',
  },
]

export const featuredArticles = [
  {
    slug: 'optimizing-postgresql-queries',
    path: '/blogs/optimizing-postgresql-queries',
    category: 'PostgreSQL',
    title: 'Optimizing PostgreSQL Queries for Production Workloads',
    description:
      'A practical PostgreSQL tuning workflow covering query plans, indexing choices, join strategy, and the metrics that matter in production.',
    cardDescription:
      'A practical workflow for reducing slow PostgreSQL queries through plans, indexing, join strategy, and workload-aware tuning.',
    readTime: '5 min read',
    publishedDate: '2026-03-31',
    updatedDate: '2026-03-31',
    keywords: [
      'PostgreSQL query optimization',
      'EXPLAIN ANALYZE',
      'PostgreSQL performance tuning',
      'slow query optimization',
    ],
    sections: [
      {
        title: 'Start with the execution plan, not assumptions',
        paragraphs: [
          'The biggest gains usually come from understanding where PostgreSQL is already spending time. Before changing indexes or rewriting SQL, I start with EXPLAIN ANALYZE and compare estimated cost with actual rows, timing, and join choices.',
          'That gap between estimated and actual behavior often shows whether the problem is stale statistics, poor selectivity, or a join order that no longer matches production data patterns.',
        ],
        bullets: [
          'Validate row estimates before rewriting the query.',
          'Look for sequential scans on large tables with highly selective filters.',
          'Check whether sort, hash, or nested loop operations are spilling or repeating unexpectedly.',
        ],
      },
      {
        title: 'Tune the access path before touching hardware',
        paragraphs: [
          'Production queries usually improve fastest when the access path gets narrower. That can mean a covering index, a more selective composite index, or a query rewrite that lets PostgreSQL use existing indexes more effectively.',
          'I also review whether the query is forcing expensive casts, functions on indexed columns, or wide result sets that make otherwise good plans expensive.',
        ],
        bullets: [
          'Design composite indexes around filter and join order, not just column popularity.',
          'Avoid SELECT * on frequently executed operational queries.',
          'Use partial indexes when a hot subset of rows drives most reads.',
        ],
      },
      {
        title: 'Measure improvements in the context of the workload',
        paragraphs: [
          'A query that looks faster in isolation can still hurt concurrency, cache behavior, or write throughput. That is why I compare improvements against real workload signals such as p95 latency, lock time, buffer usage, and overall system pressure.',
          'Good tuning work does not stop at a single query. It confirms that the change makes the system healthier under normal and peak traffic.',
        ],
        bullets: [
          'Track p95 and p99 latency after the change, not just average execution time.',
          'Review buffer hits, I/O pressure, and lock contention alongside query timing.',
          'Document the reason for each index so future schema changes do not silently reverse the gain.',
        ],
      },
    ],
  },
  {
    slug: 'database-indexing-guide',
    path: '/blogs/database-indexing-guide',
    category: 'Indexing',
    title: 'Database Indexing Guide: Choosing the Right Index Strategy',
    description:
      'A concise guide to database indexing strategy, including B-tree decisions, composite indexes, selective filtering, and avoiding write-heavy over-indexing.',
    cardDescription:
      'How to think about B-tree indexes, selective filters, composite design, and the tradeoffs of over-indexing busy production tables.',
    readTime: '6 min read',
    publishedDate: '2026-03-31',
    updatedDate: '2026-03-31',
    keywords: [
      'database indexing guide',
      'B-tree index strategy',
      'composite index design',
      'indexing best practices',
    ],
    sections: [
      {
        title: 'Index for query patterns, not for every column',
        paragraphs: [
          'Indexes are powerful because they reduce search space, but they are not free. Every extra index adds write overhead, storage cost, and maintenance complexity. The right question is not whether a column can be indexed, but whether a real query pattern benefits enough to justify it.',
          'I usually begin by grouping slow queries into recurring access patterns: exact lookups, range scans, joins, and ordered pagination. Those patterns guide the index strategy far better than a list of popular columns.',
        ],
        bullets: [
          'Map indexes to high-frequency reads and business-critical queries.',
          'Avoid duplicate or near-duplicate indexes with overlapping prefixes.',
          'Review write amplification before adding indexes to transactional tables.',
        ],
      },
      {
        title: 'Composite indexes win when order matches the workload',
        paragraphs: [
          'Composite indexes are often where the real optimization happens, especially in systems with predictable filters and joins. The key is column order. Equality filters usually come first, then range conditions, then supporting sort order where it makes sense.',
          'A well-ordered composite index can replace multiple weaker indexes and make plans more stable across growth phases.',
        ],
        bullets: [
          'Lead with the most selective and consistently filtered columns.',
          'Align index order with the WHERE and ORDER BY clauses you actually run.',
          'Validate the benefit with execution plans instead of assuming the optimizer will use it.',
        ],
      },
      {
        title: 'Index quality depends on ongoing review',
        paragraphs: [
          'Indexing is not a one-time design step. Query shape changes, products add filters, and data distribution shifts over time. That means an index strategy should be reviewed alongside schema changes and slow-query trends.',
          'Healthy systems keep only the indexes that earn their keep, and they retire the ones that no longer help.',
        ],
        bullets: [
          'Audit unused indexes periodically to reduce maintenance cost.',
          'Watch for tables whose write latency rises after index growth.',
          'Treat indexing as part of release discipline, not emergency cleanup.',
        ],
      },
    ],
  },
  {
    slug: 'schema-design-best-practices',
    path: '/blogs/schema-design-best-practices',
    category: 'Schema Design',
    title: 'Schema Design Best Practices for Scalable Systems',
    description:
      'Schema design guidance for scalable systems, covering access patterns, normalization tradeoffs, evolution safety, and operational clarity in production.',
    cardDescription:
      'How to design schemas that stay readable, scalable, and evolution-friendly as products, teams, and workloads grow.',
    readTime: '6 min read',
    publishedDate: '2026-03-31',
    updatedDate: '2026-03-31',
    keywords: [
      'schema design best practices',
      'database schema design',
      'scalable database schema',
      'data modeling for production systems',
    ],
    sections: [
      {
        title: 'Design around access patterns and ownership',
        paragraphs: [
          'A scalable schema begins with the shape of the product and the shape of the read and write paths. I start by identifying which entities change together, which services own them, and which queries must stay fast under load.',
          'That design lens keeps the schema grounded in operational reality instead of theoretical purity.',
        ],
        bullets: [
          'Model entities around bounded ownership and the workflows that use them.',
          'Make critical read paths explicit before finalizing relationships.',
          'Keep naming and constraints consistent enough for teams to reason about quickly.',
        ],
      },
      {
        title: 'Balance normalization with production practicality',
        paragraphs: [
          'Normalization helps preserve correctness, but production systems also need predictability under real latency and concurrency constraints. Some domains benefit from strong normalization, while others need selective denormalization to avoid repeated joins on hot paths.',
          'The right choice is usually the one that keeps writes trustworthy and reads affordable at the same time.',
        ],
        bullets: [
          'Normalize core source-of-truth data where integrity matters most.',
          'Denormalize carefully when it simplifies critical read paths.',
          'Document derived fields and ownership so they do not drift silently.',
        ],
      },
      {
        title: 'Leave room for evolution, migration, and observability',
        paragraphs: [
          'Good schema design makes future change safer. That means using additive migrations where possible, planning for backfills, and choosing conventions that remain debuggable when tables become large and teams become distributed.',
          'Operational clarity matters just as much as the original model because mature systems spend more time evolving than launching.',
        ],
        bullets: [
          'Prefer migration paths that minimize locking and downtime.',
          'Add audit-friendly timestamps, ownership fields, and clear constraints.',
          'Review schema growth together with indexing, retention, and archival strategy.',
        ],
      },
    ],
  },
  {
    slug: 'mongodb-failover-notes-from-real-alerts',
    path: '/blogs/mongodb-failover-notes-from-real-alerts',
    category: 'MongoDB Reliability',
    title: 'What I Check First When a MongoDB Failover Wakes Everyone Up',
    description:
      'A human, operations-focused walkthrough of how I read a MongoDB failover: election timing, node health, replication lag, application impact, and the calm steps that matter.',
    cardDescription:
      'The checklist I come back to when a MongoDB failover happens at the wrong time and everyone wants answers immediately.',
    readTime: '7 min read',
    publishedDate: '2026-03-24',
    updatedDate: '2026-03-24',
    keywords: [
      'MongoDB failover checklist',
      'MongoDB replica set failover',
      'MongoDB reliability',
      'MongoDB production incident',
    ],
    sections: [
      {
        title: 'I start by calming the timeline down',
        paragraphs: [
          'When a MongoDB failover happens, the first few minutes can get noisy fast. Alerts fire, dashboards light up, and everyone wants a single cause right away. I have learned that the fastest way to be useful is to slow the story down and rebuild the timeline carefully.',
          'I want to know when the primary became unhealthy, how long the election took, whether clients actually saw write failures, and whether the secondary that won looked healthy before the event. Those details usually tell me more than the loudest graph on the screen.',
        ],
        bullets: [
          'Confirm the election window before debating root cause.',
          'Check whether the application saw retries, write concern failures, or timeouts.',
          'Separate alert noise from the exact time when service behavior changed.',
        ],
      },
      {
        title: 'The question is not just who became primary',
        paragraphs: [
          'A successful election is not automatically a healthy recovery. I still want to understand replication lag, oplog pressure, node resource usage, and whether the new primary is stable enough to stay in charge under real traffic.',
          'In practice, I pay close attention to the secondaries too. If they are far behind or resource-starved, the cluster may look recovered on paper while still being one bad moment away from another election.',
        ],
        bullets: [
          'Review replication lag and recent oplog behavior after the election settles.',
          'Check CPU, memory, disk, and network pressure on the new primary and its peers.',
          'Make sure the cluster is stable enough for normal write traffic before declaring it healthy.',
        ],
      },
      {
        title: 'After the failover, I look for the small signs',
        paragraphs: [
          'The most useful work often starts after the cluster is back. I review logs, compare node behavior, and ask whether this was a clean one-off event or a symptom of something we have been tolerating for too long.',
          'Sometimes the lesson is about infrastructure instability. Sometimes it is about oversized workloads, under-observed replication lag, or maintenance decisions made without enough margin. The point is not just to close the alert. It is to leave the cluster stronger than it was before.',
        ],
        bullets: [
          'Capture the event timeline while the details are still fresh.',
          'Write down what would have made the diagnosis faster next time.',
          'Turn the incident into one or two concrete reliability improvements, not just a status update.',
        ],
      },
    ],
  },
  {
    slug: 'the-index-i-did-not-need',
    path: '/blogs/the-index-i-did-not-need',
    category: 'Indexing Lessons',
    title: 'The Index I Did Not Need and What It Taught Me',
    description:
      'A practical note on over-indexing, write overhead, and why the best optimization is sometimes removing an index instead of adding one.',
    cardDescription:
      'A quieter lesson from production work: sometimes the right indexing decision is to remove one that looked smart on paper.',
    readTime: '6 min read',
    publishedDate: '2026-03-18',
    updatedDate: '2026-03-18',
    keywords: [
      'over indexing database',
      'index write overhead',
      'database indexing lessons',
      'index optimization',
    ],
    sections: [
      {
        title: 'Why the extra index looked like a good idea',
        paragraphs: [
          'I have added indexes that made perfect sense during review and still turned out to be the wrong call in production. Usually it happens because the read pattern is real, but the write cost is more expensive than it looked from one query in isolation.',
          'An index can feel like a harmless safety net when you are staring at a slow query. But if the table is busy, that extra structure changes every insert, update, and maintenance cycle that touches it.',
        ],
        bullets: [
          'A single slow query does not always justify a permanent index.',
          'The read benefit has to beat the write and maintenance cost.',
          'Good indexing decisions depend on workload shape, not just SQL shape.',
        ],
      },
      {
        title: 'What changed when writes got busy',
        paragraphs: [
          'The problem usually becomes visible when traffic rises. Write latency starts drifting, maintenance gets heavier, and suddenly the index that once looked helpful becomes part of the reason the table feels harder to manage.',
          'That is why I try to measure indexing decisions against real traffic periods instead of quiet windows. A design that feels elegant at low volume can become friction at scale.',
        ],
        bullets: [
          'Review write amplification whenever a new index lands on a hot table.',
          'Watch whether maintenance jobs or vacuum behavior change after the addition.',
          'Compare the gain for the target query with the cost paid by everything else.',
        ],
      },
      {
        title: 'How I decide whether an index has earned its place',
        paragraphs: [
          'I like indexes that are clearly attached to important read paths and easy to explain to the next engineer. If I cannot describe why an index exists, what query it protects, and how often that query matters, the index is already on shaky ground.',
          'Removing an index is not glamorous, but it can be one of the cleanest optimizations in a mature system. Sometimes clarity is the real performance improvement.',
        ],
        bullets: [
          'Keep only the indexes that protect real, recurring business-critical queries.',
          'Document why an index exists before the context disappears.',
          'Be willing to remove indexes that no longer earn their operational cost.',
        ],
      },
    ],
  },
  {
    slug: 'postgresql-replication-lag-checklist',
    path: '/blogs/postgresql-replication-lag-checklist',
    category: 'PostgreSQL Operations',
    title: 'My PostgreSQL Replication Lag Checklist Before It Becomes an Incident',
    description:
      'A first-person operational checklist for reading PostgreSQL replication lag, checking WAL pressure, and deciding when the problem is real enough to escalate.',
    cardDescription:
      'The PostgreSQL replication lag checklist I use before a worrying graph turns into a real production incident.',
    readTime: '7 min read',
    publishedDate: '2026-03-12',
    updatedDate: '2026-03-12',
    keywords: [
      'PostgreSQL replication lag',
      'WAL troubleshooting',
      'PostgreSQL operations checklist',
      'replica lag diagnosis',
    ],
    sections: [
      {
        title: 'I separate scary dashboards from real risk',
        paragraphs: [
          'Replication lag graphs can look dramatic before users feel anything. So my first question is always whether the lag is affecting the thing the replicas are actually there for: read traffic, failover confidence, or recovery expectations.',
          'I do not want to underreact, but I also do not want to turn every lag spike into a production drama. The best first step is understanding whether the lag is transient, repeating, or growing faster than the system can recover.',
        ],
        bullets: [
          'Check whether replica-backed reads or failover expectations are already at risk.',
          'Compare the current lag with the normal pattern for that workload window.',
          'Treat acceleration and instability as more important than a single absolute number.',
        ],
      },
      {
        title: 'Then I look at WAL, I/O, and replay behavior',
        paragraphs: [
          'Once I know the lag matters, I move to the mechanics. Is the primary generating WAL faster than expected? Is the replica slow to receive, slow to write, or slow to replay? Those are very different problems, and mixing them together wastes time.',
          'I usually check disk behavior, network stability, replay delays, and whether the replica is simply being asked to keep up with a workload that changed more quickly than the topology did.',
        ],
        bullets: [
          'Break the problem into send, write, flush, and replay stages.',
          'Look for storage or network pressure before blaming PostgreSQL itself.',
          'Check whether workload spikes or maintenance jobs created the lag window.',
        ],
      },
      {
        title: 'The real fix is usually upstream of the replica',
        paragraphs: [
          'Sometimes the replica needs tuning, but often the lasting fix is somewhere earlier in the chain: a bursty write pattern, oversized maintenance work, poor batching, or a primary under more pressure than it should be carrying.',
          'That is why I try to close replication lag incidents with a system-level lesson, not just a replica-level tweak. Otherwise the same graph comes back next week wearing a different disguise.',
        ],
        bullets: [
          'Use the lag incident to ask what changed on the primary or in the workload.',
          'Reduce burstiness where possible instead of endlessly tuning around it.',
          'Aim for better failover confidence, not just a temporarily smaller lag graph.',
        ],
      },
    ],
  },
  {
    slug: 'sharding-readiness-checklist',
    path: '/blogs/sharding-readiness-checklist',
    category: 'MongoDB Sharding',
    title: 'How I Know a Team Is Actually Ready for MongoDB Sharding',
    description:
      'A practical readiness guide for MongoDB sharding based on workload shape, shard key choice, operational maturity, and the questions I ask before saying yes.',
    cardDescription:
      'Sharding can help, but only when the workload and the team are ready for it. These are the questions I ask first.',
    readTime: '8 min read',
    publishedDate: '2026-03-05',
    updatedDate: '2026-03-05',
    keywords: [
      'MongoDB sharding checklist',
      'shard key strategy',
      'MongoDB scaling guide',
      'distributed database readiness',
    ],
    sections: [
      {
        title: 'Sharding is a scaling move, not a shortcut',
        paragraphs: [
          'I get nervous when sharding enters the conversation too early. It is powerful, but it also makes operations, debugging, and capacity planning more demanding. If the underlying workload is not well understood, sharding can spread confusion faster than it spreads data.',
          'The teams that do best with sharding already know their hot paths, their growth shape, and the limits of their current single-cluster design. They are not reaching for sharding because it sounds advanced. They are reaching for it because the evidence is clear.',
        ],
        bullets: [
          'Use sharding for an understood scaling problem, not for general uncertainty.',
          'Make sure current bottlenecks are measured and repeatable.',
          'Treat sharding as an architectural commitment, not a temporary patch.',
        ],
      },
      {
        title: 'I look at the shard key conversation very carefully',
        paragraphs: [
          'Most of the important decisions show up in the shard key discussion. If the team is still guessing about access patterns, write distribution, or tenant behavior, that uncertainty usually appears here first.',
          'I want to hear a shard key argument that reflects real query patterns and real operational constraints. The best shard keys are rarely the most convenient ones. They are the ones that stay healthy under future growth, not just day-one load.',
        ],
        bullets: [
          'Validate the shard key against read paths, write patterns, and growth assumptions.',
          'Watch for hot partitions, monotonic keys, and weak distribution.',
          'Make sure the team can explain the tradeoffs, not just the choice.',
        ],
      },
      {
        title: 'Operational maturity matters as much as architecture',
        paragraphs: [
          'A team can have the right scaling problem and still not be ready if the operational basics are thin. Sharding asks more from monitoring, incident response, capacity review, and change discipline than a simpler topology does.',
          'That is why I treat operational readiness as part of sharding readiness. If backup confidence, observability, and ownership are already shaky, sharding will usually make that more visible, not less.',
        ],
        bullets: [
          'Strengthen monitoring and ownership before adding distributed complexity.',
          'Make sure failover, backup, and growth reviews already have clear owners.',
          'Say yes to sharding when the team can operate it well, not just deploy it.',
        ],
      },
    ],
  },
  {
    slug: 'search-latency-case-study',
    path: '/blogs/search-latency-case-study',
    category: 'Case Study',
    title: 'A Small Search Latency Case Study: What Helped More Than Another Bigger Server',
    description:
      'A practical case study on reducing search latency by focusing on shard layout, mappings, and heap behavior instead of immediately scaling hardware.',
    cardDescription:
      'A grounded case study on reducing search latency by cleaning up the workload rather than reaching for a bigger server first.',
    readTime: '7 min read',
    publishedDate: '2026-02-25',
    updatedDate: '2026-02-25',
    keywords: [
      'search latency case study',
      'Elasticsearch performance tuning',
      'search shard optimization',
      'production search performance',
    ],
    sections: [
      {
        title: 'The first lesson was that the cluster was not slow in one simple way',
        paragraphs: [
          'When search latency rises, it is tempting to summarize the problem too quickly. But the systems that actually improve are the ones where we resist that urge. In this case, the slow feeling came from several smaller sources: shard imbalance, heavier-than-needed mappings, and memory behavior that looked fine until peak traffic arrived.',
          'That changed the conversation immediately. Instead of asking how to buy more headroom, we started asking where the system was wasting the headroom it already had.',
        ],
        bullets: [
          'Avoid treating a broad latency symptom as if it has a single root cause.',
          'Break the problem into mapping, shard, memory, and traffic-behavior questions.',
          'Use the investigation to narrow waste before you widen infrastructure.',
        ],
      },
      {
        title: 'We got farther by reducing waste than by throwing more capacity at it',
        paragraphs: [
          'The best gains came from cleaner shard placement, more deliberate mappings, and healthier JVM behavior. None of those changes felt flashy on their own, but together they gave the cluster room to breathe under the same traffic pattern.',
          'I like this kind of improvement because it tends to last longer. When the system becomes simpler and more predictable, performance work stops feeling like a temporary rescue and starts feeling like an engineering upgrade.',
        ],
        bullets: [
          'Tune shard layout and mappings before assuming the answer is more hardware.',
          'Treat memory pressure as an experience problem, not only an infrastructure metric.',
          'Look for repeatable wins that make the cluster easier to reason about.',
        ],
      },
      {
        title: 'The lasting improvement came from making the system easier to observe',
        paragraphs: [
          'What helped most after the latency dropped was better visibility. Once the team could see shard behavior, heap pressure, and request patterns more clearly, the next round of tuning stopped feeling reactive.',
          'That is the part I try to keep from every case study. The fastest fix matters, but the real win is building a system that tells the truth sooner the next time it starts to drift.',
        ],
        bullets: [
          'Keep the dashboards that made the diagnosis clearer, not just the change itself.',
          'Turn performance work into better observability wherever possible.',
          'A faster system is good, but an easier-to-read system is even better over time.',
        ],
      },
    ],
  },
  {
    slug: 'database-release-week-checklist',
    path: '/blogs/database-release-week-checklist',
    category: 'Reliability Checklist',
    title: 'My Database Release Week Checklist for Safer Production Changes',
    description:
      'A practical release checklist for database changes, backups, rollback plans, query risk, and keeping teams calm during production releases.',
    cardDescription:
      'The release-week checklist I use to keep database changes boring, safe, and easier to recover from if something drifts.',
    readTime: '6 min read',
    publishedDate: '2026-02-16',
    updatedDate: '2026-02-16',
    keywords: [
      'database release checklist',
      'safe production database changes',
      'database rollback planning',
      'database deployment best practices',
    ],
    sections: [
      {
        title: 'I want rollback clarity before I want speed',
        paragraphs: [
          'Database release weeks go better when rollback thinking happens early. I do not need every change to be reversible in one click, but I do need the team to be honest about which changes are easy to undo, which ones require data handling, and what the safe stopping points are.',
          'That clarity changes the mood of a release. People make better decisions when they know what a bad branch looks like and what the next safe step would be.',
        ],
        bullets: [
          'Make rollback expectations explicit before the change window opens.',
          'Identify the steps that are reversible, irreversible, or only reversible with data work.',
          'Write down the stop points that allow the team to pause safely.',
        ],
      },
      {
        title: 'I try to reduce surprises, not just downtime',
        paragraphs: [
          'A release can stay up and still be stressful if nobody has good visibility into query behavior, lock risk, or replication impact. That is why I treat observability as part of release preparation, not a separate concern.',
          'The teams I trust most in production are the ones who can tell the difference between a harmless wobble and the beginning of a real problem without arguing for twenty minutes first.',
        ],
        bullets: [
          'Review the queries and tables most likely to feel the change.',
          'Watch lock behavior, replication health, and application error patterns during the window.',
          'Prefer simple dashboards and decision points over noisy release theater.',
        ],
      },
      {
        title: 'Good release weeks feel boring on purpose',
        paragraphs: [
          'This is one of my favorite signs of a healthy team: the release week feels almost uneventful. That usually means the planning was thoughtful, the blast radius was understood, and nobody was relying on heroics to get through the change.',
          'Boring releases are not an accident. They are what good preparation looks like from the outside.',
        ],
        bullets: [
          'Break large changes into smaller, reviewable steps whenever possible.',
          'Use preparation to lower emotion, not just to satisfy a checklist.',
          'If a release depends on last-minute improvisation, the plan needs another pass.',
        ],
      },
    ],
  },
]

export function getArticleSummary(article) {
  return article.summary ?? article.description
}

export function getArticleTakeaways(article, limit = 3) {
  if (article.takeaways?.length) {
    return article.takeaways.slice(0, limit)
  }

  return article.sections
    .flatMap((section) => section.bullets ?? [])
    .filter(Boolean)
    .slice(0, limit)
}
