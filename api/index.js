import { createReadStream } from 'node:fs'
import fs from 'node:fs/promises'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

import { buildLlmsTxt, buildRobotsTxt, buildRssXml, buildSitemapXml } from '../src/lib/seo.js'

const clientDist = path.resolve(process.cwd(), 'dist/client')
const rendererPath = path.resolve(process.cwd(), 'dist/server/entry-server.js')
const templatePath = path.resolve(clientDist, 'index.html')

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.jpeg': 'image/jpeg',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
}

let templatePromise
let rendererPromise

function getTemplate() {
  templatePromise ??= fs.readFile(templatePath, 'utf-8')
  return templatePromise
}

function getRenderer() {
  rendererPromise ??= import(pathToFileURL(rendererPath).href)
  return rendererPromise
}

function getOrigin(request) {
  const forwardedProto = request.headers['x-forwarded-proto']
  const forwardedHost = request.headers['x-forwarded-host']
  const protocol = forwardedProto?.split(',')[0] ?? 'https'
  const host = forwardedHost?.split(',')[0] ?? request.headers.host ?? 'localhost'

  return `${protocol}://${host}`
}

function normalizePathname(pathname) {
  if (!pathname) {
    return '/'
  }

  return pathname.startsWith('/') ? pathname : `/${pathname}`
}

function getRequestTarget(request) {
  const rewrittenUrl = new URL(request.url ?? '/', 'http://localhost')
  const originalPathname = rewrittenUrl.searchParams.get('__pathname')

  rewrittenUrl.searchParams.delete('__pathname')

  const pathname = normalizePathname(originalPathname ?? rewrittenUrl.pathname)
  const search = rewrittenUrl.searchParams.toString()

  return {
    pathname,
    url: search ? `${pathname}?${search}` : pathname,
  }
}

function resolveStaticFilePath(rootDir, requestPath) {
  const normalizedPath = requestPath === '/' ? '/index.html' : requestPath
  const resolvedPath = path.resolve(rootDir, `.${normalizedPath}`)

  if (!resolvedPath.startsWith(rootDir)) {
    return null
  }

  return resolvedPath
}

function getCacheControlHeader(requestPath) {
  if (requestPath === '/favicon.png') {
    return 'public, max-age=31536000, immutable'
  }

  if (requestPath === '/site.webmanifest') {
    return 'public, max-age=86400'
  }

  if (/\.[a-z0-9]+$/i.test(requestPath)) {
    return 'public, max-age=31536000, immutable'
  }

  return null
}

async function serveStaticFile(requestPath, response) {
  const staticFilePath = resolveStaticFilePath(clientDist, requestPath)

  if (!staticFilePath) {
    return false
  }

  try {
    const fileStats = await fs.stat(staticFilePath)

    if (!fileStats.isFile()) {
      return false
    }

    const extension = path.extname(staticFilePath)
    const contentType = contentTypes[extension] ?? 'application/octet-stream'

    response.statusCode = 200
    response.setHeader('Content-Type', contentType)

    const cacheControl = getCacheControlHeader(requestPath)

    if (cacheControl) {
      response.setHeader('Cache-Control', cacheControl)
    }

    createReadStream(staticFilePath).pipe(response)
    return true
  } catch {
    return false
  }
}

export default async function handler(request, response) {
  try {
    const { pathname, url } = getRequestTarget(request)
    const origin = getOrigin(request)

    if (pathname === '/robots.txt') {
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/plain; charset=utf-8')
      response.end(buildRobotsTxt(origin))
      return
    }

    if (pathname === '/sitemap.xml') {
      response.statusCode = 200
      response.setHeader('Content-Type', 'application/xml; charset=utf-8')
      response.end(buildSitemapXml(origin))
      return
    }

    if (pathname === '/feed.xml') {
      response.statusCode = 200
      response.setHeader('Content-Type', 'application/rss+xml; charset=utf-8')
      response.end(buildRssXml(origin))
      return
    }

    if (pathname === '/llms.txt') {
      response.statusCode = 200
      response.setHeader('Content-Type', 'text/plain; charset=utf-8')
      response.end(buildLlmsTxt(origin))
      return
    }

    if (pathname === '/index.html') {
      response.statusCode = 301
      response.setHeader('Location', '/')
      response.end()
      return
    }

    if (path.extname(pathname)) {
      const served = await serveStaticFile(pathname, response)

      if (served) {
        return
      }
    }

    const [template, renderer] = await Promise.all([getTemplate(), getRenderer()])
    const { appHtml, head, robots, statusCode } = renderer.render(url, origin)

    const html = template
      .replace('<!--app-head-->', head)
      .replace('<!--app-html-->', appHtml)

    response.statusCode = statusCode
    response.setHeader('Content-Type', 'text/html; charset=utf-8')
    response.setHeader('X-Robots-Tag', robots)
    response.end(html)
  } catch (error) {
    response.statusCode = 500
    response.setHeader('Content-Type', 'text/plain; charset=utf-8')
    response.end(error instanceof Error ? error.stack : String(error))
  }
}
