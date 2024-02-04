import data from "../../data/index.json";

export default function Services(){
    return(
        <section className="services-section" id="services">
            <div className="services-container">
                <h2 className="services-title">Services</h2>
            </div>

            <div className="services-list">
                {data?.services?.map((item, index) =>(
                    <div key={index} className="services-card">
                        <div className="services-card-img">
                            <img src={item.src} alt="Services Image"/>
                        </div>

                        <div className="services-list-name">
                            <h3 className="list-title">
                                {item.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}