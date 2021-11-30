import React from 'react';
import { Form } from 'react-bootstrap';

import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="container w-50">
                <h2>Contact with Me</h2>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control type="name" placeholder="Enter Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                </Form>
            </div>

        </div>
    );
};

export default Contact;