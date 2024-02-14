export default function About() {
    return (
        <section>
            <div className="about-container">
                <div className="title-container">
                    <h2 className="title">How to Find Us</h2>
                </div>

                <div className="map-container">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79565.01797417094!2d-2.6750893266746005!3d51.4506869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48718f5002860253%3A0x9c12552841ba7f2d!2sPit%20Stop%20Autos!5e0!3m2!1sen!2suk!4v1707865777878!5m2!1sen!2suk&zoom=15"  
                width="900" 
                height="450" 
                style={{ border: 0 }}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>
        </section>
    );
}