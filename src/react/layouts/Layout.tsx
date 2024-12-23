import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'

export default function Layout() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>Bun, Elysia & React</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>

      <body>
        <div className="min-h-screen bg-gray-50">
          <Navigation />

          <main className="container mx-auto px-4 py-8">
            <Outlet />
          </main>
        </div>

        <script src="/public/client.js" />
      </body>
    </html>
  )
}
