import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

const AboutMe = () => {
    const leftList = ["Ruby on Rails", "JavaScript", "React", "HTML5", "CSS3", "JSON", "And More!"];

    const scrollVal = window.innerHeight;

    useEffect(() => {
        console.log("in useEffect")
    })
 
    let changable = false;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        let opacity;

        if (currentScroll < scrollVal) {
            changable = false;
            opacity = 0 + currentScroll / scrollVal;
        } else {
            changable = true;
            opacity = 1;
        }
        document.querySelector(".about_me_div").style.opacity = opacity;
    });

    let img; // Declare variable 'img'.

    const preload = (p5) => {
        img = p5.loadImage('/me.jpg'); // Load the image
    }

    const imgSetup = (p5, canvasParentRef) => {
        p5.createCanvas(p5.windowWidth / 5, p5.windowHeight / 2.5).parent(canvasParentRef);
        img.resize(p5.windowWidth / 5, 0);
        p5.noStroke();
        p5.fill(255, 0, 0);
    };

    const imgDraw = (p5) => {
        
        // Displays the image at its actual size at point (0,0)
        p5.image(img, 0, 0, p5.windowWidth / 6, p5.windowHeight / 4);

        p5.background(255, 253, 147);

        img.loadPixels();

        const stepSize = Math.floor(p5.constrain(p5.mouseX / 6, 2, 40));
        
        for (let y = 0; y < img.height; y += stepSize) {
            for (let x = 0; x < img.width; x += stepSize) {
                const i = y * img.width + x;
                const darkness = (255 - img.pixels[i * 4]) / 255;
                const radius = stepSize * darkness;
                p5.ellipse(x, y, radius, radius);
            }
        }
        
        p5.noLoop();
    }

    const mouseMoved = (p5) => {
        if(changable === true) {
            if((p5.mouseX > p5.windowWidth / 200) && (p5.mouseY < (img.height / 8) * 7)) p5.loop()
        }
    }

    return (
        <div className="about_me_div">
            <div className="about_left_div">
                {leftList.map(skill => <div key={skill} className="skill">{skill}</div>)}
            </div>
            <div className="intro_div">
                <h1>Hello</h1>
                <div className="img_of_me">
                    <Sketch preload={preload} setup={imgSetup} draw={imgDraw} mouseMoved={mouseMoved} />
                </div>
            </div>
        </div>
    );
}

export default AboutMe;