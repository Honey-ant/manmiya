import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Logo from '../../assets/home.png';

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <div className="dropdown shade">
        <button className="btn  dropdown-toggle button-74 shade white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="bi bi-box"></i>
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
          <button className="button-74 shade white   " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="bi bi-box   "></i>
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
    <header className="sticky-top navbar  ">

       <div className=" container-fluid banner ">
           <p className="banner">
              Purchasing will be available soon.
            </p>
        </div>  

      <nav className=" " >{showNavigation()}</nav>   

        <div className="title ">     
          <Link className=" gt " to="/">  
            <h5 className="mb myt-2 animate-charcter">
                Manmiya Bedford     
            </h5> 
          </Link>           
      </div>

    </header>
  );
}

export default Nav;
