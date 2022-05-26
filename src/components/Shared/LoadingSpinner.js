import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='mt-40'>
            <div className=" flex items-center justify-center ">
                <div className="w-16 h-16 border-b-2 border-blue-500 rounded-full animate-spin"></div>
            </div>
        </div>
    );
};

export default LoadingSpinner;