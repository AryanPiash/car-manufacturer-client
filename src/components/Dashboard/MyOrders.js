import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';
import DeleteModal from './DeleteModal'

const MyOrders = () => {
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState(false)
    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate()


    useEffect(() => {
        if (user) {
            fetch(`https://car-manufacturer.herokuapp.com/order?client=${user?.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    if (res.status === 401 || res.status === 403) {
                        localStorage.removeItem('accessToken');
                        navigate('/')
                    }
                    return res.json()
                })
                .then(data => {
                    return setOrders(data)
                })
        }
    }, [user])
   

    if (loading) {
        return <LoadingSpinner></LoadingSpinner>
    }

    return (
        <div>
            <div className='px-8 pt-5'>
                <div className="overflow-x-auto  rounded-lg">
                    <table className="table w-full">

                        <thead>
                            <tr><th>No.my</th>
                                <th>Name</th>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, index) => <tr
                                    key={index}
                                >
                                    <td>{index + 1}</td>
                                    <td>{order.clientName}</td>
                                    <td>{order.product}</td>
                                    <td>{order.quantity} Pcs</td>
                                    <td>${order.price}</td>
                                    <td>
                                        {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order?._id}`}><button className='btn btn-xs px-4 btn-success'>Pay</button></Link>}

                                        {(order.price && !order.paid) && <label
                                            onClick={() => setOrder(true)}
                                            htmlFor="my-modal"
                                            className="btn modal-button btn btn-xs ml-4">Cancel</label>}

                                        {(order.price && order.paid) && <span className='text-green-400'>Paid</span>}
                                    </td>
                                </tr>)
                            }
                            {order && <DeleteModal></DeleteModal>}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyOrders;