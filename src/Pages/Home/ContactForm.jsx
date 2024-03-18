import React, { useState } from 'react';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
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
                        
                        <form  action="https://formsubmit.co/f0a7b6a729bd7f53ff95e224651bec94" method="POST" className="contact-form-container">
                            
                            <input type="text" name="_honey" style={{display: "none"}}/>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://pitstopautos.netlify.app/success"/>

                            <div className="contact-container">
                                <label htmlFor='Full name' className='contact-label'>
                                    <span>Full Name</span>
                                    <input type="text" className="contact-input" name="Full&nbsp;Name" id="full-name" required />
                                </label>

                                <label htmlFor='Email' className='contact-label'>
                                    <span>Email</span>
                                    <input type="email" className="contact-input" name="Email" id="email" required  placeholder="jsmith@gmail.com"/>
                                 </label>

                                <label htmlFor='Phone' className='contact-label'>
                                    <span>Phone</span>
                                    <input type="text" className="contact-input" name="Phone" id="phone" required />
                                </label>

                                <label htmlFor='Car Registration' className='contact-label'>
                                    <span>Car Registration</span>
                                    <input type="text" className="contact-input" name="Car&nbsp;Registration" id="car-model" required placeholder="OV21MTU"/>
                                </label>

                                <label htmlFor='Message' className='contact-label'>
                                    <span>Message</span>
                                    <textarea className="contact-input" id="message" name="Message" rows="3" placeholder="Service Request" maxLength={250}/>
                                </label>

                                <label className='checkbox-label'>
                                    <input type="checkbox" required id="checkbox"/>
                                    <span>I agree to terms & conditions provided by the company. By providing my details, I agree to receive email messages from the business.</span>
                                </label>

                                <div>
                                    <button className="btn btn-primary contact-form-btn">Submit</button>
                                </div>
                            </div>
                        </form>

                        
                    </div>

                    <div className="tab-content" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                    <form  action="https://formsubmit.co/f0a7b6a729bd7f53ff95e224651bec94" method="POST" className="contact-form-container">
                            
                            <input type="text" name="_honey" style={{display: "none"}}/>
                            <input type="hidden" name="_captcha" value="false"/>
                            <input type="hidden" name="_next" value="https://pitstopautos.netlify.app/success"/>


                            <div className="contact-container">
                                <label htmlFor='full-name' className='contact-label'>
                                    <span>Full Name</span>
                                    <input type="text" className="contact-input" name="Full&nbsp;name" id="full-name" required />
                                </label>

                                <label htmlFor='email' className='contact-label'>
                                    <span>Email</span>
                                    <input type="email" className="contact-input" name="Email" id="email" required placeholder="jsmith@gmail.com"/>
                                 </label>

                                <label htmlFor='phone' className='contact-label'>
                                    <span>Phone</span>
                                    <input type="text" className="contact-input" name="Phone" id="phone" required />
                                </label>

                                <label htmlFor='Tyre size' className='contact-label'>
                                    <span>Width / Profile / Rim / Speed</span>
                                    <input type="text" className="contact-input" name="Tyre&nbsp;Size" id="tyre-size" placeholder="195/50R15V" required />
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
                                    <textarea className="contact-input" id="message" name="Message" rows="3" placeholder="Service Request" maxLength={250}/>
                                </label>


                                <label htmlFor='checkbox' className='checkbox-label'>
                                    <input type="checkbox" required id="checkbox"/>
                                    <span>I agree to terms & conditions provided by the company. By providing my details, I agree to receive email messages from the business.</span>
                                </label>

                                <div>
                                    <button className="btn btn-primary contact-form-btn">Submit</button>
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