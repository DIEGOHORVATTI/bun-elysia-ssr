import { Card } from '../ui/Card'

interface BlogPostProps {
  title: string
  content: string
  author: string
  date: string
}

export function BlogPost({ title, content, author, date }: BlogPostProps) {
  return (
    <Card>
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="prose max-w-none mb-4">{content}</div>
      <div className="text-sm text-gray-500">
        By {author} • {new Date(date).toLocaleDateString()}
      </div>
    </Card>
  )
}
