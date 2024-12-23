import { StrictMode } from 'react'

export default function Main({ children }: React.PropsWithChildren) {
  return (
    <StrictMode>
      <html>
        <head>
          <meta charSet="utf-8" />
          <title>Bun, Elysia & React</title>

          <meta name="description" content="Bun, Elysia & React" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />

          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
        </head>

        <body>
          <div className="min-h-screen bg-gray-300">{children}</div>
        </body>
      </html>
    </StrictMode>
  )
}
