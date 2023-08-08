import { useReducer , useEffect, useState} from 'react'
import axios from 'axios';
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
  // const [state, dispatch] = useReducer(reducer,{count:0 , showText:false})
  const [data, setData] = useState('');
  const [count , setCount] = useState(0)

  useEffect(() => {
    console.log('useEffect')
    axios.get('https://api.publicapis.org/entries').then((response) => {
      // console.log(response.data.entries[0].Description)
      console.log('api was called')
      setData(response.data.entries[0].Description)
    })
},[count])

  // const triggerCounter = () => setCount(prevState => prevState + 1)
  return (
    <>
      <div>{count}</div>
      <div>Hello world {data}</div>
      <button onClick={()=>setCount(count + 1)}> counter</button>
    </>
  )
}

export default App
