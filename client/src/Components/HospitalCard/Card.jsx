import React from "react";
import "./card.css";
import { IoMdBed } from "react-icons/io";
import { SiOxygen } from "react-icons/si";
import { BsDropletHalf } from "react-icons/bs";
import { HiCheck } from "react-icons/hi";
import { FaSyringe } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md"

const Card = ({ data }) => {
  return (
    <div className="hospital__card">
      <div className="icon">
        <img src={data.avatar} alt={data.name} />
      </div>
      <div className="details">
        <h3>
          <a href={'/' + data._id}>{data.name}</a>
        </h3>
        <p> <MdLocationPin /> {data.address}</p>
        <div className="icon_container">
          <div className="icon_group" title="Availability of Beds">
            <IoMdBed className="icon" />
            <span>{data.beds}</span>
          </div>

          {data.blood.map((b, i) => (
            <div key={i} className="icon_group" title="Availability of Blood">
              <BsDropletHalf className="icon" />
              <span>{b}</span>
            </div>
          ))}

          <div className="icon_group" title="Availability of Oxygen Cylinders">
            <SiOxygen className="icon" />
            {data.oxygen ? (
              <HiCheck style={{ color: "green" }} className="icon" />
            ) : (
              <IoClose style={{ color: "red" }} className="icon" />
            )}
          </div>

          {data.tests.map((test, i) => (
            <div key={i}
              className="icon_group"
              title="Availability of Free Medical Tests"
            >
              <FaSyringe className="icon" />
              <span>{test}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
