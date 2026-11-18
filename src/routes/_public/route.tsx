import {
    createFileRoute,
    Outlet,
} from '@tanstack/react-router'
import { NavLink } from '@/components/nav-link'
export const Route = createFileRoute('/_public')({
    component: PublicLayout,
})

// Pathless Routes
function PublicLayout() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Header */}
            <header className="border-b p-4">
                <nav className="flex gap-6">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/products">Products</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/todos">Todos</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </nav>
            </header>

            {/* Page content */}
            <main className="flex-1 p-6">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="border-t p-4 text-center">
                My Webshop © 2026
            </footer>
        </div>
    )
}