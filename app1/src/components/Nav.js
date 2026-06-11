import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
<>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/contact">Contact</Link>
      </li>

      <li className="nav-item">
        <Link className="nav-link" to="/props">Props</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/events">Events</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/list">List</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/forms">Forms</Link>
      </li>
       <li className="nav-item">
        <Link className="nav-link" to="/forms2">Form2</Link>
      </li>
      
    </ul>
  </div>
</nav>




</>
  )
}
