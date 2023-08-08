import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const triggerCounter = () => setCount(prevState => prevState + 1)
  return (
    <>
      {count}<div>
        <button onClick={triggerCounter}>Click here</button>
      </div>
    </>
  )
}

export default App
