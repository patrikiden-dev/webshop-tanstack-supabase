import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/dashboard/')({
    component: DashboardOverview,
})

function DashboardOverview() {
    return <h1 className="text-2xl font-bold">Dashboard Overview</h1>
}