import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import cover from '../assets/cover.JPG';

import exb from '../assets/exb.jpg'; 
import kiss from '../assets/kiss.jpg';
import sit from '../assets/sit.jpg';


export const Exhibtions = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <>
        <div className='px-4  my-1 text-center'>
            <div className=" ">          
                <h2 className="     fw-bold ltBrown " id="">Exhibtions</h2>   
                <hr></hr>
            </div>  

            <div className="col-lg-6 mx-auto">
                {/* <img src={cover} className=" rounded  pro " alt="Card image cap  " />   */}
            </div>   
        </div>     
            {/* <div className="container myt-2">
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
                <hr></hr>
            </div> */}
            
            <Carousel className="py-4 container"
            swipeable={true}
            draggable={false}
            showDots={true}
            showArrows={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={10000}
            keyBoardControl={true}
            // customTransition="all 4.5"
            // transitionDuration={1000}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            // deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >

            <div className="container exb col mx-auto">
                <div className="">
                    <h4 className="text-center  titles py-2 ">The Kiss my Art Collective!</h4>
                    <div className="row">
                        <div className="col ">
                            <p className=" ">
                                The Kiss My Art collective is made up of all femme people. 
                                Majority  poeple of colour (which we love to see). 
                                We have all been brought together by helping with muruals for 
                                (deadly) Aretha Brown.
                            </p>

                        </div>
                        <img src={kiss} className="   col-7" alt=" " />  
                    {/* </div>
                    <div className=""> */}
                            <div className="col my-3">
                                <p>
                                    It was held in Coburg at the schoolhouse studios. 
                                    All the artists involved are incredibly talented and diverse in their practice.
                                I am so honoured and proud to be apart of this collective.
                                </p>
                                <p>
                                    I displayed two pieces, 
                                    both from my 'Sovereignty with my Anger' collective. 
                                    They are both still for sale.
                                </p>
                                <Link className="py-4 my-4  center" to="/contact">
                                    Contact me to inquire about them
                                    </Link>
                            </div>
                        <img src={exb} className="  my-2 col" alt=" " />  

                    </div>
                    
                </div>
            </div>

            <div className="container exb col mx-auto">
                <div className="">
                    <h4 className="text-center titles py-2 ">The Art of Healing</h4>
                    <div className="row">
                        <div className="col">
                            <p>
                                An amazingly appropriate name for all of the work the founders
                                and workers do for so many poeple around the world.
                            </p>
                            <p>
                                The work the foundation does is centered around helping people who have been sold into
                                sex slavery, and aids them in their recovery.
                            </p>
                        </div>    
                        <img src={sit} className="   col-7" alt="  " />  
                        <div className="col my-3">
                            <p>
                                All of the art works in the collctive were created after 
                                therapy sessions when I have felt so 
                                centered and aligened.
                            </p>
                            <p>
                            Click here to view the collection for the fundraiser  
                            <a href="https://www.arttohealing.org/art-fundraiser-2022/" target="_blank">
                                Art of healing Fundraiser
                                </a>
                            </p>
                        </div>
                    </div>    
                </div>
            </div>
            </Carousel>
            <div>
            <Link className="my-2" to="/">← Back to main page</Link>
           
        </div>
        </>
    )
}

export default Exhibtions;