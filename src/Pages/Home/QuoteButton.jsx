import React, { useState, useEffect } from 'react';
export default function Quote() {
    const [navigateToContact, setNavigateToContact] = useState(false);

  useEffect(() => {
    if (navigateToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        window.scrollTo({
          top: contactSection.offsetTop - navbarHeight,
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
        <section>
            <div className="btn-container">
                <button className="btn btn-primary" onClick={handleRequestQuote}>Request a Quote</button>
            </div>
        </section>
    );
}