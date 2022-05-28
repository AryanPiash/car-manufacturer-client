import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/clients/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to make an Admin')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast('Maked Admin successfully.')
                }
            })
    }
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{role !== 'Admin' ? <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button> : <p className='text-green-500'>Admin</p>}</td>
            <td><button className="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;