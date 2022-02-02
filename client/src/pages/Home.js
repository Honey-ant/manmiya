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
    <div className="top">
      <br></br>
     <br></br>
      <div className="container my-3 py-2 ">
        
        <div className="py-2 my-2">
            <p className="">
              Manmiya Bedford is a Bunuba artist from the Kimberly Western Australia.
              They currently live on Boon Wurrong Country.
            </p>
          <h4 className="">
            Browse through Prints and Originals 
          </h4>
</div>
        </div>
    </div>    
    <div className="container">
        <CategoryMenu />
        <ProductList />
        <Cart />
    </div>  
      
  
    </>
  );
};

export default Home;
