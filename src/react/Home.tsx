import { useState } from 'react'

import Main from '@/react/layouts/Main'

export default function Home() {
  const [count, setCount] = useState(0)

  return (
    <Main>
      <h1>Counter {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Main>
  )
}
