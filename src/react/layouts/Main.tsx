import { StrictMode } from 'react'

type Props = {
  children: React.ReactNode
  title?: string
}

export default function Main({ children, title = 'Layout' }: Props) {
  return (
    <StrictMode>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>{title} | Bun, Elysia & React</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        </head>

        <body>
          <div className="min-h-screen bg-gray-50">
            <main className="container mx-auto px-4 py-8">{children}</main>
          </div>
        </body>
      </html>
    </StrictMode>
  )
}
