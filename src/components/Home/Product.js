import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, description, minQuantity, availableQuantity, price } = product;

    return (
        <div className="card max-w-md bg-base-100 shadow-xl">
            <figure><img className='h-32' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <span>Minimum Quantity: <span className='text-blue-800 font-semibold'>{minQuantity}</span></span>
                <span>Available Quantity: <span className='text-blue-800 font-semibold'>{availableQuantity}</span></span>
                <span>Price: $<span className='text-blue-800 font-semibold'>{price} /Unit</span></span>
                <div className="card-actions justify-center mt-4">
                    <Link to='/purchase'><button className="btn btn-primary px-8 text-white">Purchase</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;