import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/mee.jpg';
import crown from '../../assets/crown.png';

export const Cover = () => {
   
    return (
        <>
        <div className="cover">
            <br></br>
          
            <div className="container ">
                <div className="start my-1">
                    <img src={crown} className="rounded crown" alt=" Responsive image" />
                    <h4 className="title bedford">Manmiya Bedford</h4>
                    <p className="my-3 py-1">
                        Visual Artist || Software Developer || Bunuba Wiyi
                    </p>
                </div>

                <div className="float-right px-3 py-3 ">
                    <div className="">

                        <Link className="my-2 py-2" to="/artbio">Artist Bio</Link>
                        <hr></hr>

                        <Link className=" py-2" to="/about">About Artist</Link>
                        <hr></hr>

                        <Link className=" " to="/about">Exhibtions</Link>
                        <hr></hr>

                        <Link className=" " to="/contact">Contact</Link>
                        <hr></hr>

                    </div>
                </div>
            </div>
            <img src={giki} className="rounded float-left " alt=" Responsive image" />
             
            <div className="container">
               <br></br>
               <br></br>
               <br></br>
               
                <p className="">
                    Manmiya Bedford is a Bunuba artist from the Kimberly Western Australia.
                    They currently live on Boon Wurrong Country.
                </p>
                <hr></hr>
            </div>

        </div>
        
        </> 
    
    );
}

export default Cover;