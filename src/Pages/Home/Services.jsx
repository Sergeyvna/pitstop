import data from "../../data/index.json";

// Updated scroll function to accept a service title
function scrollToContact(serviceTitle) {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
        const navbar = document.querySelector('.navbar');
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        window.scrollTo({
            top: contactSection.offsetTop - navbarHeight,
            behavior: 'smooth'
        });

        setTimeout(() => {
            if (serviceTitle === "Tyres") {
                const tyreTabBtn = document.getElementById('tyres-tab-btn');
                if (tyreTabBtn) tyreTabBtn.click();
            } else {
                const generalTabBtn = document.getElementById('general-tab-btn');
                if (generalTabBtn) generalTabBtn.click();
            }
        }, 700); // Wait for scroll animation to finish
    }
}

export default function Services(){
    return(
        <section className="services-section" id="services">
            <div className="title-container">
                <h2 className="title">Services That We Provide</h2>
            </div>

            <div className="services-list">
                {data?.services?.map((item, index) =>(
                    <div
                        key={index}
                        className="services-card clickable"
                        onClick={() => scrollToContact(item.title)}
                        tabIndex={0}
                        role="button"
                        onKeyDown={e => { if (e.key === 'Enter') scrollToContact(item.title); }}
                        style={{ cursor: 'pointer' }}
                    >
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