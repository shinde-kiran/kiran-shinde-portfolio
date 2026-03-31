import { featuredArticles } from '../content/siteContent'

export function normalizePath(input = '/') {
  const pathname = new URL(input, 'http://localhost').pathname

  if (pathname === '/') {
    return pathname
  }

  return pathname.replace(/\/+$/, '')
}

export function getRoute(url = '/') {
  const pathname = normalizePath(url)

  if (pathname === '/') {
    return {
      kind: 'home',
      pathname,
    }
  }

  const article = featuredArticles.find((item) => item.path === pathname)

  if (article) {
    return {
      kind: 'article',
      pathname,
      article,
    }
  }

  return {
    kind: 'notFound',
    pathname,
  }
}

export function getPublicRoutes() {
  return ['/', ...featuredArticles.map((item) => item.path)]
}
