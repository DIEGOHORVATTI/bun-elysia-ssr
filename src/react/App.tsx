// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<h1>Auth</h1>} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}
