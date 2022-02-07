import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cover from "../components/Cover";
import Cart from "../components/Cart";

import giki from '../assets/mee.jpg';
import breathe from '../assets/breathe.jpg'; 
import dad from '../assets/dad.jpg';

const Home = () => {
  return (
    <>  
     <Cover/>
    <div className="top">
      <br></br>
     <br></br>
      <div className="container my-3  ">
        
        <div className=" my-2">
            <p className="">
              Manmiya Bedford is a Bunuba artist from the Kimberly Western Australia.
              They currently live on Boon Wurrong Country.
            </p>

            <div className="">
            <img src={dad} className="pro img float-left  " alt="Card image cap  " />   
            <p className="my-3">
              I acknowledge that I live and create on the Stolen land of the Boon Wurrong people,
              who's sovereignty has never been seeded. I pay my respects to the Elders past and present, 
              (not emerging, we'll have our time). 
              </p>
              <p>
              I also acknowledge by white mans law that this not a country, 
              but an invaded land, as there is no treaty between settlers and First Nations Peoples.
            </p>
            </div>

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
