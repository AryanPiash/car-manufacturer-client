import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const Purchase = () => {
    const { id } = useParams()
    const [user, loading] = useAuthState(auth)
    
    const url = `http://localhost:5000/products/${id}`

    const {data: product, isLoading, refetch} = useQuery(['available'], () => fetch(url)
    .then(res => res.json()))
    
    
    if(loading || isLoading){
        return <LoadingSpinner></LoadingSpinner>
    }
    const { _id, name, img, description, minQuantity, availableQuantity, price } = product;

    const handleSubmit = e => {
        e.preventDefault()
        const quantity = e.target.quantity.value
        const order = {
            clientName: user.displayName,
            client: user.email,
            address: e.target.address.value,
            phone: e.target.phone.value,
            productId: _id,
            product: name,
            price,
            quantity: quantity
        }

        if(quantity < minQuantity){
            console.log('You cannot order less than Minimum Quantity.');
            return;
        }
        if(quantity > availableQuantity){
            console.log('You cannot order more than Available Quantity.');
            return;
        }

        // post booking to databse
        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                // toast(`Appointment has set ${formatedDate} at ${slot}`)
                console.log('Order added to mongodb');
            }
            else{
                // toast.error(`Already have an appointment ${formatedDate} at ${slot}`)
                console.log('Sorry order not added');
            }
            refetch()
            // close the Modal
            
        })
        

    }

    return (
        <div className='px-8 my-12'>
            <div class="flex flex-col w-full lg:flex-row">
                <div class="grid w-2/4  place-items-center">

                    <div className="card max-w-md bg-base-100 shadow-xl border">
                        <figure><img className='h-32' src={img} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{name}</h2>
                            <p>{description}</p>
                            <span>Minimum Quantity: <span className='text-blue-800 font-semibold'>{minQuantity}</span></span>
                            <span>Available Quantity: <span className='text-blue-800 font-semibold'>{availableQuantity}</span></span>
                            <span>Price: $<span className='text-blue-800 font-semibold'>{price}</span> /Unit</span>
                        </div>
                    </div>

                </div>

                <div class="grid place-items-center w-2/4">
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-full'>
                        <input type="text" name='name' disabled value={user?.displayName} className="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className="input input-bordered w-full max-w-xs" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='address' className="input input-bordered w-full max-w-xs" placeholder='Address' />
                        <input type="number" name='quantity' className="input input-bordered w-full max-w-xs" placeholder='Quantity' />
                        <input type="submit" value="Order Now" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;