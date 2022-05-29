import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../Shared/LoadingSpinner';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L31HkLkcez7IG8reC6Jzyk4gk5G3r1mJQdjpvOtWsX01hwBWshSUkd6b7epTnFuLGK82ymlqQLlwq2lHubRvHze00NiAyfVxr');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`

    const { data: order, isLoading, refetch } = useQuery('orders', () => fetch(url, {

        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json()))


    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    
    const { clientName, product, address, price } = order;

    return (
        <div className=''>
            <div className="card max-w-md mx-auto my-12 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-green-500">Hello, <span className='font-bold'>{clientName}</span></h2>
                    <p>Please pay for <span className='text-green-500'>{product}</span></p>
                    <p>Your Address: <span className='text-green-500'>{address}</span></p>
                    <p>Please pay: <span className='text-green-500'>${price}</span></p>
                </div>
            </div>

            <div className="card max-w-md mx-auto my-12 bg-base-100 shadow-xl p-4">
                <Elements stripe={stripePromise}>
                    <CheckoutForm  order={order}/>
                </Elements>
            </div>



        </div>
    );
};

export default Payment;