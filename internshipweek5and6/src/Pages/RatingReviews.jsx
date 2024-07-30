import React, { useState } from 'react';
import '../Styles/RatingReviews.css';

function RatingReviews() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can send the rating and review to the server
    console.log({ rating, review });
  };

  return (
    <div className="rating-reviews-container">
      <div className="rating-reviews-form">
        <h2 className="rating-reviews-title">Rate and Review</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="rating" className="form-label">Rating</label>
            <input
              id="rating"
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="1"
              max="5"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="review" className="form-label">Review</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              className="form-textarea"
            />
          </div>
          <button type="submit" className="form-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default RatingReviews;
