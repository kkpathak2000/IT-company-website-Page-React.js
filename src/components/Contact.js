import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-info">
        <p><strong>Email:</strong> contact@itcompany.com</p>
        <p><strong>Address:</strong> 123 Tech Street, Silicon Valley</p>
        <p><strong>Phone:</strong> +1 123-456-7890</p>
      </div>
      <Form className="contact-form">
        <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" id="name" placeholder="Your Name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email" placeholder="Your Email" />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea" id="message" placeholder="Your Message" />
        </FormGroup>
        <Button color="primary">Send Message</Button>
      </Form>
    </section>
  );
};

export default Contact;