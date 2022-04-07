import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/giki.jpg';

export const Part1 = () => {
    return (
        <>

          <div className="">
                            {/* <Link className="my-3 py-3 mx-4" to="/">← Back to main page</Link> */}

                <div className=" start">          
                    <h5 className="py-1  white animate-charcter" id="">About Manmiya</h5>   
                </div>          
            {/* <div className=" glow">   */}
                            {/* <img src={giki} className=" pro img py-2" alt=" Responsive image Card image cap" />   */}

                            <div className="glow" >
                                <div className="flo-left my-1 shade rounded glow">
                                   
                                   <p className=" m-3 "> 
                                        
                                         Manmiya is her Aboriginal name given from her grandparents.
                                    </p>
                                    <p className=" m-3 ">
                                         They pick names from five generations ago.
                                        
                                    </p>
                                    
                                </div>
                            </div> 
            {/* </div> */}
                           
                        <br></br>
                             
            </div> 

            <img src={giki} className=" rounded img-fluid  pro top" alt=" Responsive image Card image cap" />  
        </>
    )
};

export default Part1;