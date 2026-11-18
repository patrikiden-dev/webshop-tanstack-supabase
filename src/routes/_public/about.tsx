import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/about')({
  component: AboutPage,
})

function AboutPage() {
  return <h1 className="text-3xl font-bold">About Us</h1>
}