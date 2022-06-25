import React from 'react'
import Singel from '../components/Singel'

export default function TodoList({ todoData,setTodoData }) {
  return (
    <div >
      {todoData.reverse().map((val, key) => {
       
        return <Singel key={key} val={val} setTodoData={setTodoData}  todoData={todoData}/>
      })}
    </div>
  )
}
