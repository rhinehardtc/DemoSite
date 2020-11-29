import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

const JSSection = () => {

    const linkStyle = {color: 'red', marginLeft: '1%', textDecoration: 'none'};

    let xpos, ypos; // Starting position of shape

    let xspeed = 2.8; // Speed of the shape
    let yspeed = 2.2; // Speed of the shape

    let xdirection = 1; // Left or Right
    let ydirection = 1; // Top to Bottom

    let gridSize = 15;

    function setup(p5, canvasParentRef) {
        p5.createCanvas(p5.windowWidth * 0.6, p5.windowHeight * 0.40).parent(canvasParentRef);
        p5.background(255, 253, 147);
        p5.noStroke();
        p5.frameRate(30);

        xpos = p5.width / 2;
        ypos = p5.height / 2;
    }
      
    function draw(p5) {
        p5.background(255, 253, 147);

        // Update the position of the shape
        xpos = xpos + xspeed * xdirection;
        ypos = ypos + yspeed * ydirection;

        // Test to see if the shape exceeds the boundaries of the screen
        // If it does, reverse its direction by multiplying by -1
        if (xpos > p5.width - 20 || xpos < 20) {
            xdirection *= -1;
        }
        if (ypos > p5.height - 40 || ypos < 20) {
            ydirection *= -1;
        }
        
        for (let x = gridSize; x <= p5.width - gridSize; x += gridSize) {
            for (let y = gridSize; y <= p5.height - gridSize; y += gridSize) {
                p5.noStroke();
                p5.fill(255, 0, 0);
                p5.rect(x - 1, y - 1, 5, 5);
                p5.stroke(137, 134, 193);
                p5.line(x, y, xpos, ypos);
            }
        }
    }

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth * 0.6, p5.windowHeight * 0.40);

        xpos = p5.width / 2;
        ypos = p5.height / 2;
    
        p5.redraw();
    };

    return(
        <>
            <div className="intro_div">
                <h2>JavaScript</h2>
            </div>
            <div className="html5_text">
                <p>
                    JavaScript is my main bread and butter as a web developer. Lately I use JavaScript in combination with the React Library much
                    of the time, however I have created entire project frontends with vanilla JavaScript, such as my opinion validation social media site 
                    <a style={linkStyle} href="https://github.com/rhinehardtc/AmIRight" rel="noreferrer" title="Go to my work in progress!" target="_blank">Am I Right</a>.
                </p> 
                <p>
                    I'm very comfortable using JavaScript to make fetch requests that perform CRUD actions, and have been able to integrate at least one
                    new JS library or framework into each of my projects so far. In this site, for example, I decided to add p5.js in order to create some
                    interesting interactive parts, such as the moving shapes in the welcome page and the rendering of my photo in the about me section by
                    using ellipses that change resolution on mouse hover. In fact, just to prove it, here's another one below!
                </p>
            </div>
            <Sketch setup={setup} draw={draw} windowResized={windowResized} />
        </>
    )
}

export default JSSection