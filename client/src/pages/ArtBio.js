import React, { Component} from 'react';
import { Link } from "react-router-dom";

import giki from '../assets/me.JPG';

const ArtBio = () => {
    return (
    <>
    <div className="bottom-right">
      <div className="container">
        <div className="top-cen ">
            <p>
              
            </p>
        </div>
        
        <div className="float-rightt overflow-auto">

          <div className="boxx px-3">
            <h4 className="title bio pink" >Artist Bio</h4>
            <div className="mx-3 my-3">
                <p>
                    A self taught emerging artist . They are a visual artist 
                    primarily working with acrylic paints and oils. 
                </p>
                <p>
                    Their art is an expression of their inner most thoughts, 
                    healing and emotional processing. 
                    Many of their works come to life quickly, as the urge takes hold
                    to create, to express, to alleviate.
                </p>
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
          {/* <Link className="my-3 white" to="/">← Back to main page</Link> */}
      </div>
      <img src={giki} className="   " alt=" Responsive image" /> 
      <div className="container">
      <div className="">
  

        </div>
        
      </div>
    </div>
    </>
    );
};

export default ArtBio;