import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/mee.jpg';
import crown from '../../assets/crown.png';
import graphic from '../../assets/graphic2.png';
import graphic5 from '../../assets/graphic5.png';

export const Cover = () => {
   
    return (
        <>
        <div className="bottom">
            {/* <br></br> */}
          
            <div className="container ">
                <div className="start my-1">
                <img src={graphic} className="graphic" alt=" Responsive image" />
                    {/* <p className="my-3 py-1 ">
                        Visual Artist || Software Developer || Bunuba Wiyi  
                    </p> */}
                    <br></br>
                </div>

                <div className="float-right px-3 py-3 ">
                    <div className="">
                    <b>
                        <Link className="my-2 py-2" to="/artbio">Artist Bio</Link>
                        <hr></hr>

                        <Link className=" py-2" to="/about">About Artist</Link>
                        <hr></hr>

                        <Link className=" " to="/exhibtions">Exhibtions</Link>
                        <hr></hr>

                        <Link className=" " to="/contact">Contact</Link>
                        <hr></hr>
                    </b>
                    </div>
                </div>
            </div>
  
            <img src={giki} className="rounded float-left " alt=" Responsive image" />
             

        </div>
        
        </> 
    
    );
}

export default Cover;