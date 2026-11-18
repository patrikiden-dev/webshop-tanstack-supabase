import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/dashboard/settings')({
    component: DashboardSettings,
})

function DashboardSettings() {
    return <h1 className="text-2xl font-bold">Dashboard Settings</h1>
}