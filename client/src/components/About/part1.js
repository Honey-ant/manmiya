import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/giki.jpg';

export const Part1 = () => {
    return (
        <>
          <div className="">
                            {/* <Link className="my-3 py-3 mx-4" to="/">← Back to main page</Link> */}
                            <h3 className="  container title " id="">About</h3>
                            <hr className="container"></hr> 
                           <div className="box py-3 my-2 glow">  
                            <img src={giki} className="right pro img" alt=" Responsive image Card image cap" />  

                            <div className="container " >
                                <div className="flo-left  py-2 ">
                                   <p className=" m-3 "> 
                                        
                                         Manmiya is her Aboriginal name given from her grandparents.
                                    </p>
                                    <p className=" m-3 ">
                                         They pick names from five generations ago.
                                        
                                    </p>
                                    <hr className="white"></hr> 
                                </div>
                            </div> 
                             </div>
                            <hr className="container"></hr>
                        {/* <br></br> */}
                             
            </div> 
        </>
    )
};

export default Part1;