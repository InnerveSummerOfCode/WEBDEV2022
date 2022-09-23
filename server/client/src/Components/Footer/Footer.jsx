import React from "react";
import { BsFillTelephoneFill, BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_row">
        <div className="footer__col">
          <img src="./Assets/logo-cropped.svg" className="logo" alt="" />
          <p>
            James Church, New Church Rd, Opp. St, Kashmere Gate, New Delhi,
            Delhi 110006
          </p>
          <div className="footer_block">
            <BsFillTelephoneFill className="icon" />
            <a>+91 98712 38549</a>
          </div>
          <div className="footer_block">
            <MdEmail className="icon" />
            <a>aidintime@gmail.com</a>
          </div>
          <div className="icon_container">
            <FaFacebookF className="icon" />
            <AiFillInstagram className="icon" />
            <BsTwitter className="icon" />
            <FaLinkedinIn className="icon" />
          </div>
        </div>
        <div className="footer__col">
          <h4>Useful Links</h4>
          <ul>
            <li>About</li>
            <li>Privacy &amp; Policy</li>
            <li>Terms &amp; Conditions</li>
            <li>Career</li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Help</h4>
          <ul>
            <li>Talk To Support</li>
            <li>Support Docs</li>
            <li>Status</li>
          </ul>
        </div>
      </div>
      <div className="footer_row">
      &#169; All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
