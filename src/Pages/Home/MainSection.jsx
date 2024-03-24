import React, { useState, useEffect } from 'react';

export default function MainSection() {
  const [navigateToContact, setNavigateToContact] = useState(false);

  useEffect(() => {
    if (navigateToContact) {
      const quoteSection = document.getElementById('quote');
      if (quoteSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
          top: quoteSection.offsetTop - navbarHeight - 50,
          behavior: 'smooth'
        });
        setNavigateToContact(false);
      }
    }
  }, [navigateToContact]);

  const handleRequestQuote = () => {
    // Set navigateToContact state to true when the button is clicked
    setNavigateToContact(true);
  };
  return (
    <section id="main-section" className="main-section" style={{ paddingTop: '50px' }}>
      <div className="main-container">
        <img className="main-img" src="./img/maingarageimage.jpg" alt="Image of the Garage" />
        <div className="overlay"></div>
        <div className="main-content-box">
          <div className="main-content">
            <h1 className="main-section-title">Welcome to <br />Pit Stop Autos</h1>
            <p className="main-section-desc">We are a family-owned garage located in Bristol, offering affordable prices for our services. <br /> We are dedicated to delivering prompt and professional service without compromising quality.</p>
          </div>
          <div className="scroll-arrow" onClick={handleRequestQuote}>
            <span className="arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
}