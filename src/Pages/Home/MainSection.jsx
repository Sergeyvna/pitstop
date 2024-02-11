export default function MainSection() {
    return (
        <section id="main-section" className="main-section">
            
        <div className="main-container">
            <img className="main-img" src="./img/maingarageimage.jpg" alt="Image of the Garage"/>
            <div className="main-content-box">
                <div className="main-content">
                    <h1 className="main-section-title">Welcome to <br/>Pit Stop Autos</h1>
                    <p className="main-section-desc">We are a family-owned garage located in Bristol, offering affordable prices for our services. <br/> We are dedicated to delivering prompt and professional service without compromising quality.</p>

                </div>
                <div class="btn-container">
                    <button class="btn btn-primary">Request a Quote</button>
                </div>
            </div>
            
        </div>
    </section>
    );
}