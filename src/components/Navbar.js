import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar(props) {
  let nav = useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('token')
    props.showAlert("Logout Successfully","success")
    nav('/login')
  }  
  let location =useLocation()
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark   bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">iNOTEbook</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">About</Link>
        
        </li>
        </ul>
      </div>
        {!localStorage.getItem('token')?<form className="form-inline">
    <Link  role="button" className="btn btn-primary mx-1" to="/login">Login </Link>
    <Link  role="button" className="btn btn-primary mx-1" to="/signup">SignUp </Link>
  </form> :<button className="btn btn-primary"onClick={handleLogout}>Logout</button>}
  </div>
</nav>    
    
  )
}
