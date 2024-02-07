import About from "../About";
import ContactForm from "../ContactForm";
import MainSection from "../MainSection";
import Services from "../Services";

export default function Home() {
    return(
        <>
            <MainSection/>
            <About/>
            <Services/>
            <ContactForm/>
        </>
    );
}