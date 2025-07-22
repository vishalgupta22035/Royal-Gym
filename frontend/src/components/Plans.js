import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Plans.css';

const Plans = ({ onJoinClick }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/plans')
      .then((res) => setPlans(res.data))
      .catch((err) => console.error('Error fetching plans:', err));
  }, []);

  return (
    <section className="plans" id="plans">
      <h2 className="heading" data-aos="fade-down">Our <span>Plans</span></h2>

      <div className="plans-content">
        {plans.map((plan, index) => (
          <div
            className="box"
            key={plan._id}
            data-aos="flip-left"
            data-aos-delay={index * 100}
          >
            <h3>{plan.title}</h3>
            <h2><span>{plan.price}</span></h2>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <a onClick={onJoinClick} className="join-now-btn">
              Join Now <i className="bx bx-arrow-right"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Plans;
