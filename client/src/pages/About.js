import React, { Component} from 'react';
import { Link } from "react-router-dom";

import Part1 from '../components/About/part1';
import dad from '../assets/dad.jpg';
import giki from '../assets/giki.jpg';
import fx from '../assets/fx.JPG';

import home from '../assets/home.jpg';
import lil from '../assets/lil.jpg';
import dance from '../assets/dance.jpg';

            const About = () => {
                 
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
                         <div className="em top-left-sand">
                            <img src={dance} className="pro img float-left " alt="Card image cap" />
                        </div>
                        <div className="bottom-teal"></div>
                            <div className="container ">
                                <div>
                                    <p className="py-3">
                                                My earliest memories are of taking part in ceremony. 
                                                Being painted up in ochre and dancing for my brother's lore ceremony. 
                                                Our dances, songs and stories have always been deeply nestled in my heart. 
                                    </p>

                                                <p>
                                                Another exceedingly early memory of mine is also taking part in a funeral for an incredibly young uncle of mine. 
                                                He very sadly passed away from suicide. 
                                                My region has the highest suicide rate in the world.  
                                                </p>
                                                <p className="im">
                                                We are people who feel so deeply and truly. 
                                                When we are happy our happiness is easily shared between us. 
                                                Yet when we are hurting, we all hurt together.  
                                                Intergenerational trauma is very present in my community 
                                                and my painting is my largest tool in becoming a cycle breaker.  
                                                </p>
                                                <img src={lil} className="pro img float-left" alt="Card image cap" />
                                                <p className="py-3">
                                                I have not always painted. I painted with my old people when I was growing up in Fitzroy, 
                                                but I stopped when we moved away.  
                                                </p>
                                                
                                                <p >
                                                    It was hard moving down to Victoria. 
                                                    I felt like an outsider, being one of the only Aboriginal kids that went to my school.
                                                </p>
                                                <p className="em">
                                                I completed my high school years at Geelong Grammar school on a  <a href="https://www.yalari.org/" target="_blank">Yalari</a> scholarship. 
                                                High school was difficult for me. 
                                                I was one of few Aboriginal/Torres Strait Islander children there and the school was yet to change the history curriculum to one of truth. 
                                                So, I didn’t have the privilege of just being a student, 
                                                I also had to be an educator to other students. 
                                                Explaining harsh truths that I grew up knowing and they didn’t want to accept at that time. 
                                                </p>
                                                <p>
                                                I sadly developed a deep depression there
                                                But my ancestors also gave me strength and resilience, 
                                                not just the trauma they endured.  
                                                </p>
                                                <p>
                                                I triumphantly completed high school in 2015 
                                                and went on to start a Bachelor of Arts degree at the University of Melbourne in 2016.  
                                                </p>
                                                <p>
                                                I didn’t have a passion for it, 
                                                I was doing it because it felt like it was expected of me. 
                                                I didn’t complete this degree. 
                                                I spent the next few years bartending at Crown Casino, 
                                                feeling very lost, and disconnected from myself.  
                                                </p>
                                                <p className="im">
                                                My healing journey started in 2020. 
                                                It started with talk therapy and casual painting.  
                                                Talk therapy didn’t do it for me, 
                                                I felt too uncomfortable trying to explain all these intense emotions I spent so long ignoring. 
                                                Luckily, my partner found somatic therapy for me. 
                                                My therapist is also an art therapist.  
                                                </p>

                                                <p>
                                                My art is about my healing and connecting with myself. 
                                                About understanding my emotions and expressing them.  
                                                </p>
                                                <p>
                                                I began somatic therapy in 2021, 
                                                at the same time I started learning how to code. 
                                                My drive to learn how to code was for cultural reasons. 
                                                We have so much analogue information recorded by our elders, 
                                                and I wanted it to be accessible to everyone. 
                                                I now work remotely for the Bunuba Cultural Conservation Institute.  
                                                </p>
                                                <p className="em">
                                                When I sit down to paint, 
                                                it is an unwavering urge to visualise what I am feeling inside. 
                                                Quite often the pull to paint has me completing my paintings in one sitting, 
                                                I get entranced. I only paint my happiness and my path forward; 
                                                these include my childhood memories and some dreaming stories my grandmothers told me. 
                                                </p>
                                                <p>
                                                The forms and colours I use come from all the deadly artists back home. 
                                                It is the art that I grew up seeing and when lucky enough helped create.  
                                                </p>
                                            
                                                <p className="im">
                                                The colours of water and my country are clear in my art, I treasure them. 
                                            <b>
                                                 I am so grateful to come from the line of people that I do.  

                                                Creativity, love, laughter and courage are all special to me.  

                                                I honour my people, my culture and myself through this chosen form of self-expression.  
                                            </b>            
                                                </p>
                                            </div>
                            </div>
                            <Link className="my-2" to="/">← Back to main page</Link>
                        </>
                    );
                
            };


            export default About;