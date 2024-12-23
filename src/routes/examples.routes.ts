import { Elysia } from 'elysia'
import { createElement } from 'react'

import { renderToReadableStream } from 'react-dom/server'

import CSRPage from '@/react/pages/examples/CSR'
import SSRPage from '@/react/pages/examples/SSR'
import SSGPage from '@/react/pages/examples/SSG'
import SPAPage from '@/react/pages/examples/SPA'

import { mockDocs } from '@/__mock__/docs'
import { mockPosts } from '@/__mock__/posts'

const buildConfigs = {
  csr: {
    entrypoint: './src/react/entries/csr.tsx',
    name: 'csr.js'
  },
  spa: {
    entrypoint: './src/react/entries/spa.tsx',
    name: 'spa.js'
  }
}

const buildClient = async (config: (typeof buildConfigs)[keyof typeof buildConfigs]) => {
  await Bun.build({
    entrypoints: [config.entrypoint],
    outdir: './public',
    naming: config.name,
    target: 'browser',
    minify: true
  })
}

await Promise.all([buildClient(buildConfigs.csr), buildClient(buildConfigs.spa)])

// Cache do conteúdo SSG
const staticContent = await renderToReadableStream(createElement(SSGPage, { docs: mockDocs }))
const staticHTML = await new Response(staticContent).text()

const router = new Elysia({ prefix: '/examples', tags: ['Examples'] })
  .get('/csr', async () => {
    const stream = await renderToReadableStream(createElement(CSRPage), { bootstrapScripts: ['/public/csr.js'] })

    return new Response(stream, { headers: { 'Content-Type': 'text/html' } })
  })

  .get('/ssr', async () => {
    const stream = await renderToReadableStream(createElement(SSRPage, { posts: mockPosts }))

    return new Response(stream, { headers: { 'Content-Type': 'text/html' } })
  })

  .get('/ssg', () => {
    return new Response(staticHTML, { headers: { 'Content-Type': 'text/html' } })
  })

  .get('/spa', async () => {
    const stream = await renderToReadableStream(createElement(SPAPage), { bootstrapScripts: ['/public/spa.js'] })

    return new Response(stream, { headers: { 'Content-Type': 'text/html' } })
  })

export default router
