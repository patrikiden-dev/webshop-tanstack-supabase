import {
    createFileRoute,
    Link,
} from '@tanstack/react-router'

type ProductSearch = {
    category?: string
    sort: 'name' | 'price'
    page: number
}

function validateProductSearch(
    search: Record<string, unknown>,
): ProductSearch {
    const page = Number(search.page)

    return {
        category:
            typeof search.category === 'string'
                ? search.category
                : undefined,

        sort: search.sort === 'price' ? 'price' : 'name',

        page: Number.isInteger(page) && page > 0 ? page : 1,
    }
}


export const Route = createFileRoute('/_public/products/')({
    validateSearch: validateProductSearch,
    component: ProductsPage,
})

const products = [
    {
        id: '101',
        name: 'Laptop',
        price: 999,
    },
    {
        id: '102',
        name: 'Smartphone',
        price: 699,
    },
    {
        id: '103',
        name: 'Headphones',
        price: 149,
    },
]

function ProductsPage() {

    const { category, sort, page } = Route.useSearch()

    return (
        <div>
            <h2 className="mb-4 text-xl font-semibold">
                Products
            </h2>

            <p>Category: {category ?? 'All categories'}</p>
            <p>Sort: {sort}</p>
            <p>Page: {page}</p>

            <div className="space-y-3">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="flex items-center justify-between rounded-lg border p-4"
                    >
                        <div>
                            <h3 className="font-medium">
                                {product.name}
                            </h3>

                            <p>${product.price}</p>
                        </div>

                        <Link
                            to="/products/$productId"
                            params={{ productId: product.id }}
                            className="text-blue-600 hover:underline"
                        >
                            View product
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}