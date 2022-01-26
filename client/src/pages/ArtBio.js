import React, { Component} from 'react';
import { Link } from "react-router-dom";

import giki from '../assets/me.JPG';

const ArtBio = () => {
    return (
    <>

    <div className="container">
       <div className="top-cen ">
        <h4 className="title my-3" >Artist Bio</h4>
          <p>
             
          </p>
      </div>
      <div className="float-rightt py-1">
          <div className="py-1">
            <p>Artist's Bio</p>
            
            <p>
                A self taught 
            </p>
          </div>
        </div>
    </div>
    <img src={giki} className=" float-leftt " alt=" Responsive image" /> 
    <div className="container">
    <div className="intro mb-3 py-3 my-3">
        <p className="my-2">
          Munmia Bedford is a Bunuba artist from the Kimberly Western Australia.
      
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