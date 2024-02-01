export default function MainSection() {
    return (
        <section id="main-section" className="main-section">
            <div className="main-img">
                <img src="./img/maingarageimage.jpg" alt="Image of the Garage"/>
            </div>
            <div className="main-content-box">
                <div className="main-contet">
                    <h1 className="main-section-title">Welcome to <br></br>Pit Stop Autos</h1>
                    <p className="main-section-desc">We are a family-owned garage located in <span className="dark-blue-text">Bristol</span>, offering <span className="dark-blue-text">affordable</span> prices for our services. <br/> We pride ourselves on our commitment to provide a professional and speedy service at all times, whilst maintaining the highest quality of work.</p>
                </div>
                <div className="btn-container">
                    <button className="btn btn-primary">Request a Quote</button>
                    <p className="call-txt">or Call Us 07482014241</p>
                </div>
            </div>
        </section>
    );
}