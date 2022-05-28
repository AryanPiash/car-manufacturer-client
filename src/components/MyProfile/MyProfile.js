import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import LoadingSpinner from '../Shared/LoadingSpinner';

const MyProfile = () => {
    const [user] = useAuthState(auth)
    // console.log(user);
    const url = `http://localhost:5000/profile/${user?.email}`

    const { data: client, isLoading, refetch } = useQuery(['profile'], () => fetch(url)
        .then(res => res.json()))

    if (isLoading) {
        return <LoadingSpinner></LoadingSpinner>
    }
    const { email,education,location,phone,link } = client;

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

        fetch(`http://localhost:5000/profile/${email}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Congrats! Your Profile updated successfully`)
                }
                else {
                    toast.error(`Sorry, cannot update profile. Please try again.`)
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
                            <p>{email}</p>
                            <p>Education: {education}</p>
                            <p>Address: {location}</p>
                            <p>Phone: {phone}</p>
                            <p>LinkeId or Github: {link}</p>
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