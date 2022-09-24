import React from "react";
import { Link } from 'react-router-dom';

import ProductList from "../components/ProductList";
import PrintList from "../components/PrintList";
import CategoryMenu from "../components/CategoryMenu";
import Cover from "../components/Cover";
import Slides from "../components/Carousel";
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
          {/* <div className="">

            <div className="from rounded from py-1 pro my-1">
                <p className="container">
                  Manmiya is a Bunuba artist from Fitzroy Crossing, the Kimberly, Western Australia.
                </p>
            </div>
        </div>  */}

        <div className="py-1 ">
          <hr className="container"></hr>
            <div className="container py-1">
                <p className="">
                  <u>Ng</u>ayini in<u>ng</u>i manyanji Manmiya Bunuba Thangani Miliuwindi Muwayi Wiyi.
                   </p>
                   <p>
                    <u>Ng</u>ayini manjalima nyunba wamba<u>l</u>a <u>ng</u>utharra .
                  </p>
                  <p  className=" ">
                    My name is Manmiya, I am a Bunuba Language group Miluwindi clan Woman.
                    I create paintings slowly and quickly, depending on my feelings.
                  </p>
                  <p className="">
                  {/* <b>
                    Do you know who's Country you're on?              
                  </b> */}
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
