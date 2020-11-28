import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

const RoRSection = () =>{

    const linkStyle = {color: 'red', marginLeft: '1%', textDecoration: 'none'};

    return(
        <>
            <div className="intro_div">
                <h2>Ruby on Rails</h2>
            </div>
            <div className="RoR_div">
                <div className="html5_text">
                    <p>
                        I enjoy using Ruby on Rails for building backend servers. I've used it on a number of projects with JavaScript frontends,
                        as well as a few projects using only Ruby on Rails for backend and frontend. I feel comfortable using Ruby with it's
                        generous built in methods and friendly syntax, and Rails makes setting up table relationships easy to understand with the
                        established writing conventions. 
                    </p> 
                    <p>
                        I can easily create custom controller actions and routes, though I usually stick to the standard CRUD actions. A good example
                        of some of my work with Ruby on Rails can be found in the repo for my recipe site <a style={linkStyle} href="https://github.com/rhinehardtc/Like_The_Taste" rel="noreferrer" title="Go to my work in progress!" target="_blank">Like The Taste</a>,
                        in which I created a custom search action to filter recipe search results. I also included a demo video in the React section
                        of the site. Recently my focus has been more towards the frontend, however all of my work is public in my GitHub, which can be found in
                        the social links section of my site.
                    </p>
                </div>
            </div>
        </>
    )
}

export default RoRSection;