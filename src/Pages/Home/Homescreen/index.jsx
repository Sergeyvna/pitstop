import ContactForm from "../ContactForm";
import MainSection from "../MainSection";
import Services from "../Services";
import Gallery from "../Gallery";

export default function Home() {
    return(
        <>
            <MainSection/>
            <Services/>
            <Gallery/>
            <ContactForm/>
        </>
    );
}