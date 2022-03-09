import React from 'react';
import { Link } from 'react-router-dom';

import exb from '../assets/exb.jpg'; 
import kiss from '../assets/kiss.jpg';
import sit from '../assets/sit.jpg';


export const Exhibtions = () => {

    return (
        <>
        <div className="container">
            <h3 className="title">Exhibtions</h3> 
            <p>
                My debut exhibition was in January 2022 in Naarm (Melbourne Australia).
                This was were a fantastic collection of artists called the 'Kiss my Art Collective'.
                
            </p>
            <p>
                My second and current exhibition is an online fundraising event that I am so lucky and gratful to be apart of.
                The fundraiser is for the 'Art of Healing' foundation, that is based in Canada.
                This foundation was founded by my therapist Atira Tan. 
                Someone I am in awe of for so many reasons. 
            </p>
            <div className="inner">
                <div className="mx-3 py-3 px-3">
                <br></br>
                    <h5 className="center">The Kiss my Art Collective!</h5>
                    <br></br>
                    <img src={kiss} className="  " alt="Card image cap  " />  
                    <br></br>
                    <br></br>
                    <p className=" ">
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
                    <br></br>
                    <Link className="py-4 my-3 px-3 center" to="/contact">Contact me to inquire about them</Link>
                </div>
            </div>
            <br></br>
            
            <br></br>

            <div className="inner">
                <div className="mx-3 py-3 px-3">
                <br></br>
                    <h5>The Art of Healing</h5>
                    <br></br>
                    <p>
                        An amazingly appropriate name for all of the work the founders
                         and workers do for so many poeple around the world.
                    </p>
                    <p>
                        The work the foundation does is centered around helping people who have been sold into
                        sex slavery, and aids them in their recovery.
                    </p>
                    <img src={sit} className="  " alt="  " />  
                    <br></br>
                    <p>
                        All of the art works in the collctive were created after therapy sessions when I have felt so 
                        centered and aligened.
                    </p>
                    
                    <p>
                        
                      Click here to view the collection for the fundraiser  <a href="https://www.arttohealing.org/art-fundraiser-2022/" target="_blank">Art of healing Fundraiser</a>
                    </p>
                </div>
            </div>
            <br></br>
            <Link className="my-2" to="/">← Back to main page</Link>
            <br></br>
        </div>
        </>
    )
}

export default Exhibtions;