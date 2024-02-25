import ContactForm from "../ContactForm";
import MainSection from "../MainSection";
import Services from "../Services";
import Gallery from "../Gallery";
import About from "../About";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function Home() {
    return(
        <>
            <MainSection/>
            <Services/>
            <Gallery/>
            <ContactForm/>
            <About/>
            <Footer/>
        </>
    );
}