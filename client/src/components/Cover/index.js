import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/paintingGaruwa.PNG';
import love from '../../assets/paintingLove.PNG';

import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/break.png';


export const Cover = () => {
   
    return (
        <>
       
            {/* <br></br> */}
          
            <div className="container ">
                <div className="start  rounded">
               
                
                    <h6 className="  white animate-charcter">
                        Visual Artist || Bunuba Wiyi 
                    </h6>
                   
                </div>

                <div className="float-right  ">
                    <div className="mx-1">
                        <b>
                            <div className="my-3 mx-1">
                                <div className="shade rounded  button-74 ">
                                    <Link className=" animate-charcter " to="/artbio">Artist Bio</Link>
                                </div>
                            </div>
                            <div className="my-3 mx-1">
                                <div className="shade rounded button-74 ">
                                    <Link className=" animate-charcter " to="/about">About </Link>                            
                                </div>
                            </div>    
                            <div className="my-3 mx-1">
                                <div className="shade rounded   button-74 ">
                                    <Link className=" animate-charcter  " to="/exhibtions">Exhibtions</Link>                                    
                                </div>
                            </div>    
                            <div className="my-3 mx-1">
                                <div className="shade rounded   button-74 ">
                                    <Link className=" animate-charcter  " to="/productList">Shop</Link>                        
                                </div>
                            </div>    
                            <div className="my-3 mx-1">
                                <div className="shade rounded  button-74 ">
                                    <Link className=" animate-charcter  " to="/contact">Contact</Link>                           
                                </div> 
                            </div>
                        </b>
                    </div>
                </div>
            </div>
            
            <img src={giki} className="rounded img-fluid  full glow" alt=" Responsive image" />
            {/* <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src={giki} alt="First slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={love} alt="Second slide"/>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={giki} alt="Third slide"/>
                    </div>
                </div>
            </div> */}
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 

            <img src={graphic5} className=" graph" alt=" Responsive image" />

        </> 
    
    );
}

export default Cover;