import ContactForm from "../ContactForm";
import MainSection from "../MainSection";
import Services from "../Services";
import Gallery from "../Gallery";
import About from "../About";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Quote from "../QuoteButton";

export default function Home() {
    return(
        <>
            <MainSection/>
            <Quote/>
            <Services/>
            <Gallery/>
            <ContactForm/>
            <About/>
            <Footer/>
        </>
    );
}