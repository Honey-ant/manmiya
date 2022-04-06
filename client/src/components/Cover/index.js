import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/mee.jpg';
import love from '../../assets/paintingLove.PNG';

import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/break.png';


export const Cover = () => {
   
    return (
        <>
       
            {/* <br></br> */}
          
            <div className="container ">
                <div className="start my-1 rounded">
               
                
                    <h6 className="myb-2  white animate-charcter">
                        Visual Artist || Bunuba Wiyi 
                    </h6>
                   
                </div>

                <div className="float-right  ">
                    <div className="">
                        <b>
                            <div className="shade rounded my-2 button-74">
                                <Link className="  " to="/artbio">Artist Bio</Link>
                                
                            </div>
                            <div className="shade rounded my-2 button-74">
                                <Link className="  " to="/about">About Artist</Link>
                                
                            </div>
                            <div className="shade rounded my-2  button-74">
                                <Link className="   " to="/exhibtions">Exhibtions</Link>
                                
                            </div>
                            <div className="shade rounded my-2  button-74">
                                <Link className="   " to="/productList">Shop</Link>
                                
                            </div>
                            <div className="shade rounded my-2  button-74">
                                <Link className="   " to="/contact">Contact</Link>
                                
                            </div>    
                        </b>
                    </div>
                </div>
            </div>
            
            <img src={giki} className="rounded img-fluid   glow" alt=" Responsive image" />
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