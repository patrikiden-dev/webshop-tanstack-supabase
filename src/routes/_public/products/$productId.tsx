import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
    '/_public/products/$productId',
)({
    component: ProductDetailPage,
})

function ProductDetailPage() {
    const { productId } = Route.useParams()

    return (
        <div>
            <h2 className="text-2xl font-bold">
                Product Details
            </h2>

            <p className="mt-4">
                Product ID: {productId}
            </p>
        </div>
    )
}