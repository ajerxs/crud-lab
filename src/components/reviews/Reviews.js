import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const { reviews, restaurantId, deleteReview } = this.props
    const restaurantReviews = reviews.filter(review => review.restaurantId === restaurantId)
    const renderedReviews = restaurantReviews.map(review => <Review key={review.id} review={review} deleteReview={deleteReview} />)
    return (
      <ul>
        {renderedReviews}
      </ul>
    );
  }
};

export default Reviews;