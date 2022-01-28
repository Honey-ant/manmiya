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
                A self taught artist. They work 
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