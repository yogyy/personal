import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '#/components/section/hero.tsx'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
      <HeroSection />
    </>
  )
}
