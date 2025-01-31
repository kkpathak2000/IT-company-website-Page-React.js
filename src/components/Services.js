import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const services = [
  { title: "Cloud Solutions", description: "Secure and scalable cloud services for your business." },
  { title: "IT Support", description: "24/7 tech support to keep your business running smoothly." },
  { title: "Software Development", description: "Custom software solutions tailored to your needs." }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2 className='services-header-text'>Our Services</h2>
      </div>
        <p className="services-description">
          Our team of experts provides a wide range of services to help your business succeed. From cloud solutions
        </p>
      <div className="services-section-cards">
          {services.map((service, index) => (
            <Card key={index} className="service-card">
              <CardBody>
                <CardTitle tag="h5">{service.title}</CardTitle>
                <CardText>{service.description}</CardText>
              </CardBody>
            </Card>
          ))}
      </div>
      <div className="services-footer">
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p> 
        <br />
        <p>Ready to take your business to the next level? <a href="#form">Contact us today!</a></p>
      </div>
    </section>
  );
};

export default Services;