import React from "react";
import "./Footer.css"
import footerLogo from "../../assets/images/dio-logo.png"
const Footer = () => {
  return (
    <footer>
      <p>
        <img className="dio-logo"src={footerLogo} alt="" />
        Acesse <a href="https://dio.me">dio.me</a> e se cadastre agora
      </p>
    </footer>
  );
};

export default Footer;
