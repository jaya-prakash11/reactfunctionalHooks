import { React, useContext } from "react"
import { AppContex } from "./App"

export default function Login() {

    const {setUserName} = useContext(AppContex)
  return (
      <div>
          <input onChange={(e) => setUserName(e.target.value)} type="text" placeholder='type something ...' ></input>
      </div>
  )
}
