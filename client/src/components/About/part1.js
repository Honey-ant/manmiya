import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/giki.jpg';

export const Part1 = () => {
    return (
        <>
          <div className="bottom-right">
                            {/* <Link className="my-3 py-3 mx-4" to="/">← Back to main page</Link> */}
                            <h3 className="  container title " id="">About</h3>
                            <hr className="container"></hr> 
                           <div className="box py-3 my-2 ">  
                            <img src={giki} className="right pro " alt=" Responsive image" />  

                            <div className="container " >
                                <div className="flo-left  py-2 my-3">
                                   <p className=" my-3 "> 
                                        
                                         Manmiya is her Aboriginal name given from her grandparents.
                                    </p>
                                    <p className=" my-3 ">
                                         They pick names from five generations ago.
                                        
                                    </p>
                                    <hr className="white"></hr> 
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