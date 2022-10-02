import React, { useState } from "react";
import "../Login/login.css";
import { ToggleSwitch } from "../../Components";

const RegisterHospital = () => {
  // const history = useHistory()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin, setAdmin] = useState("");
  const [address, setAddress] = useState("");
  const [avatar, setAvatar] = useState("");
  const [oxygen, setOxygen] = useState(false);
  const [beds, setBeds] = useState(0);
  const [blood, setBlood] = useState([]);
  const [tests, setTests] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      "/api/register-hospital",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          admin,
          address,
          email,
          password,
          avatar,
          blood,
          oxygen,
          tests,
          beds
        }),
      }
    );

    const data = await response.json();
    if (data.status === "ok") {
      window.location.href = "/login-hospital";
      // history.pushState('/login')
    }
  };

  const handleBlood = (event) => {
    const str = event.target.value;
    const arr = str.split(",");
    setBlood(arr);
    console.log(blood);
  };
  const handleTests = (event) => {
    const str = event.target.value;
    const arr = str.split(",");
    setTests(arr);
    console.log(tests);
  };
  return (
    <div className="register__form">
      <h1>Register Now</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="text">Hospital Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Max Hospital"
          />
        </div>
        <div className="form_group">
          <label htmlFor="text">Hospital Avatar/Logo</label>
          <input
            type="text"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="Enter Link of Image"
          />
        </div>

        <div className="form_group">
          <label htmlFor="text">Admin Name</label>
          <input
            type="text"
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            placeholder="Anshika Gautam"
          />
        </div>

        <div className="form_group">
          <label htmlFor="text">Number of Beds Available</label>
          <input
            type="text"
            value={beds}
            onChange={(e) => setBeds(e.target.value)}
            placeholder="123"
          />
        </div>

        <div className="form_group">
          <label htmlFor="text">Blood Groups Available for Donation</label>
          <input
            type="text"
            value={blood}
            onChange={handleBlood}
            placeholder="Enter groups separated by ','"
          />
        </div>

        <div className="form_group">
          <label htmlFor="text">Free Medical Tests</label>
          <input
            type="text"
            value={tests}
            onChange={handleTests}
            placeholder="Enter groups separated by ','"
          />
        </div>

        <div className="form_group oxygen">
          <label htmlFor="text">Availablity of Oxygen Cylinder</label>
          <ToggleSwitch value={oxygen} setValue = {setOxygen} name="oxygen"/>
        </div>

        <div className="form_group">
          <label htmlFor="email">Hospital Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="max@email.com"
          />
        </div>
        <div className="form_group">
          <label htmlFor="text">Hospital Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Delhi, India"
          />
        </div>

        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit_btn">
          Register
        </button>
        <div className="bottom">
          Already have an account? <a href="/login-hospital">Log In</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterHospital;
