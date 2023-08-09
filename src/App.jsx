import { useEffect, useState, useRef, createContext, useMemo, useCallback} from 'react'
import './App.css'
import Child from './child';

function App() {
  const [data, setData] = useState('hi this is jikihjijii');
  const [toggle, setToggle] = useState(false)
  const nameFunction = useCallback((res) => {
    return data + res;
  },[data])
  
  return (
    <div style={{display:'flex', flexDirection:'column', gap:'32px'}}>
      <Child name={nameFunction}></Child>
      <button onClick={() => setToggle(prev => !prev)}>Toggle</button>
      {toggle ? 'Toggle':null}
   </div>
  )
}

export default App
