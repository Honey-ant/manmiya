import React, { Component} from 'react';
import { Link } from "react-router-dom";

import giki from '../assets/me.JPG';

const ArtBio = () => {
    return (
    <>       
        <div className=" start">          
          <h5 className="py-1  titles " id="">Artist Bio</h5>   
        </div>  
    <img src={giki} className=" rounded  ful pro " alt=" Responsive image" /> 
      {/*d-md-flex flex-md-equal w-100  my-md-2 ps-md-2   */}
      <div className="container  bio ">

        <div className="py-1 " >
                                  
          <p className=" ">
          A self taught artist working with acrylic paints and oils. 
            Their art is an expression of their inner most thoughts, 
            healing and emotional processing. 
            Many of their works come to life quickly, as the urge takes hold
            to create, to express, to alleviate.
          </p>
              <p className="">
                  Their style is a mixture of inspriation of their own Cultural Idenity as a Bunuba Woman, 
                  that coming from all the deadly artists at <a href="http://www.mangkaja.com/" 
                  className="pink" target="_blank">
                    Mangkaja
                  </a> (art center from Fitzroy Crossing), and
                  intertwined with all the complexities of living in this modern colony.
              </p>
              <p className="">
                  Read more about them <Link className="pink" to="/about">here</Link>
              </p>

        </div>

      </div> 
    </>
    );
};

export default ArtBio;