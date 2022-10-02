import React, { useState } from "react";
import '../Login/login.css'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if(data.status === 'ok') {
      window.location.href = '/login-user'
      // history.pushState('/login')
    }
  };
  return (
    <div className="register__form">
      <h1>Register Now</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="text">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Anshika Gautam" />
        </div>
        
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="anshika@email.com" />
        </div>

        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit_btn">Register</button>
        <div className="bottom">Already have an account? <a href="/login-user">Log In</a></div>
      </form>
    </div>
  )
};

export default Register;
