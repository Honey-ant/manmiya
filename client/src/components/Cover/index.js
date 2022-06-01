import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/paintingGaruwa.PNG';
import love from '../../assets/paintingLove.PNG';

import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/angerOverlay.jpg';
import Slides from '../Carousel';

export const Cover = () => {
   
    const message = () => {
        console.log("Bunuba Wiyi")
    }

    return (
        <>
            <div className=" ">
                <div className="start " id="start">
                    <div>
                    <h1 className="mb  ">
                        Manmiya     
                    </h1> 
                    </div>
                    <h5 className=" headers">
                        Artist || <button onClick={message} 
                        type="button" className="headers" 
                        data-toggle="popover" title="Popover title" 
                        data-content="And here's some amazing content. It's very engaging. Right?">
                            <h5 className='headers'>Bunuba Wiyi </h5></button> 
                    </h5>    
                </div>
            </div>
            {/* <div className='line'></div> */}
            <div>
                <div className="float-right  ">
                    <div className="">
                        <b>
                            <div className="my-3 ">
                                <div className=" shade  button-74 ">
                                    <Link className=" titles" to="/artbio">Artist Bio</Link>
                                </div>
                            </div>
                            {/* <div className="my-3 ">
                                <div className="shade rounded button-74 ">
                                    <Link className="  titles" to="/about">About </Link>                            
                                </div>
                            </div>     */}
                            <div className="my-3 ">
                                <div className=" shade button-74 ">
                                    <Link className="   titles" to="/exhibtions">Exhibtions</Link>                                    
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className=" shade button-74 ">
                                    <Link className="  titles " to="/productList">Shop</Link>                        
                                </div>
                            </div>    
                            <div className="my-3 ">
                                <div className="shade button-74 ">
                                    <Link className="   titles" to="/contact">Contact</Link>                           
                                </div> 
                            </div>
                        </b>
                    </div>
                </div>

            </div>
            < Slides className="py-3" />
            {/* <img src={giki} className=" img-fluid full   pro" alt=" Responsive image" /> */}

        </> 
    
    );
}

export default Cover;