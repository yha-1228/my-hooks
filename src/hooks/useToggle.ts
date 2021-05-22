import { useState } from 'react'

function useToggle(initialState: boolean) {
  const [state, setState] = useState(initialState)

  return [
    state,
    () => {
      setState((state) => !state)
    },
  ] as [boolean, () => void]
}

export default useToggle
