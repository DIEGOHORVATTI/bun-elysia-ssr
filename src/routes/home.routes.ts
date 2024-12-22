import { Elysia } from 'elysia'

import { createElement } from 'react'
import { renderToReadableStream } from 'react-dom/server'

import App from '../react/App'

const router = new Elysia({ prefix: '/', tags: ['Home'] }).get('/', async () => {
  const app = createElement(App)

  const stream = await renderToReadableStream(app, {
    bootstrapScripts: ['/public/index.js']
  })

  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
})

export default router
