import React from 'react';
import './Services.css';

const services = [
  { title: 'Physical Fitness', image: '/assets/image1.jpg' },
  { title: 'Weight Gain', image: '/assets/image2.jpg' },
  { title: 'Strength Training', image: '/assets/image3.jpg' },
  { title: 'Fat Loss', image: '/assets/image4.jpg' },
  { title: 'WeightLifting', image: '/assets/image5.jpg' },
  { title: 'Running', image: '/assets/image6.jpg' },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="heading" data-aos="fade-down">Our <span>Services</span></h2>

      <div className="services-content">
        {services.map((service, index) => (
          <div
            className="row"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={service.image} alt={service.title} />
            <h4>{service.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
