import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/mee.jpg';
import crown from '../../assets/crown.png';
import graphic from '../../assets/spots.png';
import graphic5 from '../../assets/break.png';
import graphic6 from '../../assets/spiral.png';

export const Cover = () => {
   
    return (
        <>
       
            {/* <br></br> */}
          
            <div className="container ">
                <div className="start my-1 rounded">
                <img src={graphic} className="graphic" alt=" Responsive image" />
                
                    <h5 className="my-4  white">
                        Visual Artist || Bunuba Wiyi 
                    </h5>
                   
                </div>

                <div className="float-right px-2 py-2 ">
                    <div className="">
                <b>
                    <div className="shade rounded">
                        <Link className="px-1 my-3" to="/artbio">Artist Bio</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded">
                        <Link className=" px-1 my-3" to="/about">About Artist</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded">
                        <Link className=" px-1 my-3" to="/exhibtions">Exhibtions</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded">
                        <Link className="px-1  my-3" to="/productList">Shop</Link>
                        <hr></hr>
                    </div>
                    <div className="shade rounded">
                        <Link className=" px-1 my-3" to="/contact">Contact</Link>
                        <hr className="orch "></hr>
                    </div>    
                </b>
                    </div>
                </div>
            </div>
            <img src={giki} className="rounded img-fluid float-left  glow" alt=" Responsive image" />
            {/* <img src={graphic6} className="gra   " alt=" " />  */}
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
            <br></br> 
 
 

            {/* height 495px width 1126 */}
            <img src={graphic5} className=" graph" alt=" Responsive image" />

        </> 
    
    );
}

export default Cover;