import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import DeleteProductsModal from './DeleteProductsModal';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [product, setProduct] = useState(false)
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        fetch(`https://car-manufacturer.herokuapp.com/products`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    // localStorage.removeItem('accessToken');
                    console.log('something problem in ManageProducts');
                }
                return res.json()
            })
            .then(data => {
                return setProducts(data)
            })

    }, [user])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    return (
        <div className='my-8'>
            <h1 className='text-xl text-center font-semibold text-blue-800'>Manage All Products</h1>
            <div className='px-8 pt-5'>
                <div className="overflow-x-auto  rounded-lg">
                    <table className="table w-full">

                        <thead>
                            <tr><th>No.</th>
                                <th>Product Name</th>
                                <th>Min Order Quantity</th>
                                <th>Available Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                products?.map((product, index) => <tr
                                    key={index}
                                >
                                    <td>{index + 1}</td>
                                    <td>{product.name}</td>
                                    <td>{product.minQuantity}</td>
                                    <td>{product.availableQuantity} Pcs</td>
                                    <td>${product.price}</td>
                                    <td>
                                        {(product.price && !product.paid) && <label
                                            onClick={() => setProduct(true)}
                                            htmlFor="my-modal"
                                            className="btn modal-button btn btn-xs ml-4">Delete Product</label>}
                                    </td>
                                    {product && <DeleteProductsModal id={product._id}></DeleteProductsModal>}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageProducts;