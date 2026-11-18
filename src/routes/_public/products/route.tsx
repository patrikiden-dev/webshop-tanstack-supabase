import {
    createFileRoute,
    Outlet,
} from '@tanstack/react-router'

export const Route = createFileRoute('/_public/products')({
    component: ProductsLayout,
})

function ProductsLayout() {
    return (
        <div>
            <h1 className="mb-6 text-2xl font-bold">
                Our Store
            </h1>

            <Outlet />
        </div>
    )
}