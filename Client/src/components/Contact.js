import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import contactImage from '../assets/contact.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }; 


  //function 1
  //----------------------------------------------
  const handleSend = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/contact', formData);
      console.log(response.data);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again.');
    }
  };


  //function 2
  //----------------------------------------------
  //   const handleSend = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     setResponseMessage(data.message);
//     setFormData({ name: '', email: '', message: '' });  
//   };



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
            <p><strong>Email:</strong> <a href="mailto:vidyaone@gmail.com">vidyaone@gmail.com</a></p>
            <p><strong>Address:</strong> ABC Street, Lucknow</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>

          <div className="separator"></div>

          <Form id="form" className="contact-form">
            <FormGroup>
              <Label for="name">Name</Label>
              <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" />
            </FormGroup>
            <Button color='light' size="sm" onClick={handleSend}>Send Message</Button>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default Contact;















//---------------------------------------------------------------------------------------------------------
// import { useState } from 'react';

// function Contact() {
//   const [formData, setFormData] = useState({ name: '', email: '', message: '' });
//   const [responseMessage, setResponseMessage] = useState('');

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('http://localhost:5000/api/contact', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(formData),
//     });

//     const data = await response.json();
//     setResponseMessage(data.message);
//     setFormData({ name: '', email: '', message: '' });  
//   };

//   return (
//     <div>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
//         <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
//         <button type="submit">Send</button>
//       </form>
//       {responseMessage && <p>{responseMessage}</p>}
//     </div>
//   );
// }
// export default Contact;





//---------------------------------------------------------------------------------------------------------
// import React from 'react';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import contactImage from '../assets/contact.png';

// const Contact = () => {
//   return (
//     <section id="contact" className="contact-section">
//       <hr className="contact-hr" />

//       <h2 className="contact-title">Reach out to us</h2>
//       <p className="contact-subtext">
//       Have questions or need assistance? Our team is here to help! Whether you're looking for a comprehensive software management solution with IT Solutions, a stunning software web presence, or expert services to support your business growth, we've got you covered. Reach out to us today to learn more about our offerings, request a demo, or get personalized guidance. Let’s work together to streamline your operations and enhance your digital presence!
//       </p>

//       <div className="contact-image-container">
//         <img src={contactImage} alt="Contact Us" className="contact-image" />

//         <div className="contact-overlay">
//           <div className="contact-info">
//           <p><strong>Email:</strong> <a href="mailto:itsolutions@gmail.com">itsolutions@gmail.com</a></p>
//             <p><strong>Address:</strong> ABC Street, India</p>
//             <p><strong>Phone:</strong> +91-9876543210</p>
//           </div>

//           <div className="separator"></div>

//           <Form id="form" className="contact-form">
//             <FormGroup>
//               <Label for="name">Name</Label>
//               <Input type="text" placeholder="Your Name" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Input type="email" placeholder="Your Email" />
//             </FormGroup>
//             <FormGroup>
//               <Label for="message">Message</Label>
//               <Input type="textarea" placeholder="Your Message" />
//             </FormGroup>
//             <Button light color='light' size="sm" >Send Message</Button>
//           </Form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
//---------------------------------------------------------------------------------------------------------