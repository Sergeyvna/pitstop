import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target;

        try {
            // Perform form submission using EmailJS
            await emailjs.sendForm('service_megdfpc', 'template_aoadi0m', form, '8DDhqFAXNqaZjlCG-');

            // Redirect to the success page
            window.location.href = form.getAttribute('data-success-url');
        } catch (error) {
            console.error('Form submission error:', error);
            // Handle any errors here
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id='contact'>
            <div className='parent'>
                <div className="title-container">
                    <h2 className="title">Get a Personalized Quote</h2>
                </div>
                <div className="tab-container">
                    <div className="tab-box">
                        <button className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>General</button>
                        <button className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Tyres</button>
                        <div className="line" style={{ left: activeTab === 0 ? '0%' : '50%' }}></div>
                    </div>

                    <div className="tab-content-box">
                        <div className="tab-content" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                            <form onSubmit={handleSubmit} className="contact-form-container" data-success-url="https://www.pitstopautosltd.co.uk/success">
                                <input type="text" name="_honey" style={{display: "none"}}/>
                                <input type="hidden" name="_captcha" value="false"/>

                                <div className="contact-container">
                                    <label htmlFor='full-name' className='contact-label'>
                                        <span>Full Name</span>
                                        <input type="text" className="contact-input" name="full_name" id="full-name" required />
                                    </label>

                                    <label htmlFor='email' className='contact-label'>
                                        <span>Email</span>
                                        <input type="email" className="contact-input" name="email" id="email" required  placeholder="jsmith@gmail.com"/>
                                    </label>

                                    <label htmlFor='phone' className='contact-label'>
                                        <span>Phone</span>
                                        <input type="text" className="contact-input" name="phone" id="phone" required />
                                    </label>

                                    <label htmlFor='car-reg' className='contact-label'>
                                        <span>Car Registration</span>
                                        <input type="text" className="contact-input" name="car_reg" id="car-reg" required placeholder="OV21MTU"/>
                                    </label>

                                    <label htmlFor='message' className='contact-label'>
                                        <span>Message</span>
                                        <textarea className="contact-input" id="message" name="message" rows="3" placeholder="Service Request" maxLength={250} required/>
                                    </label>

                                    <label className='checkbox-label'>
                                        <input type="checkbox" required id="checkbox"/>
                                        <span>I agree to terms & conditions provided by the company. By providing my details, I agree to receive email messages from the business.</span>
                                    </label>

                                    <div>
                                        <button type="submit" className={`btn btn-primary contact-form-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                                            <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    <div className="tab-content" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                    <form  onSubmit={handleSubmit} className="contact-form-container" data-success-url="https://www.pitstopautosltd.co.uk/success">
                            
                            <input type="text" name="_honey" style={{display: "none"}}/>
                            <input type="hidden" name="_captcha" value="false"/>

                            <div className="contact-container">
                                <label htmlFor='full-name' className='contact-label'>
                                    <span>Full Name</span>
                                    <input type="text" className="contact-input" name="full_name" id="full-name" required />
                                </label>

                                <label htmlFor='email' className='contact-label'>
                                    <span>Email</span>
                                    <input type="email" className="contact-input" name="email" id="email" required placeholder="jsmith@gmail.com"/>
                                 </label>

                                <label htmlFor='phone' className='contact-label'>
                                    <span>Phone</span>
                                    <input type="text" className="contact-input" name="phone" id="phone" required />
                                </label>

                                <label htmlFor='Tyre size' className='contact-label'>
                                    <span>Width / Profile / Rim / Speed</span>
                                    <input type="text" className="contact-input" name="tyre_size" id="tyre-size" placeholder="195/50R15V" required />
                                </label>

                                <label htmlFor="select-quantity" className='contact-label'>
                                    <span>Select Quantity</span>
                                    <select id="select-quantaty" name="quantity"  className="contact-input">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </label>


                                <label htmlFor='message' className='contact-label'>
                                    <span>Message</span>
                                    <textarea className="contact-input" id="message" name="message" rows="3" placeholder="Service Request" maxLength={250} required/>
                                </label>


                                <label htmlFor='checkbox' className='checkbox-label'>
                                    <input type="checkbox" required id="checkbox"/>
                                    <span>I agree to terms & conditions provided by the company. By providing my details, I agree to receive email messages from the business.</span>
                                </label>

                                <div>
                                    <button type="submit" className={`btn btn-primary contact-form-btn ${isSubmitting ? 'submitting' : ''}`} disabled={isSubmitting}>
                                        <span>{isSubmitting ? 'Submitting...' : 'Submit'}</span>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            
        </div> 
            
        </section>
    );
}