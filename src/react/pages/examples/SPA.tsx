import { useEffect, useState } from 'react'

import Main from '@/react/layouts/Main'

export default function SPAPage() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    alert('Mounted')
  }, [])

  return (
    <Main>
      <h1>Counter {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
    </Main>
  )
}
