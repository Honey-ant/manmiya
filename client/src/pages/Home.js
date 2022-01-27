import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";

import giki from '../assets/mee.jpg';
import crown from '../assets/crown.png';


const Home = () => {
  return (
    <>
      
    <div className="container ">
      <div className="start my-1">
      <img src={crown} className="rounded crown" alt=" Responsive image" /> 
        <h4 className="title " >Manmiya Bedford</h4>
          <p className="my-3">
              Visual Artist || Software Developer || Bunuba Wiyi
          </p>
      </div>
      <div className="float-right px-3">
          <div className=" ">
              <Link className="my-2 py-2" to="/artbio">Artist Bio</Link>
             <hr></hr> 
          </div>    
        <div className=" ">
            <Link className=" py-2" to="/about">About Artist</Link>
            <hr></hr>
         </div>    
      <div className="">      
          <Link className=" "  to="/about">Exhibtions</Link>
          <hr></hr>
      </div> 
      <div className=" ">
          <Link className=" " to="/contact">Contact</Link>
          <hr></hr>
      </div>   
      </div> 
      
    </div>
    
     <img src={giki} className="rounded float-left " alt=" Responsive image" /> 
     
    <div className="container my-3 py-2">
      <br></br>
      <div className=" mb-3 py-3 my-3">
        <p className="my-2">
          Manmiy  a Bedford is a Bunuba artist from the Kimberly Western Australia.
      
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
