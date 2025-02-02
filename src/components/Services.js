import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import cloudImage from '../assets/cloud.png';
import supportImage from '../assets/it-support.png';
import softwareImage from '../assets/software.png';

const services = [
  { title: "Cloud Solutions", description: "Secure and scalable cloud services for your business.", image: cloudImage },
  { title: "IT Support", description: "24/7 tech support to keep your business running smoothly.", image: supportImage },
  { title: "Software Development", description: "Custom software solutions tailored to your needs.", image: softwareImage }
];

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="services-header">
        <h2 className="services-header-text">Our Services</h2>
      </div>
      <p className="services-description">
        Our team of seasoned experts offers a comprehensive range of services designed to drive your business toward success. 
        From cutting-edge cloud solutions to customized IT strategies, we provide tailored support to enhance efficiency, scalability, 
        and overall growth, ensuring your business stays ahead in a competitive landscape.
      </p>
      <div className="services-section-cards">
        {services.map((service, index) => (
          <Card key={index} className="service-card">
            <div className="card-image-container">
              <img src={service.image} alt={service.title} className="service-image" />
            </div>
            <CardBody>
              <CardTitle tag="h5">{service.title}</CardTitle>
              <CardText>{service.description}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
      <div className="services-footer">
        <p>
          VIDYA - School Website is a powerful cloud-based platform designed for effortless school website development. 
          Whether you're an educator or administrator, our intuitive tools make it easy to create a visually stunning and 
          highly functional academic web presence, enhancing communication, engagement, and accessibility for students, 
          parents, and staff.
        </p>
        <br />
        <p>Ready to take your business to the next level? <a href="#form">Contact us today!</a></p>
      </div>
    </section>
  );
};

export default Services;
