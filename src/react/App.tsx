import { Routes, Route } from 'react-router-dom'

import Layout from './layouts/Layout'

import Home from '@/react/pages/Home'
import CSRPage from '@/react/pages/CSR'
import SSRPage from '@/react/pages/SSR'
import SSGPage from '@/react/pages/SSG'
import SPAPage from '@/react/pages/SPA'

import { mockPosts } from '@/__mock__/posts'
import { mockDocs } from '@/__mock__/docs'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="examples">
          <Route path="csr" element={<CSRPage />} />
          <Route path="ssr" element={<SSRPage posts={mockPosts} />} />
          <Route path="ssg" element={<SSGPage docs={mockDocs} />} />
          <Route path="spa" element={<SPAPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
