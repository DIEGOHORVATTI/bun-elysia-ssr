import Elysia from 'elysia'

import { createElement } from 'react'
import { renderToReadableStream } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import Home from '@/react/pages/Home'

const router = new Elysia().get('/', async ({ request: { url } }) => {
  const app = createElement(StaticRouter, { location: url }, createElement(Home))

  const spaStream = await renderToReadableStream(app)

  return new Response(spaStream, { headers: { 'Content-Type': 'text/html' } })
})

export default router
