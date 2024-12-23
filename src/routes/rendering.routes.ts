import { Elysia } from 'elysia'

import { createElement } from 'react'
import { StaticRouter } from 'react-router-dom'
import { renderToReadableStream } from 'react-dom/server'

import CSRPage from '@/react/pages/CSR'
import SSRPage from '@/react/pages/SSR'
import SSGPage from '@/react/pages/SSG'
import SPAPage from '@/react/pages/SPA'

const router = new Elysia({ prefix: '/examples' })
  .get('/spa', async ({ request: { url } }) => {
    const app = createElement(StaticRouter, { location: url }, createElement(SPAPage))

    const spaStream = await renderToReadableStream(app)

    return new Response(spaStream, { headers: { 'Content-Type': 'text/html' } })
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

// Mock data
const mockPosts = [
  {
    id: 1,
    title: 'Understanding SSR in Modern Web Development',
    content: 'Server-side rendering (SSR) is a technique where...',
    author: 'Jane Doe',
    date: '2024-01-15'
  },
  {
    id: 2,
    title: 'The Benefits of Static Site Generation',
    content: 'Static site generation offers several advantages...',
    author: 'John Smith',
    date: '2024-01-16'
  }
]

const mockDocs = [
  {
    id: 'getting-started',
    title: 'Getting Started Guide',
    content: "Welcome to our documentation. Here's how to get started...",
    lastUpdated: '2024-01-01'
  },
  {
    id: 'advanced-features',
    title: 'Advanced Features',
    content: 'Explore our advanced features and capabilities...',
    lastUpdated: '2024-01-10'
  }
]

// A cada deploy, o conteúdo estático é gerado novamente
const staticContent = await renderToReadableStream(createElement(SSGPage, { docs: mockDocs }))
const staticHTML = await new Response(staticContent).text()
