import React from 'react';

const Review = ({ review }) => {
    const { name, product, description, rating } = review;

    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{product}</h2>
                <p>{description}</p>
                <div className='flex justify-between items-center'>
                    <span>Ratings: {rating}</span>
                    <div className="rating rating-xs">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Review;