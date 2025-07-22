import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Reviews.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/reviews')
      .then((res) => setReviews(res.data))
      .catch((err) => console.error('Error fetching reviews:', err));
  }, []);

  return (
    <section className="review" id="review">
      <h2 className="heading" data-aos="fade-up">Client <span>Reviews</span></h2>
      <div className="wrapper">
        {reviews.map((review, index) => (
          <div className="review-item"
               key={review._id}
               data-aos="fade-up"
               data-aos-delay={index * 150}>
            <img src={`/assets/${review.image}`} alt={review.name} />
            <h2>{review.name}</h2>
            <div className="rating">
              {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
