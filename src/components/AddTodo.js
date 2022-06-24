import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


export default function AddTodo() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  


  const addTodo = () => {
    axios.post('http://localhost:5000/insert', { title: title, description: description })
      .then(() => {
        alert('data inserted!')
      }).catch(() => {
        alert('insert error')
      })
  }
  return (

    <div>
      <div style={{ width: '500px' }}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" onChange={(event) => {
              setTitle(event.target.value);

            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={(event) => {
              setDescription(event.target.value);
              console.log(description);

            }} />
            <Button onClick={addTodo} style={{ marginTop: '5px', width: '100%' }} variant="success">ADD</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}
