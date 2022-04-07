import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/paintingGaruwa.PNG';
import love from '../../assets/paintingLove.PNG';

import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/angerOverlay.jpg';


export const Cover = () => {
   
    return (
        <>
            <div className=" ">
                <div className="start  ">
                    <h5 className=" my-2 white animate-charcter">
                        Visual Artist || Bunuba Wiyi 
                    </h5>    
                </div>

                <div className="float-right  ">
                    <div className="">
                        <b>
                            <div className="my-3 ">
                                <div className="shade rounded  button-74 ">
                                    <Link className=" animate-charcter " to="/artbio">Artist Bio</Link>
                                </div>
                            </div>
                            <div className="my-3 ">
                                <div className="shade rounded button-74 ">
                                    <Link className=" animate-charcter " to="/about">About </Link>                            
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className="shade rounded   button-74 ">
                                    <Link className=" animate-charcter  " to="/exhibtions">Exhibtions</Link>                                    
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className="shade rounded   button-74 ">
                                    <Link className=" animate-charcter  " to="/productList">Shop</Link>                        
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className="shade rounded  button-74 ">
                                    <Link className=" animate-charcter  " to="/contact">Contact</Link>                           
                                </div> 
                            </div>
                        </b>
                    </div>
                </div>

            </div>
    
            <img src={giki} className=" img-fluid full   pro" alt=" Responsive image" />
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
            <img src={graphic5} className="  graph glow" alt=" Responsive image" />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
        
            <div className="dline glow"></div>
        </> 
    
    );
}

export default Cover;