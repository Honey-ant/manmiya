import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/mee.jpg';
import crown from '../../assets/crown.png';
import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/hill.png';
import graphic6 from '../../assets/spiral.png';

export const Cover = () => {
   
    return (
        <>
        <div className="bottom">
            {/* <br></br> */}
          
            <div className="container ">
                <div className="start my-1">
                <img src={graphic} className="graphic" alt=" Responsive image" />
                {/* <img src={graphic5} className="graph" alt=" Responsive image" /> */}
                    <p className="my-3  ">
                        Visual Artist || Bunuba Wiyi 
                    </p>
                   
                </div>

                <div className="float-right px-2 py-2 ">
                    <div className="">
                <b>
                    <div className="shade ">
                        <Link className="px-1 " to="/artbio">Artist Bio</Link>
                        <hr></hr>
                    </div>
                    <div className="shade ">
                        <Link className=" px-1" to="/about">About Artist</Link>
                        <hr></hr>
                    </div>
                    <div className="shade ">
                        <Link className=" px-1" to="/exhibtions">Exhibtions</Link>
                        <hr></hr>
                    </div>
                    <div className="shade ">
                        <Link className="px-1 " to="/productList">Shop</Link>
                        <hr></hr>
                    </div>
                    <div className="shade ">
                        <Link className=" px-1" to="/contact">Contact</Link>
                        <hr></hr>
                    </div>    
                </b>
                    </div>
                </div>
            </div>
  
            <img src={giki} className="rounded img-fluid float-left " alt=" Responsive image" />
            {/* <img src={graphic6} className="gra   " alt=" " />  */}
            <br></br>
        </div>
        
        </> 
    
    );
}

export default Cover;