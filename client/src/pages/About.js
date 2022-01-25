            import React, { Component} from 'react';
            import { Link } from "react-router-dom";
            import dad from '../assets/dad.jpg';
            import giki from '../assets/giki.jpg';
            import fx from '../assets/fx.JPG';
            import home from '../assets/home.jpg';
            import lil from '../assets/lil.jpg';
            class About extends Component {
                render() {
                    return (

                        <>
                        
                            <div className="container my-1" >
                               <img src={giki} className=" img-fluid" alt="Card image cap" style={{height:"30%"}}/>     
                                    <div className=" intro ">
                                        
                                        <h2 className="my-1 intro title" id="title">About</h2>
                                            <div className=" mb-3 intro">
                                                <p> 
                                                    <b>Manmiya is her Aboriginal name given to her by her grandparents.
                                                    They pick names from five generations ago.
                                                </b>
                                                </p>
                                                <p>
                                                My name is Manmiya Bedford and I am a self taught Bunuba Artist. 
                                                I am a fresh water girl with a desert name (from the Walmarjerri tribe), 
                                                and my gadinng (totem) is balga (barramundi). 
                                                I come from the heart of the Kimberley, Fitzroy Crossing Western Australia. 
                                                </p>
                                                <img src={fx} className="  w-75 float-left left xl" alt="Responsive image " />    
                                                <p>
                                                It is considered a remote community, although I never saw it as that. 
                                                We lived in the last house in the Laaban community on the outskirts of the town 
                                                and there were many small communities further out in the Fitzroy Valley, 
                                                they were the ones I thought of as ‘remote’. 
                                                </p>
                                                <img src={home} className=" img" alt="Card image cap" />
                                                <p>
                                                    I grew up with my six siblings in a house propped up on skilts.
                                                    We were close to the mighty fitzroy river and during bulurru (monsoon season) 
                                                    the water would rise up so high it would cut off the roads and we would have to move into town. 
                                                </p>
                                                
                                                <p>
                                                My earliest memories are of taking part in ceremony. 
                                                Being painted up in ochre and dancing for my brother's lore ceremony. 
                                                Our dances, songs and stories have always been deeply nestled in my heart. 
                                                </p>
                                                <p>
                                                Another exceedingly early memory of mine is also taking part in a funeral for an incredibly young uncle of mine. 
                                                He very sadly passed away from suicide. 
                                                My region has the highest suicide rate in the world.  
                                                </p>
                                                <p>
                                                We are people who feel so deeply and truly. 
                                                When we are happy our happiness is easily shared between us. 
                                                Yet when we are hurting, we all hurt together.  
                                                Intergenerational trauma is very present in my community 
                                                and my painting is my largest tool in becoming a cycle breaker.  
                                                </p>
                                                <p>
                                                I have not always painted. I painted with my old people when I was growing up in Fitzroy, 
                                                but I stopped when we moved away.  
                                                </p>
                                                <img src={lil} className=" img" alt="Card image cap" />
                                                <p>
                                                    It was hard moving down to Victoria. 
                                                    I felt like an outsider, being one of the only Aboriginal kids that went to my school.
                                                </p>
                                                <p>
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
                                                <p>
                                                My healing journey didn’t start until 2020. 
                                                It started with talk therapy and casual painting.  
                                                Talk therapy didn’t do it for me, 
                                                I felt too uncomfortable trying to explain all these intense emotions I spent so long ignoring. 
                                                Luckily, my partner found somatic therapy for me. 
                                                My therapist is also an art therapist.  
                                                </p>
                                                <p>
                                                My healing journey didn’t start until 2020. 
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
                                                <p>
                                                The colours of water and my country are clear in my art, I treasure them. 

                                                I am so grateful to come from the line of people that I do.  

                                                Creativity, love, laughter and courage are all special to me.  

                                                I honour my people, my culture and myself through this chosen form of self-expression.          
                                                </p>
                                            </div>
                                    </div>
                                    <Link className="my-2" to="/">← Back to main page</Link>
                                </div> 
                            
                                
                                {/* <Link to="/Main" ><button  className="btn btn-clear mb-3"><h2>Return to Homepage</h2> </button></Link> */}
                            </>
                    )
                }
            };


            export default About;