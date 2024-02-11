import React, { useState } from 'react';

export default function ContactForm() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };
    
    return (
        <section>
            <div className="tab-container">
                <div className="tab-box">
                    <button className={`tab-btn ${activeTab === 0 ? 'active' : ''}`} onClick={() => handleTabClick(0)}>General</button>
                    <button className={`tab-btn ${activeTab === 1 ? 'active' : ''}`} onClick={() => handleTabClick(1)}>Tyres</button>
                    <div className="line" style={{ left: activeTab === 0 ? '0%' : '50%' }}></div>
                </div>

                <div className="tab-content-box">
                    <div className="tab-content" style={{ display: activeTab === 0 ? 'block' : 'none' }}>
                        <h2>General</h2>
                        <p>Email</p>
                        <p>Name</p>
                        <p>Car Reg</p>
                        <p>Description</p>
                    </div>

                    <div className="tab-content" style={{ display: activeTab === 1 ? 'block' : 'none' }}>
                        <h2>Tyres</h2>
                        <p>Email</p>
                        <p>Name</p>
                        <p>Car Reg</p>
                        <p>Tyre size</p>
                        <p>Description</p>
                    </div>
                </div>
            </div>
        </section>
    );
}