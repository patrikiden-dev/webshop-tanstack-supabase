import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/dashboard/products')({
    component: DashboardProducts,
})

function DashboardProducts() {
    return <h1 className="text-2xl font-bold">Manage Products</h1>
}