import Elysia from 'elysia'

import { fetchProducts } from '@/services/products'

const router = new Elysia({ prefix: '/products', tags: ['Produtos'] }).get('/', async () => {
  const products = fetchProducts()

  return products
})

export default router
