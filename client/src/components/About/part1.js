import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/giki.jpg';

export const Part1 = () => {
    return (
        <>
          <div className="">
                            {/* <Link className="my-3 py-3 mx-4" to="/">← Back to main page</Link> */}
                            
                            <hr className="container"></hr> 
                           <div className="box glow">  
                           <h3 className="  title " id="">About</h3>
                            <img src={giki} className=" pro img py-2" alt=" Responsive image Card image cap" />  

                            <div className="container glow" >
                                <div className="flo-left my-1 shade rounded glow">
                                   
                                   <p className=" m-3 "> 
                                        
                                         Manmiya is her Aboriginal name given from her grandparents.
                                    </p>
                                    <p className=" m-3 ">
                                         They pick names from five generations ago.
                                        
                                    </p>
                                    
                                </div>
                            </div> 
                             </div>
                            <hr className="container"></hr>
                        <br></br>
                             
            </div> 
        </>
    )
};

export default Part1;