import React from "react";
import "../components-css/Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
        <ul className = 'content'>
            <li>
                <p className="text">Contact me </p>
            </li>
            <li>
                <a href="https://github.com/GabrielGagn0n">
                <img
                  src="assets/github.png" 
                  alt="Github"
                  className="imageSocial"
                  title="My Github"
                />
                </a>
            </li>
            <li>
                <a href="mailto:gabriel.gagnon97@gmail.com">
                <img
                  src="assets/email.png"
                  alt="eMail"
                  className="imageSocial"
                  title="Contact Me"
                />
            </a>
          </li>
        </ul>
    </footer>
  );
};

export default Footer;
