import React from 'react'
import Singel from '../components/Singel'

export default function TodoList({ todoData }) {
  return (
    <div >
      {todoData.map((val, key) => {
        console.log(val)
        return <Singel key={key} val={val} />
      })}
    </div>
  )
}
