import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { HospitalCard } from "../../Components";
// import { useHistory } from "react-router-dom"

import "./dash.css";

const UserDash = () => {
  const [allHospitals, setAllHospitals] = useState([]);

  const populateData = async () => {
    const request = await fetch("/api/all-hospitals", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await request.json();
    if (data.status === "ok") {
      setAllHospitals(data.hospitals);
      console.log('data', allHospitals);
    } else console.log(data.error);


  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        populateData();
      }
    }
  }, []);


  return (
    <div className="user__dashboard">
      {/* <h1>Your quote: {quote || "No quote found"}</h1> */}
      <h1>All Available Hospitals</h1>
      {
        allHospitals.map((item, idx) => (
          <HospitalCard key={idx} data={item}/>
        ))
      }
    </div>
  );
};

export default UserDash;
