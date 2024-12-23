import { Link } from 'react-router-dom'

export default function Navigation() {
  const links = [
    { to: '/examples/csr', label: 'CSR' },
    { to: '/examples/ssr', label: 'SSR' },
    { to: '/examples/ssg', label: 'SSG' },
    { to: '/examples/spa', label: 'SPA' }
  ]

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold">
            Bun + Elysia + React
          </Link>

          <div className="flex space-x-4">
            {links.map(link => (
              <Link key={link.to} to={link.to} className="hover:text-blue-600">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
