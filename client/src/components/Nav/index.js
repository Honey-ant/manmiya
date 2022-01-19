import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="dropdown dropstart">
        <button className="btn btn-clear dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          |||
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
        <div className="dropdown dropstart">
          <button className="btn btn-clear dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            +
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

    <header className="sticky-top navbar  ">
             <div className=" container-fluid banner container">
                <p className="">
                    Purchasing will be available soon.
                </p>
            </div>
      <div className="center container">
        
      <h4 >
          <Link className="title " to="/">
            <img src={Logo}  alt="React App Logo" className=" logo"/>
            Manmiya
             
          </Link>
        </h4>
      </div>
      <nav className=" ">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
