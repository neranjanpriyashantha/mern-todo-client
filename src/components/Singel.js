import React from 'react'
import { Button, Card, } from 'react-bootstrap';

export default function Singel() {
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Card style={{maxWidth:'500px',marginTop:'10px'}}>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional content.
          </Card.Text>
          <Button style={{marginRight:'5px'}} variant="primary">update</Button>
          <Button variant="primary">delate</Button>
        </Card.Body>
      </Card>
    </div>
  )
}
