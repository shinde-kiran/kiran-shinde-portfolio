import {
  experienceTimeline,
  faqItems,
  featuredArticles,
  getArticleSummary,
  getArticleTakeaways,
  lastUpdated,
  siteConfig,
} from '../content/siteContent.js'

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function buildCanonicalUrl(origin, pathname) {
  return pathname === '/' ? `${origin}/` : `${origin}${pathname}`
}

function getSiteOrigin(origin) {
  return siteConfig.siteUrl?.replace(/\/+$/, '') || origin
}

function countWords(value) {
  return value.trim().split(/\s+/).filter(Boolean).length
}

function getArticleWordCount(article) {
  return article.sections.reduce((total, section) => {
    const paragraphWords = section.paragraphs.reduce(
      (sum, paragraph) => sum + countWords(paragraph),
      0,
    )
    const bulletWords = section.bullets.reduce((sum, bullet) => sum + countWords(bullet), 0)

    return total + countWords(section.title) + paragraphWords + bulletWords
  }, 0)
}

function getArticleUpdatedDate(article) {
  return article.updatedDate ?? article.publishedDate ?? lastUpdated
}

function formatRssDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toUTCString()
}

function renderRssArticleContent(origin, article) {
  const siteOrigin = getSiteOrigin(origin)
  const canonicalUrl = buildCanonicalUrl(siteOrigin, article.path)
  const takeaways = getArticleTakeaways(article, 3)
  const takeawayMarkup = takeaways.length
    ? `<h2>Key takeaways</h2><ul>${takeaways
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join('')}</ul>`
    : ''

  return `<p>${escapeHtml(getArticleSummary(article))}</p>${takeawayMarkup}<p><a href="${canonicalUrl}">Read the full article</a></p>`
}

function buildHomeStructuredData(origin) {
  const siteOrigin = getSiteOrigin(origin)
  const canonicalUrl = buildCanonicalUrl(siteOrigin, '/')

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${canonicalUrl}#website`,
      url: canonicalUrl,
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: 'en-IN',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: `${siteConfig.name} | ${siteConfig.role}`,
      description: siteConfig.description,
      dateModified: lastUpdated,
      inLanguage: 'en-IN',
      isPartOf: {
        '@id': `${canonicalUrl}#website`,
      },
      mainEntity: {
        '@type': 'Person',
        '@id': `${canonicalUrl}#person`,
        name: siteConfig.name,
        jobTitle: siteConfig.role,
        description: siteConfig.shortBio,
        email: `mailto:${siteConfig.email}`,
        url: canonicalUrl,
        image: `${siteOrigin}${siteConfig.profileImage}`,
        homeLocation: {
          '@type': 'Place',
          name: siteConfig.location,
        },
        worksFor: {
          '@type': 'Organization',
          name: siteConfig.currentCompany,
        },
        sameAs: [siteConfig.linkedinUrl, siteConfig.topmateUrl],
        knowsAbout: siteConfig.knowsAbout,
        hasOccupation: {
          '@type': 'Occupation',
          name: 'Database Engineer',
          skills: siteConfig.knowsAbout.join(', '),
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#experience`,
      name: 'Professional Experience',
      itemListElement: experienceTimeline.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Role',
          roleName: item.role,
          startDate: item.startDate,
          endDate: item.endDate ?? undefined,
          worksFor: {
            '@type': 'Organization',
            name: item.company,
          },
        },
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      '@id': `${canonicalUrl}#writing`,
      name: 'Database engineering articles',
      itemListElement: featuredArticles.map((article, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${siteOrigin}${article.path}`,
        name: article.title,
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ]
}

function buildArticleStructuredData(origin, article) {
  const siteOrigin = getSiteOrigin(origin)
  const canonicalUrl = buildCanonicalUrl(siteOrigin, article.path)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: article.title,
      description: article.description,
      datePublished: article.publishedDate,
      dateModified: getArticleUpdatedDate(article),
      inLanguage: 'en-IN',
      isPartOf: {
        '@type': 'WebSite',
        '@id': `${siteOrigin}/#website`,
        url: `${siteOrigin}/`,
        name: siteConfig.name,
      },
      breadcrumb: {
        '@id': `${canonicalUrl}#breadcrumb`,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      '@id': `${canonicalUrl}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${siteOrigin}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Writing',
          item: `${siteOrigin}/#writing`,
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: article.title,
          item: canonicalUrl,
        },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${canonicalUrl}#article`,
      headline: article.title,
      url: canonicalUrl,
      description: article.description,
      datePublished: article.publishedDate,
      dateModified: getArticleUpdatedDate(article),
      mainEntityOfPage: canonicalUrl,
      image: `${siteOrigin}${siteConfig.profileImage}`,
      author: {
        '@type': 'Person',
        name: siteConfig.name,
        url: `${siteOrigin}/`,
      },
      publisher: {
        '@type': 'Person',
        name: siteConfig.name,
      },
      keywords: article.keywords.join(', '),
      articleSection: article.category,
      wordCount: getArticleWordCount(article),
      isAccessibleForFree: true,
      about: {
        '@type': 'Thing',
        name: article.category,
      },
    },
  ]
}

function buildNotFoundStructuredData(origin, pathname) {
  const canonicalUrl = buildCanonicalUrl(getSiteOrigin(origin), pathname)

  return [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: 'Page not found',
      description: 'The requested page could not be found.',
      inLanguage: 'en-IN',
    },
  ]
}

export function getPageMetadata({ origin, route }) {
  const siteOrigin = getSiteOrigin(origin)

  if (route.kind === 'article') {
    const canonicalUrl = buildCanonicalUrl(siteOrigin, route.pathname)

    return {
      title: `${route.article.title} | ${siteConfig.name}`,
      description: route.article.description,
      canonicalUrl,
      pageKind: 'article',
      ogType: 'article',
      robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
      keywords: [...siteConfig.keywords, ...route.article.keywords].join(', '),
      publishedTime: route.article.publishedDate,
      modifiedTime: getArticleUpdatedDate(route.article),
      articleSection: route.article.category,
      articleTags: route.article.keywords,
      structuredData: buildArticleStructuredData(origin, route.article),
    }
  }

  if (route.kind === 'notFound') {
    const canonicalUrl = buildCanonicalUrl(siteOrigin, route.pathname)

    return {
      title: `Page not found | ${siteConfig.name}`,
      description: 'The requested page could not be found.',
      canonicalUrl,
      pageKind: 'notFound',
      ogType: 'website',
      robots: 'noindex,nofollow',
      keywords: siteConfig.keywords.join(', '),
      structuredData: buildNotFoundStructuredData(origin, route.pathname),
    }
  }

  return {
    title: `${siteConfig.name} | ${siteConfig.role}, MongoDB and PostgreSQL Specialist`,
    description: siteConfig.description,
    canonicalUrl: buildCanonicalUrl(siteOrigin, route.pathname),
    pageKind: 'profile',
    ogType: 'profile',
    robots: 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    keywords: siteConfig.keywords.join(', '),
    structuredData: buildHomeStructuredData(origin),
  }
}

export function renderHeadMarkup(metadata, origin) {
  const siteOrigin = getSiteOrigin(origin)
  const ogImageUrl = `${siteOrigin}${siteConfig.profileImage}`
  const jsonLd = JSON.stringify(metadata.structuredData).replaceAll('<', '\\u003c')
  const profileMeta =
    metadata.pageKind === 'profile'
      ? `
    <meta property="profile:first_name" content="${escapeHtml(siteConfig.firstName)}" />
    <meta property="profile:last_name" content="${escapeHtml(siteConfig.lastName)}" />`
      : ''
  const articleMeta =
    metadata.pageKind === 'article'
      ? `
    <meta property="article:published_time" content="${escapeHtml(metadata.publishedTime)}" />
    <meta property="article:modified_time" content="${escapeHtml(metadata.modifiedTime)}" />
    <meta property="article:author" content="${escapeHtml(`${siteOrigin}/`)}" />
    <meta property="article:section" content="${escapeHtml(metadata.articleSection)}" />
${metadata.articleTags
  .map(
    (tag) => `    <meta property="article:tag" content="${escapeHtml(tag)}" />`,
  )
  .join('\n')}`
      : ''

  return `
    <title>${escapeHtml(metadata.title)}</title>
    <meta name="description" content="${escapeHtml(metadata.description)}" />
    <meta name="author" content="${escapeHtml(siteConfig.name)}" />
    <meta name="creator" content="${escapeHtml(siteConfig.name)}" />
    <meta name="publisher" content="${escapeHtml(siteConfig.name)}" />
    <meta name="robots" content="${escapeHtml(metadata.robots)}" />
    <meta name="googlebot" content="${escapeHtml(metadata.robots)}" />
    <meta name="keywords" content="${escapeHtml(metadata.keywords)}" />
    <meta name="application-name" content="${escapeHtml(siteConfig.name)}" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="theme-color" content="#0a0a0a" />
    <meta property="og:site_name" content="${escapeHtml(siteConfig.name)}" />
    <meta property="og:title" content="${escapeHtml(metadata.title)}" />
    <meta property="og:description" content="${escapeHtml(metadata.description)}" />
    <meta property="og:type" content="${escapeHtml(metadata.ogType)}" />
    <meta property="og:url" content="${escapeHtml(metadata.canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(ogImageUrl)}" />
    <meta property="og:image:type" content="${escapeHtml(siteConfig.profileImageType)}" />
    <meta property="og:image:width" content="${escapeHtml(siteConfig.profileImageWidth)}" />
    <meta property="og:image:height" content="${escapeHtml(siteConfig.profileImageHeight)}" />
    <meta property="og:image:alt" content="${escapeHtml(`${siteConfig.name} portrait`)}" />
    <meta property="og:locale" content="en_IN" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(metadata.title)}" />
    <meta name="twitter:description" content="${escapeHtml(metadata.description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImageUrl)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(`${siteConfig.name} portrait`)}" />
    <link rel="canonical" href="${escapeHtml(metadata.canonicalUrl)}" />
    <link
      rel="alternate"
      type="application/rss+xml"
      title="${escapeHtml(`${siteConfig.name} writing feed`)}"
      href="${escapeHtml(`${siteOrigin}/feed.xml`)}"
    />
    <link rel="alternate" type="text/plain" href="${escapeHtml(`${siteOrigin}/llms.txt`)}" />
    <link rel="me" href="${escapeHtml(siteConfig.linkedinUrl)}" />
    <link rel="me" href="${escapeHtml(siteConfig.topmateUrl)}" />
${profileMeta}
${articleMeta}
    <script type="application/ld+json">${jsonLd}</script>
  `
}

export function buildSitemapXml(origin) {
  const siteOrigin = getSiteOrigin(origin)
  const entries = [
    {
      pathname: '/',
      lastmod: lastUpdated,
      priority: '1.0',
    },
    ...featuredArticles.map((article) => ({
      pathname: article.path,
      lastmod: getArticleUpdatedDate(article),
      priority: '0.8',
    })),
  ]
    .map(
      (item) => `
  <url>
    <loc>${escapeHtml(buildCanonicalUrl(siteOrigin, item.pathname))}</loc>
    <lastmod>${item.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${item.priority}</priority>
  </url>`,
    )
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries}
</urlset>`
}

export function buildRssXml(origin) {
  const siteOrigin = getSiteOrigin(origin)
  const latestArticleDate = featuredArticles.reduce((latest, article) => {
    const current = getArticleUpdatedDate(article)
    return current > latest ? current : latest
  }, lastUpdated)
  const items = featuredArticles
    .map((article) => {
      const canonicalUrl = buildCanonicalUrl(siteOrigin, article.path)

      return `
    <item>
      <title>${escapeHtml(article.title)}</title>
      <link>${escapeHtml(canonicalUrl)}</link>
      <guid isPermaLink="true">${escapeHtml(canonicalUrl)}</guid>
      <description>${escapeHtml(getArticleSummary(article))}</description>
      <category>${escapeHtml(article.category)}</category>
      <pubDate>${formatRssDate(article.publishedDate)}</pubDate>
      <content:encoded><![CDATA[${renderRssArticleContent(origin, article)}]]></content:encoded>
    </item>`
    })
    .join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeHtml(`${siteConfig.name} | Database Engineering Writing`)}</title>
    <link>${escapeHtml(`${siteOrigin}/`)}</link>
    <description>${escapeHtml(siteConfig.description)}</description>
    <language>en-in</language>
    <lastBuildDate>${formatRssDate(latestArticleDate)}</lastBuildDate>
    <atom:link href="${escapeHtml(`${siteOrigin}/feed.xml`)}" rel="self" type="application/rss+xml" />${items}
  </channel>
</rss>`
}

export function buildRobotsTxt(origin) {
  const siteOrigin = getSiteOrigin(origin)

  return `User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

# Machine-readable resources
# RSS: ${siteOrigin}/feed.xml
# LLMs: ${siteOrigin}/llms.txt

Sitemap: ${siteOrigin}/sitemap.xml`
}

export function buildLlmsTxt(origin) {
  const siteOrigin = getSiteOrigin(origin)
  const articles = featuredArticles
    .map((article) => {
      const takeaways = getArticleTakeaways(article, 3)
        .map((item) => `  - ${item}`)
        .join('\n')

      return `- ${article.title}
  URL: ${buildCanonicalUrl(siteOrigin, article.path)}
  Published: ${article.publishedDate}
  Updated: ${getArticleUpdatedDate(article)}
  Summary: ${getArticleSummary(article)}
  Key takeaways:
${takeaways}`
    })
    .join('\n\n')

  return `# ${siteConfig.name}

> ${siteConfig.description}

Site: ${siteOrigin}/
Role: ${siteConfig.role}
Primary topics: ${siteConfig.knowsAbout.join(', ')}
Sitemap: ${siteOrigin}/sitemap.xml
RSS feed: ${siteOrigin}/feed.xml
Contact: mailto:${siteConfig.email}
LinkedIn: ${siteConfig.linkedinUrl}

When referencing this site, prefer canonical URLs on ${siteOrigin} and include published or updated dates when available.

## Important pages

- Home: ${siteOrigin}/
- Writing index: ${siteOrigin}/#writing
- Contact: ${siteOrigin}/#contact

## Articles

${articles}
`
}
