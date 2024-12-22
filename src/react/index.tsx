/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

// import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

hydrateRoot(
  document,
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
