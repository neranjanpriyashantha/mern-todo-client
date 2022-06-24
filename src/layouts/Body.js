import React, { useState, useEffect } from 'react'
import AddTodo from '../components/AddTodo'
import TodoList from './TodoList'
import axios from 'axios';

export default function Body() {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/read").then((response) => {
      setTodoData(response.data);
      console.log(todoData);
    }).catch(() => {
      console.log('data fetch error');
    });
  }, []);


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <AddTodo />
      </div>
      <TodoList todoData={todoData} />
    </div>
  )
}
