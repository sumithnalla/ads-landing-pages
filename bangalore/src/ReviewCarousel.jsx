import React from 'react';
import './ReviewCarousel.css';
import { reviews } from './data';
import googleLogo from './google.png';

const ReviewCarousel = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-track">
        {/* Render twice for infinite effect */}
        {[...reviews, ...reviews].map((review, index) => (
          <div className="review-card" key={index}>
            <div className="card-top">
              <img src={googleLogo} alt="Google" className="google-icon" />
              <div className="stars">{"★".repeat(review.rating)}</div>
            </div>
            <p className="comment">“ {review.comment} ”</p>
            <div className="card-footer">
              <div className="avatar">{review.initials}</div>
              <div className="user-info">
                <div className="name">{review.name}</div>
                <div className="meta">{review.location} • AV Services</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCarousel;