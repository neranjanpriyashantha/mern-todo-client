import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';


export default function AddTodo({todoData,setTodoData}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const addTodo = () => {
    if (title !== '' && description !== '') {
      axios.post('http://localhost:5000/insert', { title: title, description: description })
        .then((response) => {
          setTodoData([...todoData ,{_id:response.data._id ,title: title, description: description }])
          alert('inserted!')
        }).catch(() => {
          alert('insert error')
        })
    }
  }
  return (

    <div>
      <div >
        <Form style={{marginLeft:'25%',marginRight:'25%'}}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label><h3>Title</h3> </Form.Label>
            <Form.Control type="text" onChange={(event) => {
              setTitle(event.target.value);

            }} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label><h3>Description</h3></Form.Label>
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
