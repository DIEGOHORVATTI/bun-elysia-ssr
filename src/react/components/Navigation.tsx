import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Bun + Elysia + React
          </Link>

          <div className="flex space-x-4">
            <Link to="/examples/csr" className="hover:text-blue-600">
              CSR
            </Link>
            <Link to="/examples/ssr" className="hover:text-blue-600">
              SSR
            </Link>
            <Link to="/examples/ssg" className="hover:text-blue-600">
              SSG
            </Link>
            <Link to="/examples/spa" className="hover:text-blue-600">
              SPA
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
