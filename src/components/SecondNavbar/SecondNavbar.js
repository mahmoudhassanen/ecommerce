import React from 'react'
import './SeconNavbar.css'
import { Link } from 'react-router-dom'

function SecondNavbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg  navbar-light bg-transparent mt-1">
  <div className="container-fluid">
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item me-5">
          <Link className="nav-link  " aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link" to="shopall">Shop All</Link>
        </li>
        <li className="nav-item me-5" >
          <Link className="nav-link" to="ourstory">Our Story</Link>
        </li>
        <li className="nav-item me-5">
          <Link className="nav-link" to="contact">Contact</Link>
        </li>
      
      
      </ul>
      
    </div>
  </div>
</nav>

    </div>
  )
}

export default SecondNavbar