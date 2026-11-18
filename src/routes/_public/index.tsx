import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_public/')({
    component: HomePage,
})

function HomePage() {
    return <h1 className="text-3xl font-bold">Welcome to our webshop</h1>
}