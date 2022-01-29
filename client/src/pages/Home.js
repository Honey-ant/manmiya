import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cover from "../components/Cover";
import Cart from "../components/Cart";

import giki from '../assets/mee.jpg';
import crown from '../assets/crown.png';


const Home = () => {
  return (
    <>
      
     <Cover/>
    <div className="container my-3 py-2">
      <br></br>
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
