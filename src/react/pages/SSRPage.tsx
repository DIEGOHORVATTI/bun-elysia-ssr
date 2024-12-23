import Main from '@/react/layouts/Main'
import { BlogPost } from '@/react/components/features/BlogPost'

interface SSRPageProps {
  posts: Array<{
    id: number
    title: string
    content: string
    author: string
    date: string
  }>
}

export default function SSRPage({ posts }: SSRPageProps) {
  return (
    <Main>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Server-Side Rendering (SSR)</h1>

        <div className="space-y-8">
          {posts.map(post => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </Main>
  )
}
