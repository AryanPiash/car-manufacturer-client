import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    
    const url = `https://car-manufacturer.herokuapp.com/profile/${user?.email}`
    // const url = `https://car-manufacturer.herokuapp.com/clients/${user?.email}`

    const { data: client, isLoading, refetch } = useQuery(['profile'], () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    // const { education,location,phone,link } = client;

    const handleSubmit = e => {
        e.preventDefault()

        const profile = {
            name: user.displayName,
            email: user.email,
            education: e.target.education.value,
            location: e.target.location.value,
            phone: e.target.phone.value,
            link: e.target.link.value
        }

        fetch(`https://car-manufacturer.herokuapp.com/profile/${user.email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount === 1 || data.upsertedCount === 1) {
                    toast.success(`Congrats! Your Profile updated successfully`)
                    refetch()
                }
                else {
                    toast.error(`Sorry, cannot update profile. Please try again.`)
                    refetch()
                }
            })


    }
    return (

        <div className='px-8 my-12'>
            <div className="flex flex-col w-full lg:flex-row">
                <div className="grid w-2/4  place-items-center">

                    <div className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{user.displayName}</h2>
                            <p>{user.email}</p>
                            <p>Education: {client?.education}</p>
                            <p>Address: {client?.location}</p>
                            <p>Phone: {client?.phone}</p>
                            <p>LinkeId or Github: {client?.link}</p>
                        </div>
                    </div>

                </div>

                <div className="grid place-items-center w-2/4">
                    <h1 className='text-xl font-bold text-secondary'>Update Profile</h1>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-full'>

                        <input type="text" name='education' placeholder='Education' className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='location' placeholder='Location' className="input input-bordered w-full max-w-xs" />

                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                        <input type="text" name='link' placeholder='LinkedIn or Github Link' className="input input-bordered w-full max-w-xs" />

                        <input type="submit" value="Update Profile" className="btn btn-secondary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;