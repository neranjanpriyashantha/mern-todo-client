import React from 'react'
import { Button, Card, } from 'react-bootstrap';
import axios from 'axios';

export default function Singel({ val ,setTodoData,todoData}) {

  const updateTodo = (_id) => {
    const newTitle = prompt("enter new title:");
      axios.put('http://localhost:5000/update', { newTitle: newTitle, _id: _id })
      console.log(todoData);
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card border='success' bg='light' style={{ width: '50%', marginTop: '10px' }}>
        <Card.Body>
          <Card.Title>{val.title}</Card.Title>
          <Card.Text >
            {val.description}
          </Card.Text>
          <Button
            onClick={() => { updateTodo(val._id) }}
            style={{ marginRight: '5px' }}
            variant="primary">
            Update
          </Button>
          <Button variant="danger">Delete</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
