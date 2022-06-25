import React from 'react'
import { Button, Card, } from 'react-bootstrap';
import axios from 'axios';
import UpdateTodo from './UpdateTodo';

export default function Singel({ val, setTodoData, todoData }) {

  const deleteTodo = (_id) => {
    axios.delete(`http://localhost:5000/delete/${_id}`).then(() => {
      setTodoData(todoData.filter((val) => {
        return val._id !==_id;
      }))
    })
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card border='success' bg='light' style={{ width: '50%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{val.title}</Card.Title>
          <Card.Text >
            {val.description}
          </Card.Text>
          <div style={{ display: 'flex' }}>
            <UpdateTodo val={val} setTodoData={setTodoData} todoData={todoData} />
            <Button
              style={{ marginLeft: '5px' }}
              onClick={() => {
                deleteTodo(val._id)
              }}
              variant="danger">
              Delete
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
