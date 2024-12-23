import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import SPAPage from '../pages/SPA'

hydrateRoot(
  document,
  <BrowserRouter>
    <SPAPage />
  </BrowserRouter>
)
