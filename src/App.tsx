import './styles/global.css'
import { useCounter, useScroll, useToggle } from './hooks'

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

function DemoUseScroll() {
  const { ref, scroll } = useScroll<HTMLUListElement>()

  return (
    <div>
      <ul
        ref={ref}
        style={{ height: 180, padding: 8, border: '2px solid black', overflow: 'auto' }}
      >
        {Array.from(new Array(10)).map((_, i) => (
          <li key={i}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eaque assumenda.
          </li>
        ))}
      </ul>
      <button onClick={() => scroll({ top: 0, left: 0, behavior: 'smooth' })}>Scroll to top</button>
    </div>
  )
}

function DemoUseToggle() {
  const [isOn, toggle] = useToggle(false)

  return <button onClick={toggle}>{JSON.stringify(isOn)}</button>
}

function App() {
  return (
    <div>
      <h1>My Hooks</h1>

      <section>
        <h2>useCounter</h2>
        <DemoUseCounter />
      </section>

      <section>
        <h2>useScroll</h2>
        <DemoUseScroll />
      </section>

      <section>
        <h2>useToggle</h2>
        <DemoUseToggle />
      </section>
    </div>
  )
}

export default App
