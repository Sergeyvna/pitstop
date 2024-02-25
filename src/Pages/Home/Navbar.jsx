import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const location = useLocation();

    const closeMenu = () => {
        // Optional: Add logic to handle closing menu if needed
    }

    return (
        <nav className="navbar">
            <div>
                <img className="navbar-img" src="./img/logo.png" alt="pitstopautoslogo" />
            </div>
            <div className="navbar_items">
                <ul>
                    <li>
                        {location.pathname === '/' ? (
                            <ScrollLink
                                activeClass="navbar-active"
                                to="main-section"
                                className="navbar-content"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMenu}
                                style={{textDecoration: 'none' }}>
                                Home
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="navbar-content" onClick={closeMenu}>
                                Home
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="navbar-active"
                            to="gallery"
                            className="navbar-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={closeMenu}>
                            Gallery
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="navbar-active"
                            to="contact"
                            className="navbar-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={closeMenu}>
                            Get a Quote
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="navbar-active"
                            to="about"
                            className="navbar-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={closeMenu}>
                            About us
                        </ScrollLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;