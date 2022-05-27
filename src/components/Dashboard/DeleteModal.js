import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteModal = () => {
    const [user] = useAuthState(auth)
    
    const handleDelete = () => {
        const url = `http://localhost:5000/order/${user?.email}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log('deleted', data);
                toast.success(`Deleted successfully.`)
                })
    }
    return (
        <div>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-xl text-red-400">Are you sure you want to Cancel this Order?</h3>
                    <p class="py-4 text-red-400">If you cancel this order, the order item will delete parmanently from odrers list.</p>
                    <div class="modal-action">
                        <label onClick={handleDelete} for="my-modal" class="btn">Yes, I'm Sure</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteModal;


