import Main from '@/react/layouts/Main'
import Navigation from '@/react/components/Navigation'

export default function Home() {
  return (
    <Main>
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">SPA Home</h1>

        <main>
          <Navigation />
        </main>
      </div>
    </Main>
  )
}
