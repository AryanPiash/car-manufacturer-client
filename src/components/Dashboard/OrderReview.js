import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const OrderReview = () => {
    const [user] = useAuthState(auth)
    
    const handleSubmit = e => {
        e.preventDefault()
        const rating = e.target.rating.value
        const review = {
            name: user.displayName,
            client: user.email,
            product: e.target.product.value,
            description: e.target.description.value,
            rating: e.target.rating.value
        }

        if(rating > 5){
            toast.error('Please add Rating out of 5 only.');
            return;
        }

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.success){
                toast.success(`Congrats! Your Review added successfully`)
                
            }
            else{
                toast.error(`Sorry, cannot added. Please try again.`)
            }
            
            
        })
        

    }


    return (
        <div>
            <h1>This is Order Review</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-full'>

                <input type="text" name='name' value={user?.displayName} readOnly placeholder='Your Name' className="input input-bordered w-full max-w-xs" />

                <select name='product' className="select select-bordered w-full max-w-xs">
                <option disabled selected>Chose any Product</option>
                    <option>Dodge RAM 1500 Rim</option>
                    <option>BRAKE INSPECTIONS</option>
                    <option>Holset Turbo Charger</option>
                    <option>Lexus IS300 LED Headlight</option>
                    <option>Ironman Imove Gen 2</option>
                    <option>Front Mustang Bumper</option>
                </select>

                <textarea className='border w-full max-w-xs rounded outline-0 p-2' name="description" id="" cols="30" rows="4" placeholder='Description'></textarea>

                <input type="number" name='rating' placeholder="Rating" className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Order Now" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default OrderReview;