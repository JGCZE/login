import AboutPage from '@/pages/About/About'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutRoute,
})

function AboutRoute() {
  return <AboutPage />
}
