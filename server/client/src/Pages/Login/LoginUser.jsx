import React, { useState } from "react";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:1337/api/login-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = await response.json()
    console.log(data);
    if(data.user) {
      localStorage.setItem('token', data.user)
      alert('Login Successful')
      window.location.href = '/user-dash'
    } else {
      alert('Please check your username and password')
    }
    // console.log(data);
  }
  return (
    <div className="login__form">
      <h1>Log In</h1>
      <form action="" onSubmit={handleSubmit}>
        <div className="form_group">
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="abc@email.com" />
        </div>

        <div className="form_group">
          <label htmlFor="password">Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <button type="submit" className="submit_btn">Log In</button>
        <div className="bottom">Don't have an account? <a href="/register-user">Sign Up</a></div>
      </form>
    </div>
  );
};

export default Login;
