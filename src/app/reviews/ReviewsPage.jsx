"use client"
import ReviewCard from '@/components/cards/ReviewCard';
import React, { useEffect, useState } from 'react';
import ReviewLoading from './ReviewLoading';
import { Anek_Bangla } from 'next/font/google';



const anek = Anek_Bangla({
  weight: ["400"]
})

const ReviewsPage = () => {
  const  [reviews, setReviews] = useState([]);
  const  [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(" https://taxi-kitchen-api.vercel.app/api/v1/reviews")
    .then(res => res.json())
    .then((data) => {
      setReviews(data.reviews || [] );
      setLoading(false)
  })
}, [])
  if(loading){
    return <ReviewLoading></ReviewLoading>
  }
  return (
    <div className={anek.className}>
       {
                  reviews.map((rev) => (<ReviewCard key={rev.id} review={rev} ></ReviewCard>))
        }
    </div>
  );
};

export default ReviewsPage;