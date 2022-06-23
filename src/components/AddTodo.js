import React from 'react'
import { Form ,Button} from 'react-bootstrap';
export default function AddTodo() {
  return (
    <div>
      <div style={{width:'500px'}}>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control type="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} />
            <Button style={{marginTop:'5px',width:'100%'}} variant="success">ADD</Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}
