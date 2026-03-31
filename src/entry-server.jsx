import { renderToString } from 'react-dom/server'

import App from './App'
import { getRoute } from './lib/routes'
import { getPageMetadata, renderHeadMarkup } from './lib/seo'

export function render(url, origin) {
  const route = getRoute(url)
  const metadata = getPageMetadata({ origin, route })
  const renderedHtml = renderToString(<App url={route.pathname} />)
  const preloadMarkup = renderedHtml.match(/^((?:<link\b[^>]*\/>)+)/)?.[1] ?? ''
  const appHtml = preloadMarkup ? renderedHtml.slice(preloadMarkup.length) : renderedHtml

  return {
    appHtml,
    head: `${renderHeadMarkup(metadata, origin)}${preloadMarkup}`,
    robots: metadata.robots,
    statusCode: route.kind === 'notFound' ? 404 : 200,
  }
}
