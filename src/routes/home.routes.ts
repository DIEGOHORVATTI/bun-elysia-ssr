import { Elysia } from 'elysia'

import { createElement } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToReadableStream } from 'react-dom/server'

import Home from '../react/Home'

const router = new Elysia({ tags: ['Home'] }).get('/', async ({ request }) => {
  const app = createElement(StaticRouter, { location: request.url }, createElement(Home))

  const stream = await renderToReadableStream(app)

  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
})

export default router
