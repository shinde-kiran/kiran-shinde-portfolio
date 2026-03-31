import BlogPage from './components/BlogPage'
import DatabaseEngineerLandingPage from './components/LandingPage'
import NotFoundPage from './components/NotFoundPage'
import { getRoute } from './lib/routes'

function App({ url = '/' }) {
  const route = getRoute(url)

  if (route.kind === 'article') {
    return <BlogPage article={route.article} />
  }

  if (route.kind === 'notFound') {
    return <NotFoundPage />
  }

  return <DatabaseEngineerLandingPage />
}

export default App
