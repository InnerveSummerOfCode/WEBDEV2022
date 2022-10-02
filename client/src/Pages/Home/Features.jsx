import React from "react";
import { FeaturesCard } from "../../Components";
import { FaBed } from "react-icons/fa"
import { MdBloodtype } from "react-icons/md"

const Features = () => {
  return (
    <div className="features">
      <div className="features__head">
        <h1 className="features__title">What We Offer</h1>
        <h4>Here Are Some Of Our Best Services</h4>
      </div>
      <div className="features__cardContainer">
        <FeaturesCard icon = "/Assets/bed.png" heading = "Beds" subHeading = "Availability of Beds" />
        <FeaturesCard icon = "/Assets/blood.webp" heading = "Blood" subHeading = "Availability of Blood" />
        <FeaturesCard icon = "/Assets/oxygen.png" heading = "Oxygen" subHeading = "Availability of Oxygen Cylinders" />
        <FeaturesCard icon = "/Assets/tests.png" heading = "Medical Tests" subHeading = "Best &amp; Accurate Medical Tests" />
        <FeaturesCard icon = "/Assets/medicines.webp" heading = "Medicines" subHeading = "Medicines from Best Dispensaries" />
      </div>
    </div>
  );
};

export default Features;
