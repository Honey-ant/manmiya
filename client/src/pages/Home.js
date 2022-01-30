import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cover from "../components/Cover";
import Cart from "../components/Cart";

import giki from '../assets/mee.jpg';
import breathe from '../assets/breathe.jpg'; 


const Home = () => {
  return (
    <>
      
     <Cover/>
     <img src={breathe} className="rounded  " alt=" Responsive image" />
    <div className="container my-3 py-2">
      
      <div className=" mb-3 py-3 my-3">
        <p className="my-2">
          Manmiya Bedford is a Bunuba artist from the Kimberly Western Australia.
      
        </p>
        <h4 className="">
          Browse through the Prints and Originals 
        </h4>

      </div>
      
      <CategoryMenu />
      <ProductList />
      <Cart />
      
    </div>
  
    </>
  );
};

export default Home;
