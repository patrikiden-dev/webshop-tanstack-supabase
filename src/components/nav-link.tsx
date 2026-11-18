import { Link, type LinkProps } from '@tanstack/react-router'

// Reusable Link Component
// =========================================================================
// exact: true,
// This makes the Home link active only on the exact / route.
// Without exact: true, a parent route can also be considered active when you're visiting one of its child routes.
//
// Add different styles on active link and inactive links
export function NavLink(props: LinkProps) {
    return (
        <Link
            {...props}
            activeProps={{
                className: 'bg-blue-100 text-blue-700 font-bold rounded-md px-3 py-2',
            }}
            inactiveProps={{
                className: 'text-gray-600 hover:text-blue-600 px-3 py-2',
            }}
        />
    )
}