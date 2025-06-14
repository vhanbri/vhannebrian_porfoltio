import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Vhanne</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>

          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>

          <li>
            <a href="#services" className="footer__link">Services</a>
          </li>
        </ul>

        <div className="footer__social">
          <a 
            href="https://www.linkedin.com/in/vhanne-brian-villaso-213690231" 
            className="footer__social-link" 
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a 
            href="https://github.com/vhannbii" 
            className="footer__social-link" 
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a 
            href="https://www.facebook.com/vhanbri" 
            className="footer__social-link" 
            target="_blank"
            rel="noreferrer"
          >
            <i className="bx bxl-facebook"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
