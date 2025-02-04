import React from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import contactImage from '../assets/contact.png';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <hr className="contact-hr" />

      <h2 className="contact-title">Reach out to us</h2>
      <p className="contact-subtext">
      Have questions or need assistance? Our team is here to help! Whether you're looking for a comprehensive software management solution with IT Solutions, a stunning software web presence, or expert services to support your business growth, we've got you covered. Reach out to us today to learn more about our offerings, request a demo, or get personalized guidance. Let’s work together to streamline your operations and enhance your digital presence!
      </p>

      <div className="contact-image-container">
        <img src={contactImage} alt="Contact Us" className="contact-image" />

        <div className="contact-overlay">
          <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:itsolutions@gmail.com">itsolutions@gmail.com</a></p>
            <p><strong>Address:</strong> ABC Street, India</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
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
            <Button light color='light' size="sm" >Send Message</Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
