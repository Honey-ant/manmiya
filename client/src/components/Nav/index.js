import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="dropdown ">
        <button className="  " type="button"
         id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-body-text bt inset"></i>
        </button>
        <ul className=" dropdown-menu shade" aria-labelledby="dropdownMenuButton1">
        <li className="dropdown-item">
              <Link to="/">Home</Link>
            </li>
        <li className="dropdown-item">
              <Link to="/artbio">Artist Bio</Link>
            </li>
           <li className="dropdown-item ">
            <Link to="/about">About</Link>
          </li>
          <li className="dropdown-item ">
            <Link to="/exhibtions">Exhibtions</Link>
          </li>
          <li className="dropdown-item ">
            <Link to="/productList">Shop</Link>
          </li>
          <li className="dropdown-item ">
            <Link to="/blakfacts">BlakFacts</Link>
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
          <button className="   white" type="button" 
          id="dropdownMenuButton1" data-bs-toggle="dropdown" 
          aria-expanded="false">
            <i className="bi bi-body-text  bt inset"></i>
          </button>
          <ul className=" dropdown-menu shade" aria-labelledby="dropdownMenuButton1">
          <li className="dropdown-item">
              <Link to="/">Home</Link>
            </li>
          <li className="dropdown-item">
              <Link to="/artbio">Artist Bio</Link>
            </li>
            <li className="dropdown-item">
              <Link to="/about">About</Link>
            </li>
            <li className="dropdown-item ">
            <Link to="/exhibtions">Exhibtions</Link>
          </li>
          <li className="dropdown-item ">
            <Link to="/productList">Shop</Link>
          </li>
          <li className="dropdown-item ">
            <Link to="/blakfacts">BlakFacts</Link>
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
    <header className="sticky-top   py-3">

       <div className=" container-fluid banner ">
           <p className="banner">
              Purchasing will be available soon.
            </p>
        </div>  
      <div className="navbar">
        <nav className="myt-2 " >{showNavigation()}</nav>   

          {/* <div className="title ">     
            <Link className="  " to="/">  
              <h1 className="mb myt-2 ">
                  Manmiya     
              </h1> 
            </Link>           
        </div> */}
      </div>
    </header>
  );
}

export default Nav;
