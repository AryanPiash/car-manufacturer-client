import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <div class="min-h-lg bg-slate-600 my-16">
                <div class="hero-content  flex-col lg:flex-row p-0">
                    <div className='w-2/5'>
                    <img src="http://webdesign-finder.com/weldo-fabrico/wp-content/uploads/2021/01/img_02.jpg" class="w-full hidden lg:block" alt='' />
                    </div>
                    <div>
                        <p><small className='tracking-[.35em] text-secondary text-xs'>GOT A QUESTIONS?</small></p>
                        <h2 className='text-white text-4xl font-bold mb-12 uppercase'>Request A Quote</h2>
                           <div className='grid grid-cols-2 gap-2 mb-4'>
                           <input type="text" placeholder="Name" class="input w-full max-w-xs" />
                           <input type="email" placeholder="Email" class="input w-full max-w-xs" />
                           </div>
                           <input type="text" placeholder="Subject" class="input w-full mb-4" /> <br />
                           <textarea className='w-full rounded p-4 outline-0' name="message" id="" cols="30" rows="4" placeholder='Message'></textarea>
                        
                        <button class="btn btn-secondary px-12 text-white mt-4">Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;