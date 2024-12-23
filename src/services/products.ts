import { mockProducts } from '@/__mock__/products'

export interface Product {
  id: number
  name: string
  price: number
  description: string
}

export async function fetchProducts(): Promise<Product[]> {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return mockProducts
}
