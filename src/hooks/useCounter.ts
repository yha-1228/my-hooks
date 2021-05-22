import { useState } from 'react'

function useCounter(initialCount: number) {
  const [count, setCount] = useState(initialCount)

  return {
    count,
    increment: () => setCount((count) => count + 1),
    decrement: () => setCount((count) => count - 1),
    reset: () => setCount(initialCount),
  }
}

export default useCounter
