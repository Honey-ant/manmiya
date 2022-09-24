import React from 'react';
import { Link } from 'react-router-dom';
import giki from '../../assets/paintingGaruwa.PNG';

import graphic from '../../assets/spots.png';

import Slides from '../Carousel';

export const Cover = () => {
   
    const message = () => {
        console.log("Bunuba Wiyi")
    }

    return (
        <>
            <div className=" nav">
                <div className="start " id="">
                    <div className=''>
                        <h1 className=" mb">
                            Manmiya     
                        </h1> 
                    </div>
                    <h5 className="headers ">
                        Artist || Bunuba Wiyi
                    </h5>    
                </div>
            </div>
            {/* <div className='line'></div> */}
            <div>
                <div className="float-right  ">
                    <div className="">
                        <b>
                            {/* <div className="my-3 ">
                                <div className=" shade  button-74 ">
                                    <Link className=" titles" to="/artbio">Artist Bio</Link>
                                </div>
                            </div> */}
                            {/* <div className="my-3 ">
                                <div className="shade rounded button-74 ">
                                    <Link className="  titles" to="/about">About </Link>                            
                                </div>
                            </div>     */}
                            {/* <div className="my-3 ">
                                <div className=" shade button-74 ">
                                    <Link className="   titles" to="/exhibtions">Exhibtions</Link>                                    
                                </div>
                            </div>     */}
                            {/* <div className="my-3 ">
                                <div className=" shade button-74 ">
                                    <Link className="  titles " to="/productList">Shop</Link>                        
                                </div>
                            </div>     */}
                            {/* <div className="my-3 ">
                                <div className="shade button-74 ">
                                    <Link className="   titles" to="/contact">Contact</Link>                           
                                </div> 
                            </div> */}
                        </b>
                    </div>
                </div>

            </div>
            <div className="">
            < Slides className="py-1 slides " />

            </div>

        </> 
    
    );
}

export default Cover;