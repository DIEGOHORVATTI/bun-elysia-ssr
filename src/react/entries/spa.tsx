import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import SPAPage from '../pages/examples/SPA'

hydrateRoot(
  document,
  <BrowserRouter>
    <SPAPage />
  </BrowserRouter>
)
