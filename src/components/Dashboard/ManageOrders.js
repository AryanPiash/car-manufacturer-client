import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import DeleteModal from './DeleteModal';

const ManageOrders = () => {
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState(false)
    const [user, loading] = useAuthState(auth)

    useEffect(() => {
        fetch(`https://car-manufacturer.herokuapp.com/orders`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    // localStorage.removeItem('accessToken');
                    console.log('something problem in ManageOrder');
                }
                return res.json()
            })
            .then(data => {
                // console.log(data);
                return setOrders(data)
            })

    }, [user])

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div className='my-8'>
            <h1 className='text-xl text-center font-semibold text-blue-800'>Manage All Orders</h1>
            <div className='px-8 pt-5'>
                <div className="overflow-x-auto  rounded-lg">
                    <table className="table w-full">

                        <thead>
                            <tr><th>No.</th>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders?.map((order, index) => <tr
                                    key={index}
                                >
                                    <td>{index + 1}</td>
                                    <td>{order.clientName}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity} Pcs</td>
                                    <td>${order.price}</td>
                                    <td>
                                        {(order.price && !order.paid) && <label
                                            onClick={() => setOrder(true)}
                                            htmlFor="my-modal"
                                            className="btn modal-button btn btn-xs ml-4">Delete Order</label>}
                                    </td>
                                    {order && <DeleteModal></DeleteModal>}
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageOrders;