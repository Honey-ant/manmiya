import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoM.png';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="">
           <li className="flex-end ">
            <Link to="/about">About</Link>
          </li>
          <li className="my-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="my-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="my-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row space-between">
          <li className="">
            <Link to="/about">About</Link>
          </li>
          <li className="">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="">
            <Link to="/login">Login</Link>
          </li>
          {/* <li className="my-1">
            <Link to="/checkout">Checkout</Link>
          </li> */}
        </ul>
        
      );
    }
  }

  return (
    <header className="navbar flex-row ">
      <div className="">
      <h4 >
          <Link className="title flex-row" to="/">
            {/* <img src={Logo}  alt="React App Logo" className=" logo"/> */}
            Manmiya
          </Link>
        </h4>
      </div>
      <nav className="container">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
