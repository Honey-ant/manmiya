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
import graphic6 from '../assets/spiral.png';

const Home = () => {
  return (
    <>  
     <Cover/>
    <div className="top">
      <br></br>
     <br></br>
     {/* <img src={graphic6} className="gra   " alt="Card image cap  " />  */}
      <div className="container my-3  ">
      
        <div className="py-4 my-2">
           {/* <img src={breathe} className="col-md-5 " alt="  " />  */}
          <hr></hr>
          <br></br>
         
          <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
              <p className="col-md-7">
                Manmiya Bedford is a Bunuba artist from the Kimberly Western Australia.
                They currently live on Boon Wurrong Country.
              </p>
              <p className="col-md-5">
                Their Father is Bunuba and her mother is settler Australian of Scottish descent.
              </p>
            </div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">

            </div>
            <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
              <img src={dad} className="col-md-5 " alt="  " /> 


            </div>  
            

</div>
        </div> 
    </div>
    <hr className="container"></hr>
        <div className="box py-2 ">
            <div className="container">
                <p className="my-3 py-2">
                  I acknowledge that I live and create on the Stolen land of the Boon Wurrong people,
                  who's sovereignty has never been seeded. I pay my respects to the Elders past and present, 
                  (not emerging, we'll have our time). 
                  </p>
                  <p  className=" my-3">
                  I also acknowledge by white mans law that this not a country, 
                  but an invaded land, as there is no treaty between settlers and First Nations Peoples.
                  </p>
                  <p className=" my-3">
                  <b>
                    Do you know who's Country you're on?              
                  </b>
                </p>
            </div>    
        </div>
      <hr className="container"></hr>  
    <div className="container">
                     <img src={graphic} className=" col-md-1 " alt="Card image cap  " /> 
       
    </div>  
       <ProductList />
  
    </>
  );
};

export default Home;
