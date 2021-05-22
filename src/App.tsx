import './styles/normalize.css'
import './styles/App.css'
import { useCounter } from './hooks'

function DemoUseCounter() {
  const { count, increment, decrement, reset } = useCounter(0)

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => increment()}>increment</button>
      <button onClick={() => decrement()}>decrement</button>
      <button onClick={() => reset()}>reset</button>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>My Hooks</h1>

      <section>
        <h2>useCounter</h2>
        <DemoUseCounter />
      </section>
    </div>
  )
}

export default App
