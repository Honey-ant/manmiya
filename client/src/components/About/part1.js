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
                           <div className="box py-3 my-2">  
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
                            {/* <hr className="container"></hr> 
                                  
                                <p className="container py-2 my-3">
                                    My name is Manmiya Bedford and I am a self taught Bunuba Artist. 
                                    I am a fresh water girl with a desert name (from the Walmarjerri tribe), 
                                    and my gadinng (totem) is balga (barramundi). 
                                    I come from the heart of the Kimberley, Fitzroy Crossing Western Australia. 
                                </p>
                                    
                            <hr className="container"></hr>  */}
                            <hr className="container"></hr>
                        <br></br>
                             
            </div> 
        </>
    )
};

export default Part1;