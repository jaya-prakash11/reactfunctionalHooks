import { useEffect, useState, useRef, createContext} from 'react'
import './App.css'
import User from './user';
import Login from './login';

export const AppContex =createContext(null)
function App() {
  const [userName , setUserName] = useState('')
  
  return (
    <AppContex.Provider value={{ userName, setUserName }}>
      <User></User>
      <Login></Login>
    </AppContex.Provider>
  )
}

export default App
