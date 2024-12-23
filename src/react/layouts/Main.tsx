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
        </head>

        <body>{children}</body>
      </html>
    </StrictMode>
  )
}
