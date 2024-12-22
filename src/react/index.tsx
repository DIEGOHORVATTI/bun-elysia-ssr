/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { hydrateRoot } from 'react-dom/client'

export const App = hydrateRoot(
  document,
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/auth" element={<h1>Auth</h1>} />

      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </BrowserRouter>
)
