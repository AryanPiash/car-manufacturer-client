import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div>
                        <img src="https://st.depositphotos.com/1144472/2003/i/600/depositphotos_20030237-stock-photo-cheerful-young-man-over-white.jpg"
                            class="max-w-xs" alt='' />
                    </div>

                    <div>
                        <h1 class="text-3xl font-semibold">Hello! I'm <br /><span className='text-primary text-7xl'>Aryan Piash</span></h1>
                        <h2 className='text-3xl text-secondary font-semibold mt-8'>A Full Stack Developer</h2>
                        <p class="py-6">Hello! I'm Aryan Piash, a passionate Web Developer. I develop web applications, mobile applications, and desktop applications. My core skill is based on JavaScript and I love to do most of the things using JavaScript. I love to make the web more open to the world. I have graduated with a bachelor's degree in Computer Science Engineering from Daffodil International University in 2021. I am available for any kind of job opportunity that suits my interests</p>
                        <div>
                            <h2>Addisional Info:</h2>
                            <p>Email: aryanpiash420@gmail.com</p>
                            <p className='mb-4'>Address: Dhanmondi 32, Dhaka</p>
                            <h2>Technology I Learned:</h2>
                            <p>Html, Css, Bootstrap, Tailwind, JS fundamentals, ES6, JS Advance, React, Node, Express, Mongodb, Git and Github, Firebase Authentication, Netlify, Heroku etc.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='my-12 px-12'>
                            <h1 className='text-center text-blue-900 text-2xl font-semibold my-4'>Here is my Awesome Projects</h1>
                            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                                <div class="card bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 class="card-title">Ema John Shopping</h2>
                                        <p>https://ema-john-simple-1236b.web.app/</p>
                                    </div>
                                </div>
                                <div class="card bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 class="card-title">Natural Photographer</h2>
                                        <p>https://natural-photographer.web.app/</p>
                                    </div>
                                </div>
                                <div class="card bg-base-100 shadow-xl">
                                    <div class="card-body">
                                        <h2 class="card-title">Inventory Management</h2>
                                        <p>https://inventory-management-28f0a.web.app/</p>
                                    </div>
                                </div>

                            </div>
                        </div>
        </div>
    );
};

export default Portfolio;