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
               
                
                    <h5 className="myb-2  white">
                        Visual Artist || Bunuba Wiyi 
                    </h5>
                   
                </div>

                <div className="float-right px-2 py-2 ">
                    <div className="">
                <b>
                    <div className="shade rounded my-2 ">
                        <Link className="px-2 py-2 " to="/artbio">Artist Bio</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded my-2">
                        <Link className=" px-2 py-2" to="/about">About Artist</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded my-2">
                        <Link className=" px-2 py-2 " to="/exhibtions">Exhibtions</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded my-2">
                        <Link className="px-2  py-2 " to="/productList">Shop</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded my-2">
                        <Link className=" px-2 py-2 " to="/contact">Contact</Link>
                        <hr className="orch "></hr>
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