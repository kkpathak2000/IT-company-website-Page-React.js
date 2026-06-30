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

  const getCounterClass = (length, limit) => {
    return `text-end small ${length > limit * 0.9 ? 'text-warning' : 'text-info'}`;
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
            <p className="d-flex align-items-center mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 text-info" aria-hidden="true" focusable="false"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <strong className="me-1">Email:</strong>
              <a href="mailto:itsolutions@gmail.com" className="contact-link text-info text-decoration-none" aria-label="Email us at itsolutions@gmail.com">itsolutions@gmail.com</a>
            </p>
            <p className="d-flex align-items-center mb-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 text-info" aria-hidden="true" focusable="false"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <strong className="me-1">Address:</strong>
              <a href="https://www.google.com/maps/search/?api=1&query=ABC+Street,+Lucknow" target="_blank" rel="noopener noreferrer" className="contact-link text-info text-decoration-none" aria-label="Find us on Google Maps at ABC Street, Lucknow">ABC Street, Lucknow</a>
            </p>
            <p className="d-flex align-items-center mb-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2 text-info" aria-hidden="true" focusable="false"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <strong className="me-1">Phone:</strong>
              <a href="tel:+919876543210" className="contact-link text-info text-decoration-none" aria-label="Call us at +91-9876543210">+91-9876543210</a>
            </p>
          </div>

          <div className="separator" aria-hidden="true"></div>

          <Form id="form" className="contact-form" onSubmit={handleSend} aria-busy={isLoading} tabIndex="-1">
            <FormGroup>
              <Label for="name">Name <span className="text-danger" aria-hidden="true">*</span></Label>
              <Input type="text" name="name" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required aria-required="true" maxLength={100} autoComplete="name" aria-describedby="name-counter" />
              <div id="name-counter" className={getCounterClass(formData.name.length, 100)} aria-live="polite">
                {formData.name.length}/100
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="email">Email <span className="text-danger" aria-hidden="true">*</span></Label>
              <Input type="email" name="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required aria-required="true" maxLength={100} autoComplete="email" aria-describedby="email-counter" />
              <div id="email-counter" className={getCounterClass(formData.email.length, 100)} aria-live="polite">
                {formData.email.length}/100
              </div>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message <span className="text-danger" aria-hidden="true">*</span></Label>
              <Input
                type="textarea"
                name="message"
                id="message"
                value={formData.message.slice(0, 500)}
                onChange={handleChange}
                placeholder="Your Message"
                required
                aria-required="true"
                maxLength={500}
                aria-describedby="message-counter"
              />
              <div id="message-counter" className={getCounterClass(formData.message.length, 500)} aria-live="polite">
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
