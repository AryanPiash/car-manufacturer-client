import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyProfile = () => {
    const [user] = useAuthState(auth)

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



        fetch('http://localhost:5000/profile', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(profile)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    // toast.success(`Congrats! Your Review added successfully`)
                    console.log('added successfully');

                }
                else {
                    // toast.error(`Sorry, cannot added. Please try again.`)
                    console.log('sorry, not added');
                }


            })


    }
    return (
        <div>
            <h1>this is my profile</h1>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 gap-3 justify-items-center mt-4 w-full'>

                {/* <input type="text" name='name' value={user?.displayName} readOnly placeholder='Your Name' className="input input-bordered w-full max-w-xs" /> */}

                <input type="text" name='education' placeholder='Education' className="input input-bordered w-full max-w-xs" />

                <input type="text" name='location' placeholder='Location' className="input input-bordered w-full max-w-xs" />

                <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xs" />

                <input type="text" name='link' placeholder='LinkedIn or Github Link' className="input input-bordered w-full max-w-xs" />

                <input type="submit" value="Update Profile" className="btn btn-secondary w-full max-w-xs" />
            </form>
        </div>
    );
};

export default MyProfile;