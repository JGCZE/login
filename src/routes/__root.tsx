import Footer from '@/components/layout/Footer'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


const RootLayout = () => (
  <div className='min-h-screen flex flex-col'>
    <nav className='bg-blue-400 border-2 p-4 space-x-4'>
      <Link
        to="/"
        activeProps={{ className: 'font-bold underline' }}
        className="hover:underline"
      >
        Home
      </Link>

      <Link
        activeProps={{ className: 'font-bold underline' }}
        to="/about"
        className="hover:underline"
      >
        About
      </Link>

      <Link
        activeProps={{ className: 'font-bold underline' }}
        to="/login"
        className="hover:underline"
      >
        Login
      </Link>
    </nav>

    <main className="flex-1">
      <Outlet />
    </main>

    <Footer />

    <TanStackRouterDevtools />
  </div>
)

export const Route = createRootRoute({
  component: RootLayout,
})
