import React from "react";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import giki from '../assets/mee.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      
    <div className="container start">
      <div className="top-cen ">
        <h4 className="title my-3" >Visual Artist</h4>
          <p>
              
          </p>
      </div>
      <div className="float-right py-1">
          <div className="title py-1">
              <Link className="title " to="/about">Artist Bio</Link>
          </div>    
         <hr></hr>
        <div className="title py-1">
            <Link className="title " to="/about">About Artist</Link>
         </div>
         <hr></hr>
      <div className="title py-1">      
          <Link className="title "  to="/about">Exhibtions</Link>
      </div>
    <hr></hr>
      <div className=" py-1">
            <Link className="title " to="/contact">Contact</Link>
            {/* <p>
              Fill out the form provided, or Email
            </p> */}
         </div>
         <hr></hr>
      </div>
    
    </div>
     <img src={giki} className="rounded float-left " alt=" Responsive image" /> 
     
    <div className="container my-3 py-4">
       <hr></hr> 
      <div className="intro mb-3 py-3 my-3">
        <p className="my-2">
          Munmia Bedford is a Bunuba artist from the Kimberly Western Australia.
      
        </p>
        <p className="">
          They currently live on Boon Wurrong land
        </p>
        <p>
          Read about them <Link to="/about">here</Link>
        </p>
      </div>
      <CategoryMenu />
      <ProductList />
      <Cart />
      
    </div>
    {/* <Footer /> */}
    </>
  );
};

export default Home;
