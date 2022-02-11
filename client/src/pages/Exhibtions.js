import React from 'react';
import { Link } from 'react-router-dom';

import exb from '../assets/exb.jpg'; 
import kiss from '../assets/kiss.jpg';


export const Exhibtions = () => {

    return (
        <>
        <div className="container">
            <h3>Exhibtions</h3> 
            <p>
                My exhibtion count thus far is at a exciting one (1).
               I have COVID to thank, as I was meant to be apart of some last year but were sadly cancelled.

            </p>
            <div className="inner">
                <div className="mx-3 py-3 px-3">
                    
                    <h5>The Kiss my Art Collective!</h5>
                    <img src={kiss} className="pro img   " alt="Card image cap  " />  
                    <p className=" py-3 px-3">
                        The Kiss my art collective is made up of all femme people. Mainly poeple of colour (which we love to see). We have all been brought together by helping with muruals for the deadly Aretha Brown.
                    </p>
                    <p>
                        It was held in Coburg at the schoolhouse studios. All the artists involved are incredibly talented and diverse in their practice.
                    I am so honoured and proud to be apart of this collective.
                    </p>
                    <p>
                        I displayed two pieces, both from my 'Sovereignty with my Anger' collective. 
                        They are both still for sale.
                    </p>
                    
                    <img src={exb} className="pro img   " alt="Card image cap  " />  
                    <Link className="py-4 my-3 px-3" to="/contact">Contact me to inquire about them</Link>
                </div>
            </div>
            <Link className="my-2" to="/">← Back to main page</Link>
        </div>
        </>
    )
}

export default Exhibtions;