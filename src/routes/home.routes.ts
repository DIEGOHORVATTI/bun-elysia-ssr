import { Elysia } from 'elysia'

import { createElement } from 'react'
import { renderToReadableStream } from 'react-dom/server'

import App from '../react/App'

const router = new Elysia({ prefix: '/', tags: ['Home'] }).get('/', async () => {
  // create our react App component
  const app = createElement(App)

  // render the app component to a readable stream
  const stream = await renderToReadableStream(app, {
    bootstrapScripts: ['/public/index.js']
  })

  // output the stream as the response
  return new Response(stream, {
    headers: { 'Content-Type': 'text/html' }
  })
})

export default router
