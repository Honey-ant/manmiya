import React, { Component} from 'react';
import { Link } from "react-router-dom";

import giki from '../assets/me.JPG';

const ArtBio = () => {
    return (
    <>       
        <div className=" start">          
          <h5 className="py-1  white animate-charcter container" id="">Artist Bio</h5>   
        </div>  
    <img src={giki} className=" rounded img-fluid  pro top" alt=" Responsive image" /> 

      <div className="d-md-flex flex-md-equal w-100  my-md-2 ps-md-2">
        <div className="col-md-6 myt-2" >
                                  
          <p className=" container">
          A self taught artist working with acrylic paints and oils. 
            Their art is an expression of their inner most thoughts, 
            healing and emotional processing. 
            Many of their works come to life quickly, as the urge takes hold
            to create, to express, to alleviate.
          </p>
      
        </div>
            <div className="col-md-6 " >   

              <div className="container ">
                <p>
                  Their style is a mixture of inspriation of their own Cultural Idenity as a Bunuba Woman, 
                  that coming from all the deadly artists at <a href="http://www.mangkaja.com/" className="pink" target="_blank">Mangkaja</a> (art center from Fitzroy Crossing), and
                  intertwined with all the complexities of living in this modern colony.
                </p>
                <p className="">
                  Read more about them <Link className="pink" to="/about">here</Link>
                </p>
              </div>

            </div>    
      </div> 
    </>
    );
};

export default ArtBio;