import { useState } from 'react'

export function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}