import React, { useEffect, useState } from 'react';
import Review from './Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch(`https://car-manufacturer.herokuapp.com/review`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])



    return (
        // clients review
        <div className='px-12 bg-slate-200 py-16 my-12'>
            <h1 className='text-4xl text-center font-bold uppercase mb-12'>Our <span className='text-primary'>Clients</span> Review</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;