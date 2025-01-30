import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const services = [
  { title: "Cloud Solutions", description: "Secure and scalable cloud services for your business." },
  { title: "IT Support", description: "24/7 tech support to keep your business running smoothly." },
  { title: "Software Development", description: "Custom software solutions tailored to your needs." }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      {services.map((service, index) => (
        <Card key={index} className="service-card">
          <CardBody>
            <CardTitle tag="h5">{service.title}</CardTitle>
            <CardText>{service.description}</CardText>
          </CardBody>
        </Card>
      ))}
    </section>
  );
};

export default Services;
