import Main from '@/react/layouts/Main'
import { Card } from '@/react/components/ui/Card'

interface SSGPageProps {
  docs: Array<{
    id: string
    title: string
    content: string
    lastUpdated: string
  }>
}

export default function SSGPage({ docs }: SSGPageProps) {
  return (
    <Main>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Static Site Generation (SSG)</h1>

        <div className="grid gap-8">
          {docs.map(doc => (
            <Card key={doc.id} title={doc.title}>
              <div className="prose max-w-none mb-4">{doc.content}</div>
              <p className="text-sm text-gray-500">Last updated: {new Date(doc.lastUpdated).toLocaleDateString()}</p>
            </Card>
          ))}
        </div>
      </div>
    </Main>
  )
}
