

import React from 'react';
import ReviewsPage from './ReviewsPage';



export const metadata = {

  title: {
    absolute: "Satisfied Users"
  },
  description: ""
}

const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;