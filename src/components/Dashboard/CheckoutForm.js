import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CheckoutForm = ({ order }) => {
    const stripe = useStripe()
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    
    const { _id, client, clientName, price } = order;


    useEffect(() => {

        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret)
                }
            });
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault()


        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log(error);
            setCardError(error?.message)
        } else {
            setCardError('')
        }

        // confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: clientName,
                        email: client
                    },
                },
            },
        );
        
        if(intentError){
            setCardError(intentError?.message)
        }else{
            setCardError('')
            console.log(paymentIntent);
            toast.success('Congrats! Your payment is completed')

            const payment = {
                appointment: _id,
                transactinId: paymentIntent.id
            }
            // store payment on database
            fetch(`http://localhost:5000/order/${_id}`,{
                method: 'PATCH',
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-xs btn-success px-4 mt-4' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            <p className='text-red-500 mt-2'><small>{cardError}</small></p>
        </>
    );
};

export default CheckoutForm;