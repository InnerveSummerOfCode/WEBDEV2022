import React from "react";
import "./home.css";
import { MdVerifiedUser, MdLocationPin, MdPhoneIphone } from "react-icons/md";
import { HiUser } from "react-icons/hi";
import { FaChevronRight } from "react-icons/fa";
import { Navbar } from "../../Components";

const Header = () => {
  return (
    <div className="header">
      {/* <Navbar /> */}
      <div className="header__container">
        <div className="header__left">
          <h1 className="font-head">
            Virtual <span className="one">Healthcare</span> <br />{" "}
            <span className="two">When you need it</span>
          </h1>
          <div className="header__list">
            <div className="header__listItem">
              <MdVerifiedUser className="list-item_icon" />
              <div className="list-item_content">
                <h3>Health Guarantee Forever</h3>
                <p>We Always Provide The Best Warranty For You</p>
              </div>
            </div>
            <div className="header__listItem">
              <MdLocationPin className="list-item_icon" />
              <div className="list-item_content">
                <h3>Spread In Various Places</h3>
                <p>We Are Connected With Hospitals All Over The Globe</p>
              </div>
            </div>
            <div className="header__listItem">
              <MdPhoneIphone className="list-item_icon" />
              <div className="list-item_content">
                <h3>Services Available On One Tap</h3>
                <p>We Are Accessible Through Web Based Application</p>
              </div>
            </div>
            <div className="header__listItem">
              <HiUser className="list-item_icon" />
              <div className="list-item_content">
                <h3>Find Nearest Best Services</h3>
                <p>Find The Health Care You Need At Your Nearest</p>
              </div>
            </div>
          </div>
          <div className="header__btn">
            <a href="">
              Get Started <FaChevronRight className="icon" />
            </a>
          </div>
        </div>
        <div className="header__right">
          <div className="header_blob">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#D8E9F0"
                d="M43.4,-54C55.8,-50.7,65.2,-37.5,67,-23.7C68.7,-10,62.8,4.2,57,17.5C51.3,30.8,45.7,43,36.3,50.1C26.8,57.2,13.4,59,-2.2,62.1C-17.8,65.1,-35.7,69.4,-46.7,62.8C-57.8,56.3,-62.2,39,-67.3,22.1C-72.4,5.3,-78.2,-11,-73.3,-23.2C-68.5,-35.4,-53,-43.4,-39,-46.3C-25,-49.2,-12.5,-46.8,1.5,-48.9C15.5,-51,30.9,-57.4,43.4,-54Z"
                transform="translate(100 100)"
              />
            </svg>
          </div>
          <div className="doctor_illust">
            <img src="./Assets/illusts/4.svg" className="floating" alt="" />
          </div>
          <div className="illust__container">
            <img
              src="./Assets/illusts/1.svg"
              className="floating small-illust illust-1"
              alt=""
            />
            <img
              src="./Assets/illusts/2.svg"
              className="floating small-illust illust-2"
              alt=""
            />
            <img
              src="./Assets/illusts/3.svg"
              className="floating small-illust illust-3"
              alt=""
            />
            <img
              src="./Assets/illusts/5.svg"
              className="floating small-illust illust-4"
              alt=""
            />
            <img
              src="./Assets/illusts/6.svg"
              className="floating small-illust illust-5"
              alt=""
            />
            <img
              src="./Assets/illusts/7.svg"
              className="floating small-illust illust-6"
              alt=""
            />
            <img
              src="./Assets/illusts/8.svg"
              className="floating small-illust illust-7"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
