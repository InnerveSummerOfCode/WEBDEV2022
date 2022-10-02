import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";

const HospitalDash = () => {
  const [hospitalData, setHospitalData] = useState({});

  const populateData = async (user) => {
    const req = await fetch("/api/details", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
      },
    });

    const data = await req.json()
		if (data.status === 'ok') {
			setHospitalData(data.data)
      console.log(hospitalData);
		} else {
			console.log(data.error)
		}
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        window.location.href = "/login";
      } else {
        populateData(user);
        console.log(user);
      }
    }
  }, []);
  return (
    <div className="hospital__dashboard">
      <h1>{} Details</h1>
    </div>
  );
};

export default HospitalDash;
