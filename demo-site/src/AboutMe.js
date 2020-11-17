import React, { useState } from 'react';
import Sketch from "react-p5";

const AboutMe = () => {
    const leftList = ["Ruby on Rails", "JavaScript", "React", "HTML5", "CSS3", "JSON", "And More!"];

    const scrollVal = window.innerHeight;
 
    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        let opacity;

        if (currentScroll < scrollVal) {
            opacity = 0 + currentScroll / scrollVal;
        } else {
            opacity = 1;
        }
        document.querySelector(".about_me_div").style.opacity = opacity;
    });

    return (
        <div className="about_me_div">
            <div className="about_left_div">
                {leftList.map(skill => <div key={skill} className="skill">{skill}</div>)}
            </div>
            <div>
                <h1>Hello</h1>
            </div>
        </div>
    );
}

export default AboutMe;