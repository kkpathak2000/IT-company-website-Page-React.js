import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import contactImage from '../assets/contact.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <hr className="contact-hr" />

      <h2 className="contact-title">Reach out to us</h2>
      <p className="contact-subtext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <div className="contact-image-container">
        <img src={contactImage} alt="Contact Us" className="contact-image" />

        <div className="contact-overlay">
          <div className="contact-info">
            <p><strong>Email:</strong> vidyaone@gmail.com</p>
            <p><strong>Address:</strong> ABC Street, Lucknow</p>
            <p><strong>Phone:</strong> +91-1234567890</p>
          </div>

          <div className="separator"></div>

          <Form id="form" className="contact-form">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" placeholder="Your Message" />
            </FormGroup>
            <Button dark color='dark'>Send Message</Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
