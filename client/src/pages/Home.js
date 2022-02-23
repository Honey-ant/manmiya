import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import PrintList from "../components/PrintList";
import CategoryMenu from "../components/CategoryMenu";
import Cover from "../components/Cover";
import Cart from "../components/Cart";

import giki from '../assets/mee.jpg';
import breathe from '../assets/breathe.jpg'; 
import dad from '../assets/dad.jpg';

import graphic from '../assets/graphic1.png';
import graphic4 from '../assets/graphic4.png';

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

            <div className="ack ">
              <img src={dad} className="pro img   " alt="Card image cap  " />   
              <p className="mx-4 my-3">
                I acknowledge that I live and create on the Stolen land of the Boon Wurrong people,
                who's sovereignty has never been seeded. I pay my respects to the Elders past and present, 
                (not emerging, we'll have our time). 
                </p>
                <p  className="mx-4 my-3">
                I also acknowledge by white mans law that this not a country, 
                but an invaded land, as there is no treaty between settlers and First Nations Peoples.
                </p>
                <p className="mx-4 my-3">
                <b>
                  Do you know who's Country you're on?
                  
                </b>
              </p>
            </div>
            <img src={graphic} className="  " alt="Card image cap  " /> 
          <h4 className="">
            Browse through Prints and Originals 
          </h4>
</div>
        </div>
    </div>    
    <div className="container">
        {/* <CategoryMenu /> */}
        {/* <PrintList /> */}
        <ProductList />
        <Cart />
    </div>  
      
  
    </>
  );
};

export default Home;
