import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

function Navbar() {
    const location = useLocation();

    return (
        <nav className="navbar">
            <div>
                <a href="/" className="navbar-logo">
                    <img className="navbar-img" src="./img/logo.png" alt="pitstopautoslogo" />
                </a>
                
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
                                style={{textDecoration: 'none' }}>
                                Home
                            </ScrollLink>
                        ) : (
                            <RouterLink to="/" className="navbar-content">
                                Home
                            </RouterLink>
                        )}
                    </li>
                    <li>
                        <ScrollLink
                            activeClass="navbar-active"
                            to="services"
                            className="navbar-content"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            Services
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
                            duration={500}>
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
                            duration={500}>
                            About
                        </ScrollLink>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;