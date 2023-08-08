import { React, useContext } from "react"
import { AppContex } from "./App"
export default function User() {

    const {userName} = useContext(AppContex)
  return (
      <div>{userName}</div>
  )
}
