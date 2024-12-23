import { Card } from '../ui/Card'

interface Product {
  id: number
  name: string
  price: number
  description: string
}

interface ProductListProps {
  products: Product[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <Card key={product.id} title={product.name}>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
        </Card>
      ))}
    </div>
  )
}
