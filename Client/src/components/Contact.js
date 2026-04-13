import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Spinner } from 'reactstrap';
import axios from 'axios';
import contactImage from '../assets/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 

  const handleSend = async (event) => {
    event.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setIsSuccess(false);
      setResponseMessage('Please fill in all required fields.');
      return;
    }
    setIsLoading(true);
    setResponseMessage('');
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(response.data);
      setIsSuccess(true);
      setResponseMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      setIsSuccess(false);
      setResponseMessage('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-section" tabIndex="-1">
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
            <p><strong>Address:</strong> ABC Street, Lucknow</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>

          <div className="separator"></div>

          <Form id="form" className="contact-form" onSubmit={handleSend} aria-busy={isLoading} tabIndex="-1">
            <FormGroup>
              <Label for="name">Name <span className="text-danger" aria-hidden="true">*</span></Label>
              <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required aria-required="true" maxLength={100} autoComplete="name" aria-describedby="name-counter" />
              <div id="name-counter" className="text-end small text-info" aria-live="polite">
                {formData.name.length}/100
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email <span className="text-danger" aria-hidden="true">*</span></Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required aria-required="true" maxLength={100} autoComplete="email" aria-describedby="email-counter" />
              <div id="email-counter" className="text-end small text-info" aria-live="polite">
                {formData.email.length}/100
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message <span className="text-danger" aria-hidden="true">*</span></Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                aria-required="true"
                maxLength={500}
                aria-describedby="message-counter"
              />
              <div id="message-counter" className="text-end small text-info" aria-live="polite">
                {formData.message.length}/500
              </div>
            </FormGroup>
            <Button color='light' size="sm" type="submit" disabled={isLoading} aria-busy={isLoading}>
              {isLoading ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </Button>
            {responseMessage && (
              <div role="alert" aria-live="polite" className={`response-message d-flex align-items-center justify-content-center ${isSuccess ? 'success' : 'error'}`}>
                {isSuccess ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" aria-hidden="true">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2" aria-hidden="true">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                )}
                {responseMessage}
              </div>
            )}
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
