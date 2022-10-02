import React from 'react'
import './navbar.css'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
        <img src="./Assets/logo-cropped.png" alt="" className='logo'/>
        <ul className="nav__list">
            <li><a href="/">Home</a></li>
            <li><a href='/contact'>Contact</a></li>
            <li>Log in
            <div className='dropdown_container'>
              <ul className='dropdown login_dropdown'>
                <li><a href="/login-user">User</a></li>
                <li><a href="/login-hospital">Hospital</a></li>
              </ul>
            </div>
            </li>
            <li className='register_btn'>Sign Up
            <div className='dropdown_container'>
              <ul className='dropdown'>
                <li><a href="/register-user">User</a></li>
                <li><a href="/register-hospital">Hospital</a></li>
              </ul>
            </div>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar