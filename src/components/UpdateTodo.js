import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

export default function UpdateTodo({ val, setTodoData, todoData }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const updateTodo = (_id) => {
        const newTitle = title;
        const newDescription = description;
        if (newTitle !== '' && newDescription !== '') {
            axios.put('http://localhost:5000/update', { newTitle: newTitle, newDescription: newDescription, _id: _id })
            // .then(()=>{
            //     setTodoData(todoData.map((val)=>{
            //         return val._id===_id ? {_id: _id,newTitle: val.title, newDescription: val.description}:val
            //     }))
            // })
            handleClose();
        }
    }
    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                Update
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="email"
                                autoFocus

                                onChange={(e) => {
                                    setTitle(e.target.value)
                                }}
                            />
                        </Form.Group>
                        <Form.Group
                            onChange={(e) => {
                                setDescription(e.target.value)
                            }}
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button
                        onClick={() => { updateTodo(val._id) }}
                        variant="primary">
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
