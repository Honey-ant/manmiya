import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

export const BlakFacts = () => {

    return (
        <>
        <div className="container  my-3 py-3">
        
            <div className="">
            
                <div className="title"> 
                    <h4>Blak facts</h4>
                </div>

                <div className="mx-1">
                    <p>
                        Wanna get ed-u-macated (educated) with some blackfella facts?
                        Good. 
                    </p>
                    <p>
                        And since I'm just like the average Aboriginal, (super nice and generous),
                        I'm going to be sharing some little known facts. 
                    </p>
                </div>

                <div className="d-md-flex flex-md-equal w-100 my-md-3 ps-md-3">
                    <div className="col-md-6 px-3 mx-1 py-1 my-1">
                        <h4 className="pink">Clues from grammar</h4>
                        <p>
                            Words and grammar matter
                            as language holds a key part in shaping cultures and socities.
                        </p>
                        <p>
                            A curious part of grammar when it comes to Kimberly kriol
                            is our use of the they/them pronouns.
                        </p>
                        <p>
                            It is very common to hear someone using those pronouns for a person 
                            who's gender is known. 
                            "Where them go?" "who they with".
                            
                        </p>
                        <p>
                            It is simple and flows off of the tongue. And most importantly,
                            expresses that first and formost everyone is a person, their gender second.
                        </p>
                    </div>
                    <div className="col-md-6 px-3 mx-1 py-1 my-1">
                        <h4 className="pink">Pre-col clocks</h4>
                        <p>
                            Bunuba Women were so Intelligent, practical and stylish. 
                            used the long straight grasses of the spinfex plants as a economical
                            crown and a sundail. 
                        </p>
                        <p>
                            They would be able to see the shadows of the 
                            sun from their hair at any given time throughtout the day.
                        </p>
                    </div>
                </div>
                
                <Link className="my-3" to="/">← Back to main page</Link>
            </div>
        </div>
        </>
    )
};

export default BlakFacts;