import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

export const BlakFacts = () => {

    return (
        <>
        <div className="container  my-3 py-3">
        <Link className="my-3" to="/">← Back to main page</Link>
            <div className="">
            
                <div className="title"> 
                    <h4>Blak facts</h4>
                </div>

                <div className="">
                    <p>
                        The everyday 'australian' doesn't know much about
                        Aboriginal, or Torres Strait Islanders. Don't worry I get it, 
                        I went through the same school system, they don't teach you anything.
                        From that I know that I wouldn't know anything if I weren't Aboriginal myself.
                    </p>
                    <p>
                        And since I'm just like the average Aboriginal, (super nice and generous),
                        I'm going to be sharing some little known facts. 
                    </p>
                </div>

                <div className="">
                    <h4>Clues from grammar</h4>
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
            </div>
        </div>
        </>
    )
};

export default BlakFacts;