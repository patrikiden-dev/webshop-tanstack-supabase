import {
    createFileRoute,
    Outlet,
    Link,
} from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard')({
    component: DashboardLayout,
})

function DashboardLayout() {
    return (
        <div className="flex min-h-screen">
            {/* Sidebar */}
            <aside className="w-64 border-r p-6">
                <h2 className="mb-8 text-xl font-bold">
                    Admin Dashboard
                </h2>

                <nav className="flex flex-col gap-4">
                    <Link to="/dashboard">Overview</Link>
                    <Link to="/dashboard/products">Products</Link>
                    <Link to="/dashboard/settings">Settings</Link>
                </nav>
            </aside>

            {/* Dashboard content */}
            <div className="flex-1">
                <header className="border-b p-4">
                    Dashboard Administration
                </header>

                <main className="p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}