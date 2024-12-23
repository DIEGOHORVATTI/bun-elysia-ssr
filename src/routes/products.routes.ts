import Elysia from 'elysia'

import { mockProducts } from '@/__mock__/products'

export interface Product {
  id: number
  name: string
  price: number
  description: string
}

const router = new Elysia({ prefix: '/products', tags: ['Produtos'] }).get('/', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return mockProducts
})

export default router
