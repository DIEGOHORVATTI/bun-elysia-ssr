import Main from '@/react/layouts/Main'

export default function Home() {
  return (
    <Main>
      <h1>Welcome to Elysia</h1>

      <ul>
        {['ssg', 'ssr', 'csr', 'spa'].map(page => (
          <li key={page}>
            <h2>
              <a href={`/examples/${page}`}>{page}</a>
            </h2>
          </li>
        ))}
      </ul>
    </Main>
  )
}
