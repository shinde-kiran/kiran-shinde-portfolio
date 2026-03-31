import { createReadStream } from 'node:fs'
import fs from 'node:fs/promises'
import http from 'node:http'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { createServer as createViteServer } from 'vite'

import { buildLlmsTxt, buildRobotsTxt, buildRssXml, buildSitemapXml } from './src/lib/seo.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = Number(process.env.PORT) || 5173
const host = process.env.HOST || '127.0.0.1'
const clientDist = path.resolve(__dirname, 'dist/client')
const devTemplatePath = path.resolve(__dirname, 'index.html')
const prodTemplatePath = path.resolve(clientDist, 'index.html')

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

const vite = isProduction
  ? null
  : await createViteServer({
      appType: 'custom',
      server: {
        middlewareMode: true,
      },
    })

const productionTemplate = isProduction
  ? await fs.readFile(prodTemplatePath, 'utf-8')
  : null

const productionRenderer = isProduction
  ? await import('./dist/server/entry-server.js')
  : null

function getOrigin(request) {
  const forwardedProto = request.headers['x-forwarded-proto']
  const forwardedHost = request.headers['x-forwarded-host']
  const protocol = forwardedProto?.split(',')[0] ?? 'http'
  const host = forwardedHost?.split(',')[0] ?? request.headers.host ?? `localhost:${port}`

  return `${protocol}://${host}`
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

async function renderPage(url, origin) {
  if (isProduction) {
    return {
      template: productionTemplate,
      ...productionRenderer.render(url, origin),
    }
  }

  let template = await fs.readFile(devTemplatePath, 'utf-8')
  template = await vite.transformIndexHtml(url, template)

  const renderer = await vite.ssrLoadModule('/src/entry-server.jsx')

  return {
    template,
    ...renderer.render(url, origin),
  }
}

async function handleApplicationRequest(request, response) {
  const requestUrl = new URL(request.url ?? '/', 'http://localhost')
  const origin = getOrigin(request)
  const pathname = requestUrl.pathname

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

  if (isProduction && path.extname(pathname)) {
    const served = await serveStaticFile(pathname, response)

    if (served) {
      return
    }
  }

  const { appHtml, head, robots, statusCode, template } = await renderPage(pathname, origin)

  const html = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', appHtml)

  response.statusCode = statusCode
  response.setHeader('Content-Type', 'text/html; charset=utf-8')
  response.setHeader('X-Robots-Tag', robots)
  response.end(html)
}

const server = http.createServer((request, response) => {
  const handleRequest = async () => {
    try {
      await handleApplicationRequest(request, response)
    } catch (error) {
      if (!isProduction) {
        vite.ssrFixStacktrace(error)
      }

      response.statusCode = 500
      response.setHeader('Content-Type', 'text/plain; charset=utf-8')
      response.end(error instanceof Error ? error.stack : String(error))
    }
  }

  if (!vite) {
    handleRequest()
    return
  }

  vite.middlewares(request, response, handleRequest)
})

server.listen(port, host, () => {
  console.log(`Server started at http://${host}:${port}`)
})
