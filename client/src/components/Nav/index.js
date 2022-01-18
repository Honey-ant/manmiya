import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logoM.png';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="px-1">
           <li className="flex-end space-between my-2">
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
        <ul className="flex-end space-between px-1">
          <li className="my-1">
            <Link to="/about">About</Link>
          </li>
          <li className="my-1">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="my-1">
            <Link to="/signup">Signup</Link>
          </li>
          <li className="my-1">
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
    <header className="navbar flex-row px-2">
      <div className="title">
      <h1 className="man">
          <Link className="title flex-end" to="/">
            {/* <img src={Logo}  alt="React App Logo" className=" logo"/> */}
            Manmiya
          </Link>
        </h1>
      </div>
      <nav className="container">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
