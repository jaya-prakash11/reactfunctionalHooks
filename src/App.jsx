import { useReducer } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reducer = (state, Action ) => {
  switch (Action.type) {
    case 'INCREMENT':
      return { count: state.count + 1, showText: state.showText };
    case 'SHOWTEXT':
      return {count : state.count , showText : !state.showtext}
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer,{count:0 , showText:false})
  // const triggerCounter = () => setCount(prevState => prevState + 1)
  return (
    <>
      {state.count}<div>
        <button onClick={()=>dispatch({type:'INCREMENT'})}>Click here</button>
      </div>
    </>
  )
}

export default App
