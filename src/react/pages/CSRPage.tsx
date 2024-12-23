import { useEffect, useState } from 'react'
import Main from '@/react/layouts/Main'
import { ProductList } from '@/react/components/features/ProductList'
import { Button } from '@/react/components/ui/Button'

export default function CSRPage() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const response = await fetch('https://api.example.com/products')
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Main>
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Client-Side Rendering (CSR)</h1>

        <div className="mb-8">
          <Button onClick={() => fetchProducts()}>Refresh Products</Button>
        </div>

        {loading ? <p>Loading products...</p> : <ProductList products={products} />}
      </div>
    </Main>
  )
}
