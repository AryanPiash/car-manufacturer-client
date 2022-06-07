import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const AddProduct = () => {

    const [user] = useAuthState(auth)

    const handleSubmit = e => {
        e.preventDefault()
        
        const product = {
            name: e.target.name.value,
            img: e.target.img.value,
            description: e.target.description.value,
            minQuantity: e.target.minQuantity.value,
            availableQuantity: e.target.availableQuantity.value,
            price: e.target.price.value,
        }

        console.log(product);

        fetch('https://car-manufacturer.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast.success(`Congrats! Product added successfully`)

                }
                else {
                    toast.error(`Sorry, cannot added. Please try again.`)
                }


            })


    }

    return (
        <div className='my-4'>
            <h1 className='text-xl text-center font-bold my-4 text-blue-800'>Add A Product</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-full'>

                <input type="text" name='name' placeholder='Product Name' className="input input-bordered w-full max-w-md" />

                <input type="text" name='img' placeholder='Image Link' className="input input-bordered w-full max-w-md" />

               

                <textarea className='border w-full max-w-md rounded outline-0 p-2' name="description" id="" cols="30" rows="4" placeholder='Description'></textarea>

                <input type="number" name='minQuantity' placeholder="Minimum Quantity" className="input input-bordered w-full max-w-md" />

                <input type="number" name='availableQuantity' placeholder="Available Quantity" className="input input-bordered w-full max-w-md" />

                <input type="number" name='price' placeholder="Price" className="input input-bordered w-full max-w-md" />

                <input type="submit" value="Add Product" className="btn btn-secondary w-full max-w-md" />
            </form>
        </div>
    );
};

export default AddProduct;