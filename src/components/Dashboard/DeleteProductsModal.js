import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const DeleteProductsModal = ({id}) => {
    const [user] = useAuthState(auth)
    
    const handleDelete = () => {
        const url = `https://car-manufacturer.herokuapp.com/product/${id}`
        console.log(url);
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
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-xl text-red-400">Are you sure you want to Cancel this Order?</h3>
                    <p className="py-4 text-red-400">If you cancel this order, the order item will delete parmanently from odrers list.</p>
                    <div className="modal-action">
                        <label onClick={handleDelete} htmlFor="my-modal" className="btn">Yes, I'm Sure</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeleteProductsModal;


