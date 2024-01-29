export default function MainSection() {
    return (
        <section id="main-section" className="main-section">
            <div className="mainSectionImg">
                <img src="./img/maingarageimage.jpg" alt="Image of the Garage"/>
            </div>
            <div className="main-content-box">
                <div className="mainContet">
                    <h1 className="mainSectionTitle">
                        <span className="mainSectionTitleColor">Welcome to Pit Stop Autos</span>
                    </h1>
                    <p className="mainSectionDesc">We are a local garage located in Bristol, offering affordable prices for our services.</p>
                </div>
                <div className="btn-container">
                    <button className="btn btn-primary">Request a Quote</button>
                    <p className="call-txt">or Call Us 07482014241</p>
                </div>
            </div>
        </section>
    );
}