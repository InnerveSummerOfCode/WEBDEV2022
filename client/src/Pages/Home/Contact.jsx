import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:1337/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name, email, message
      })
    })

    const data = await response.json();
    console.log(data)
  }

  return (
    <div className="contact" id="contact">
      <div className="contact__left">
        <img src="/Assets/doctor.webp" alt="" />
      </div>
      <div className="contact__right">
        <h3>Contact Us</h3>
        <form action="" onSubmit={handleSubmit}>
          <div className="form_group">
            <label htmlFor="text">Name</label>
            <input type="text" name="" id="" />
          </div>

          <div className="form_group">
            <label htmlFor="email">Email</label>
            <input type="email" name="" id="" />
          </div>

          <div className="form_group">
            <label htmlFor="text">Message</label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
          </div>

          <button type="submit" className="submit_btn">
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
