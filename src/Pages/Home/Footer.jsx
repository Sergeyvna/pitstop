import { Link } from "react-scroll";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
      <div className="footer-link-container">
        <div>
          <p>Pit Stop Autos Ltd. <br/>Unit1 Garage, Whitby Rd, <br/>Bristol BS4 4AR <br/><b>MON - FRI: 9AM - 5PM </b><br/>Phone: 07482 014241 <br/>Email: <a href="mailto:pitstopautosbristol@gmail.com" className="footer-links">pitstopautosbristol@gmail.com</a></p>
          <hr/>
          <div className="small-text">
            <p><a href="/Terms" className="footer-links">Terms and Conditions</a></p>
            <p>Made by <a href="mailto:insedova@mail.com" className="footer-links" target="_blank" rel="noreferrer">Inga</a></p>
            
          </div>
          
        </div>

        <div className="footer-social-icon">
          <ul>
            <li>
              <a href="https://www.facebook.com/Pitstopautoslimited" className="navbar-content" target="_blank" rel="noreferrer">
                <img className="social-icon" src="./img/facebook-logo.png" alt="Facebook"/>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/pit_stop_autos_ltd" className="navbar-content" target="_blank" rel="noreferrer">
                <img className="social-icon" src="./img/instagram-logo.png" alt="Instagram"/>
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@pitstopautosbristol" className="navbar-content" target="_blank" rel="noreferrer">
                <img className="social-icon" src="./img/tiktok-logo.png" alt="TikTok"/>
              </a>
            </li>
            
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
}