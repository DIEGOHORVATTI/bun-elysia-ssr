import { useEffect, useState } from 'react'

import { ProductList } from '@/react/components/features/ProductList'
import { Button } from '@/react/components/ui/Button'

import BaseLayout from '@/react/layouts/BaseLayout'

export default function CSRPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    setLoading(true)
    try {
      const data = await fetch('/products').then(res => res.json())

      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <BaseLayout title="Client-Side Rendering (CSR)">
      <div className="mb-8">
        <Button onClick={loadProducts}>Refresh Products</Button>
      </div>

      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
    </BaseLayout>
  )
}
