import { Elysia } from 'elysia'

import { createElement } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToReadableStream } from 'react-dom/server'

import CSRPage from '@/react/pages/CSR'
import SSRPage from '@/react/pages/SSR'
import SSGPage from '@/react/pages/SSG'
import SPAPage from '@/react/pages/SPA'

import { mockDocs } from '@/__mock__/docs'
import { mockPosts } from '@/__mock__/posts'

// A cada deploy, o conteúdo estático é gerado novamente
const staticContent = await renderToReadableStream(createElement(SSGPage, { docs: mockDocs }))
const staticHTML = await new Response(staticContent).text()

const router = new Elysia({ prefix: '/examples', tags: ['examples'] })
  .get('/spa', async ({ request: { url } }) => {
    const page = createElement(SPAPage)

    await Bun.build({
      target: 'browser',
      format: 'iife',
      minify: true,
      outdir: './public',
      entrypoints: ['./src/react/pages/index.tsx']
    })

    const stream = await renderToReadableStream(page, {
      bootstrapScripts: ['/public/index.js']
    })

    return new Response(stream, { headers: { 'Content-Type': 'text/html' } })
  })

  .get('/csr', async ({ request: { url } }) => {
    const app = createElement(StaticRouter, { location: url }, createElement(CSRPage))

    const csrStream = await renderToReadableStream(app)

    return new Response(csrStream, { headers: { 'Content-Type': 'text/html' } })
  })

  .get('/ssr', async ({ request: { url } }) => {
    const app = createElement(StaticRouter, { location: url }, createElement(SSRPage, { posts: mockPosts }))

    const ssrStream = await renderToReadableStream(app)

    return new Response(ssrStream, { headers: { 'Content-Type': 'text/html' } })
  })

  .get('/ssg', async () => {
    return new Response(staticHTML, { headers: { 'Content-Type': 'text/html' } })
  })

export default router
