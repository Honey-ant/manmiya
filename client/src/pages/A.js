import React, { Component} from 'react';
import { Link } from "react-router-dom";

import Part1 from '../components/About/part1';
import dad from '../assets/dad.jpg';
import giki from '../assets/giki.jpg';
import fx from '../assets/fx.JPG';

import home from '../assets/home.jpg';
import lil from '../assets/lil.jpg';
import dance from '../assets/dance.jpg';


const A = () => {
    return (
        <>
            <Part1/>
           
                        <div className="top-right">  
        
                            <img src={fx} className="pro img float-left  " alt="Card image cap  " />               
                                <div className="container">
                                                
                                     <p className=" intro py-3">
                                        It is considered a remote community, although I never saw it as that. 
                                        We lived in the last house in the Laaban community on the outskirts of the town 
                                        and there were many small communities further out in the Fitzroy Valley, 
                                        they were the ones I thought of as ‘remote’. 
                                     </p>
                                 </div>                           
                            <br></br>
                        </div>    
                            <div className="bottom-left-sand">
                            <br></br>
                                <div className=" container">

                                    <img src={home} className="pro img float-left " alt="Card image cap" />
                                        <p className=" im py-3 ">
                                        I grew up with my six siblings in a house propped up on skilts.
                                        We were close to the mighty fitzroy river and during bulurru (monsoon season) 
                                        the water would rise up so high it would cut off the roads and we would have to move into town. 
                                        </p>
                                </div>
                             <br></br>   
                            </div>
                            
        </>

    )
}

export default A;