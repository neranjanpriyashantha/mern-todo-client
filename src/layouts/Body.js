import React from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from './TodoList'

export default function Body() {
  return (
    <div>
      <div style={{display:'flex',justifyContent:'center'}}>
      <AddTodo />
      </div>
        
        <TodoList />
    </div>
  )
}
