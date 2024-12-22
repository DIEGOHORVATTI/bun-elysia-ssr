import { Elysia } from 'elysia'

import { createElement } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToReadableStream } from 'react-dom/server'

import Home from '@/react/Home'

const router = new Elysia({ tags: ['Home'] }).get('/', async ({ request: { url } }) => {
  const app = createElement(StaticRouter, { location: url }, createElement(Home))

  const stream = await renderToReadableStream(app, { bootstrapScripts: ['/public/index.js'] })

  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
})

export default router
