import { Suspense, lazy } from 'react'
import './App.css'

// Works also with SSR as expected
const Card = lazy(() => import('./Card'))

function App() {
  return (
    <>
      <h1>Vite + React</h1>

      <p className='text-xl'>this is sub title</p>

      <Suspense fallback={<p>Loading card component...</p>}>
        <Card />
      </Suspense>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
