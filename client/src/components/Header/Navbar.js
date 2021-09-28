import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import HomeIcon from '@mui/icons-material/Home';
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light text-light"  style={{"backgroundColor": "black"}}>
        <div className="container-fluid">
          <a className="navbar-brand text-light bg-primary" style={{"borderRadius":"3px", "padding":"4px"}} href="#">Buynow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-4 mb-lg-0">
             
              <li className="nav-item">
                <a href="#Home" className="nav-link active text-primary"><HomeIcon className="text-primary" style={{"margin-left":'30px'}}/></a>
              </li>

              <li className="nav-item">
                <a href="#cart" className="nav-link active text-primary"><ShoppingCartIcon className="text-primary" style={{"margin-left":'30px'}}/></a>
              </li>

              <li className="nav-item">
                <a href="#signIn" className="nav-link active text-primary"><LoginIcon className="text-primary" style={{"margin-left":'30px'}}/></a>
              </li>
            
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" style={{"width":"1000px", "text-align": "center"}} type="search" placeholder="Search" aria-label="Search" />
              <button type="button" className="btn btn-outline-primary" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
