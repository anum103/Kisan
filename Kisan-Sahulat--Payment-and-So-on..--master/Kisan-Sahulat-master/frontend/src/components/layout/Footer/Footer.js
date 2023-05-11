import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
      
         <h3>Contact Information</h3>
      <p>Phone No: 0302-5241417</p>
      </div>

      <div className="midFooter">
      <h1>Kisan Sahulat</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2022 &copy; Anam Zulfiqar</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/...">Instagram</a>
        <a href="http://youtube.com/...">Youtube</a>
        <a href="http://instagram.com/...">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
