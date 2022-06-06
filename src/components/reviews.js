import React from 'react';
import Review from './review';
const Reviews = ({reviews}) => {
  return (
    <div className='bg-primary mt-5 '>
      {reviews?.length > 0 ? (
        reviews.map((review, index) => {
          return (
            <Review
              author_details={review.author_details}
              content={review.content}
              author={review.author}
              key={review.id}
            />
          );
        })
      ) : (
        <h2>No reviews</h2>
      )}
    </div>
  );
};
export default Reviews;
