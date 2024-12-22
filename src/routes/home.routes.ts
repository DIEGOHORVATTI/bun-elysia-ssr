import { Elysia } from 'elysia'

import { createElement } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToReadableStream } from 'react-dom/server'

import App from '../react/App'

const router = new Elysia({ tags: ['Home'] }).get('/', async ({ request }) => {
  const app = createElement(StaticRouter, { location: request.url }, createElement(App))

  const stream = await renderToReadableStream(app, {
    bootstrapScripts: ['/public/index.js']
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
})

export default router
