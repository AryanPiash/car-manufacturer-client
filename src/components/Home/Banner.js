import React from 'react';

const Banner = () => {
    return (
        <div className="hero" style={{ backgroundImage: 'url(https://cdn.shopify.com/s/files/1/0074/7887/0105/files/slap3.jpg?v=1542785173)', height: '500px' }}>
            <div className="hero-overlay bg-opacity-50"></div>

            <div className="hero-content text-white">
                <div className="w-3/4 mr-auto">
                    <h1 className="mb-5 text-5xl font-bold">Best Car Parts Manufacturer</h1>
                    <p className="mb-5">We are trying to manufature the best quality parts for better riding experience and clients satisfaction.</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;