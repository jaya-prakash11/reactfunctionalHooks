import React, { useEffect } from 'react'

export default function Child({ name }) {
    
    useEffect(() => {
        console.log('COMPONENT IS CALLED')
    },[name])
  return (
      <div>{name('dsadj')}</div>
  )
}
