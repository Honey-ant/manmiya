import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="dropdown ">
        <button className="btn btn-clear dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        
        </button>
        <ul className=" dropdown-menu " aria-labelledby="dropdownMenuButton1">
           <li className="dropdown-item ">
            <Link to="/about">About</Link>
          </li>
          <li className="dropdown-item">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="my-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="my-1">
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
        </div>
      );
    } else {

      return (
        <div className="dropdown ">
          <button className="btn btn-clear dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            
          </button>
          <ul className=" dropdown-menu " aria-labelledby="dropdownMenuButton1">
            <li className="dropdown-item">
              <Link to="/about">About</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/contact">Contact</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/signup">Signup</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/login">Login</Link>
            </li>

          </ul>
        </div>
      );
    }
  }

  return (

    <header className="sticky-top navbar d-flex justify-content-between ">
             <div className=" container-fluid banner ">
                <p className="banner">
                    Purchasing will be available soon.
                </p>
            </div>
            
      <nav className=" mx-2">{showNavigation()}</nav>      
      <div className="d-flex justify-content-center text-center mx-2">
      <h6 className="col mx-2">
          <Link className="title col text-center mx-2" to="/">
            
            Manmiya
             {/* <img src={Logo}  alt="React App Logo" className=" logo"/> */}
          </Link>
        </h6>
      </div>
      
    </header>
  );
}

export default Nav;
