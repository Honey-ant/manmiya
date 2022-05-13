import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/paintingGaruwa.PNG';
import love from '../../assets/paintingLove.PNG';

import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/angerOverlay.jpg';
import Slides from '../Carousel';

export const Cover = () => {
   
    return (
        <>
            <div className=" ">
                <div className="start  ">
                    <h5 className=" my-2 titles">
                        Artist || Bunuba Wiyi 
                    </h5>    
                </div>
            </div>
            <div className='line'></div>
            <div>
                <div className="float-right  ">
                    <div className="">
                        <b>
                            <div className="my-3 ">
                                <div className="shade rounded  button-74 ">
                                    <Link className="  titles" to="/artbio">Artist Bio</Link>
                                </div>
                            </div>
                            {/* <div className="my-3 ">
                                <div className="shade rounded button-74 ">
                                    <Link className="  titles" to="/about">About </Link>                            
                                </div>
                            </div>     */}
                            <div className="my-3 ">
                                <div className="shade rounded   button-74 ">
                                    <Link className="   titles" to="/exhibtions">Exhibtions</Link>                                    
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className="shade rounded   button-74 ">
                                    <Link className="  titles " to="/productList">Shop</Link>                        
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className="shade rounded  button-74 ">
                                    <Link className="   titles" to="/contact">Contact</Link>                           
                                </div> 
                            </div>
                        </b>
                    </div>
                </div>

            </div>
            <Slides />
            {/* <img src={giki} className=" img-fluid full   pro" alt=" Responsive image" /> */}

        </> 
    
    );
}

export default Cover;