import { useState, useEffect } from "react"
import { Link } from "react-scroll"

function Navbar() {
    const {navActive, setNavActive} = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive);
    }

    const closeMenu = () => {
        setNavActive(false);
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500) {
                closeMenu;
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    useEffect( () => {
        if(window.innerWidth <= 1200){
            closeMenu;
        }
    }, []);

    return (
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <div>
                <img src="./img/tag-1.png" alt="pitstopautoslogo" />
            </div>
            <a className={`nav_ham ${navActive ? "active" : ""}`} onClick={toggleNav}>
                <span className="nav_ham_line"></span>
                <span className="nav_ham_line"></span>
                <span className="nav_ham_line"></span>
            </a>
            <div className={`navbar_items ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbar-active" 
                        spy={true} smooth={true} offset={-70} duration={500} 
                        to="main_section" 
                        className="navbar-content">Home</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbar-active" 
                        spy={true} smooth={true} offset={-70} duration={500} 
                        to="services" 
                        className="navbar-content">Services</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbar-active" 
                        spy={true} smooth={true} offset={-70} duration={500} 
                        to="contact" 
                        className="navbar-content">Contact Us</Link>
                    </li>
                    <li>
                        <Link onClick={closeMenu} 
                        activeClass="navbar-active" 
                        spy={true} smooth={true} offset={-70} duration={500} 
                        to="gallery" 
                        className="navbar-content">Gallery</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;