import React from 'react';
import ErrorImg from '../../assets/images/error.jpg'

const NotFound = () => {
    return (
        <div className='text-center'>
            <img className='w-2/4 mx-auto mt-4' src={ErrorImg} alt="" />
            <h1 className='text-4xl text-blue-900'>OOPS!!</h1>
            <h2 className='text-3xl text-error font-semibold mt-5'>The page are you looking for is not availabe.</h2>
        </div>
    );
};

export default NotFound;