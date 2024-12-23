import Main from '@/react/layouts/Main'

export default function Home() {
  return (
    <Main>
      <h1>Welcome to Elysia</h1>

      <ul>
        {['ssg', 'ssr', 'csr', 'spa'].map(page => (
          <li key={page}>
            <a href={`/examples/${page}`}>{page}</a>
          </li>
        ))}
      </ul>
    </Main>
  )
}
