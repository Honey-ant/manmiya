import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import PrintList from "../components/PrintList";
import CategoryMenu from "../components/CategoryMenu";
import Cover from "../components/Cover";
import Cart from "../components/Cart";

import InjectedCheckoutForm from "./CheckoutForm";

import giki from '../assets/mee.jpg';

import dad from '../assets/dad.jpg';


const Home = () => {
  return (
    <>  
     <Cover/>
    <div className=" ">
 

     
    </div>
          <div className="">
        {/* <div className=""> */}
            <div className=" container rounded from py-1">
                <p className="">
                  Manmiya is a Bunuba artist from the Kimberly Western Australia.
                  They currently live on Boon Wurrong Country.
                </p>
                <p className="">
                  Their Father is Bunuba and mother is of Scottish ancestry.
                </p>
            </div>
        </div> 
    
        <div className="py-1 ">
          <hr className="container"></hr>
            <div className="container py-1">
                <p className="">
                  I acknowledge that I live and create on the Stolen land of the Boon Wurrong people,
                  who's sovereignty has never been seeded. I pay my respects to the Elders past and present, 
                  (not emerging, we'll have our time). 
                  </p>
                  <p  className=" ">
                  I also acknowledge by white mans law that this not a country, 
                  but an invaded land, as there is no treaty between settlers and First Nations Peoples.
                  </p>
                  <p className="">
                  <b>
                    Do you know who's Country you're on?              
                  </b>
                </p>
            </div>    
        </div>
      <hr className="container"></hr>  
    <div className="container">
      
    </div>  
     {/* <InjectedCheckoutForm /> */}
       <ProductList />
    
    </>
  );
};

export default Home;
