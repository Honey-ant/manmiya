import React from 'react';
import { Link } from 'react-router-dom';

import giki from '../../assets/giki.jpg';

export const Part1 = () => {
    return (
        <>
          <div className="bottom-right">
                            <Link className="my-3 py-3 mx-4" to="/">← Back to main page</Link>
                            <h2 className=" title my-2" id="title">About</h2>
                            
                            <img src={giki} className="right pro img imm" alt=" Responsive image" />  

                            <div className="container " >
                                <div className="flo-left container">
                                   <p> 
                                        <b>
                                         Manmiya is her Aboriginal name given to her by her grandparents.
                                         They pick names from five generations ago.
                                        </b>
                                    </p>
                                    <hr></hr>
                                </div>
                                 
                                    
                                <p className="container  my-3">
                                    My name is Manmiya Bedford and I am a self taught Bunuba Artist. 
                                    I am a fresh water girl with a desert name (from the Walmarjerri tribe), 
                                    and my gadinng (totem) is balga (barramundi). 
                                    I come from the heart of the Kimberley, Fitzroy Crossing Western Australia. 
                                </p>
                                    
                                  
                        <br></br>
                            </div>  
            </div> 
        </>
    )
};

export default Part1;