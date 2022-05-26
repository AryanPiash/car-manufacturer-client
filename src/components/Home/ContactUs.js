import React from 'react';

const ContactUs = () => {
    return (
        <div className='lg:mt-36'>
            <div className="min-h-lg bg-slate-600 my-16">
                <div className="hero-content  flex-col lg:flex-row py-0 px-4">
                    <div className='w-2/5'>
                    <img src="http://webdesign-finder.com/weldo-fabrico/wp-content/uploads/2021/01/img_02.jpg" className="w-full hidden lg:block" alt='' />
                    </div>
                    <div>
                        <p><small className='tracking-[.35em] text-secondary text-xs'>GOT A QUESTIONS?</small></p>
                        <h2 className='text-white text-4xl font-bold mb-12 uppercase'>Request A Quote</h2>
                           <div className='grid grid-cols-2 gap-2 mb-4'>
                           <input type="text" placeholder="Name" className="input w-full max-w-xs" />
                           <input type="email" placeholder="Email" className="input w-full max-w-xs" />
                           </div>
                           <input type="text" placeholder="Subject" className="input w-full mb-4" /> <br />
                           <textarea className='w-full rounded p-4 outline-0' name="message" id="" cols="30" rows="4" placeholder='Message'></textarea>
                        
                        <button className="btn btn-secondary px-12 text-white mt-4 mb-4">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;