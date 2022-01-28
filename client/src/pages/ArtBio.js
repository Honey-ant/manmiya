import React, { Component} from 'react';
import { Link } from "react-router-dom";

import giki from '../assets/me.JPG';

const ArtBio = () => {
    return (
    <>

    <div className="container">
       <div className="top-cen ">
        
          <p>
             
          </p>
      </div>
      <h4 className="title " >Artist Bio</h4>
      <div className="float-rightt ">
          <div className="border">
           
            <p>
                A self taught artist emerging. They are a visual artist 
                primarily working with acrylic paints and oils. 
                Their art is an expression of their inner most thoughts, 
                healing and emotional processing. 
                Many of their works come to life quickly as the urge takes hold
                to create, to express.
                Their style is a mixture of their own Cultural Idenity as a Bunuba Woman,
                intertwined with all the complexities of living in the colony.
            </p>
          </div>
        </div>
    </div>
    <img src={giki} className=" float-leftt " alt=" Responsive image" /> 
    <div className="container">
    <div className=" mb-3 py-3 my-3">
        <p className="my-2">
      
        </p>
        <p className="">
          They currently live on Boon Wurrong land
        </p>
        <p>
          Read about them <Link to="/about">here</Link>
        </p>
      </div>
      <Link className="my-3" to="/">← Back to main page</Link>
    </div>
    </>
    );
};

export default ArtBio;