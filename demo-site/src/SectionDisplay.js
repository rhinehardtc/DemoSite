import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";
import AndMoreSection from './AndMoreSection';
import CSS3Section from './CSS3Section';
import HTML5Section from './HTML5Section';
import JSSection from './JSSection';
import ReactSection from './ReactSection';
import RoRSection from './RoRSection'
import SocialLinks from './SocialLinks';

const SectionDisplay = () => {

    const [section, setSection] = useState('about');
    const [img, setImg] = useState();

    useEffect(() => {
        console.log(section)
    });

    const leftList = ["Ruby on Rails", "JavaScript", "React", "HTML5", "CSS3", "And More!", "Social Links"];

    const scrollVal = window.innerHeight;
 
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
        document.querySelector(".section_div").style.opacity = opacity;
    });

    // let img; // Declare variable 'img'.

    const preload = (p5) => {
        setImg(p5.loadImage('./me.jpg')); // Load the image
    };

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

        const stepSize = Math.floor(p5.constrain(p5.mouseX / 4, 2, 40));
        
        if(img){
            for (let y = 0; y < img.height; y += stepSize) {
                for (let x = 0; x < img.width; x += stepSize) {
                    const i = y * img.width + x;
                    const darkness = (255 - img.pixels[i * 4]) / 255;
                    const radius = stepSize * darkness;
                    p5.ellipse(x, y, radius, radius);
                }
            }
        }
        
        p5.noLoop();
    };

    const mouseMoved = (p5) => {
        if(changable === true && img) {
            if((p5.mouseX > p5.windowWidth / 200) && (p5.mouseY < (img.height / 8) * 7)) p5.loop()
        }
    };

    const windowResized = (p5) => {
        p5.resizeCanvas(p5.windowWidth / 5, p5.windowHeight / 2.5);

        if(img){
            img.resize(p5.windowWidth / 5, 0);
            p5.redraw();
        };
    }

    const linkStyle = {color: 'red', marginLeft: '1%', textDecoration: 'none'};
    const sectionStyle = {color: ''};
    const aboutMeStyle = {color: 'rgb(255, 253, 147)'};

    const sectionTable = {
        'about': 
            <>
                <div className="intro_div">
                    <h1>Hello!</h1>
                    <div className="img_of_me">
                        <Sketch preload={preload} setup={imgSetup} draw={imgDraw} mouseMoved={mouseMoved} windowResized={windowResized} />
                    </div>
                </div>
                <div className="intro_text">
                    <p>
                        My name is Cameron Rhinehardt. I'm currently looking for work as a web developer and enjoy working
                        with in both frontend and backend. I graduated from Florida Atlantic University with a degree in Fine
                        Arts in 2016. I had done a few gallery showings of my work while working at Microsoft from about 
                        2015 to 2020 and decided that I would like to join the worlds of art and tech, so I enrolled in and
                        graduated from FlatIron bootcamp with a certification in software engineering. Now I find myself
                        quickly falling in love with the world of programming!
                    </p>
                    <p>
                        I'm a creative and passionate person who loves to take on new
                        challenges and opportunities to learn. My hobbies include playing guitar, creating 
                        <a href="https://youtu.be/JnKXg-ciL78" rel="noreferrer" title="Vapor93 on YouTube" target="_blank" style={linkStyle} >synthwave music</a>,
                        playing frisbee, hiking, animation, painting,
                        <a href="https://photos.app.goo.gl/THZHY2451R8AL8148" rel="noreferrer" title="Photos I Have Taken" target="_blank" style={linkStyle}>photography</a>,
                        <a href="https://photos.app.goo.gl/YUG2TTpmW5SqcnUa6" rel="noreferrer" title="R E T R O  A E S T H E T I C  P H O T O S" target="_blank" style={linkStyle} >digital photo editing</a>,
                        cooking, and the emerging world of VR! 
                    </p>
                    <p>
                        I also studied Japanese in highschool and college for six years and continue to enjoy practicing 
                        on my own. Hopefully you can see some of my creativity shine in this, my personal site. For 
                        further details on some of my skills, click on the items in the list to the left.
                    </p>
                </div>
            </>,
        'Ruby on Rails':
            <RoRSection /> ,
        'JavaScript':
            <JSSection />,
        'React':
            <ReactSection />,
        'HTML5':
            <HTML5Section />,
        'CSS3':
            <CSS3Section />,
        'And More!':
            <AndMoreSection /> ,
        'Social Links':
            <SocialLinks />
    }


    return (
        <div className="section_div">
            <div className="section_left_div">
                {leftList.map(skill => 
                        <div 
                            key={skill} 
                            className="skill" 
                            onClick={() => section === skill ? setSection('about') : setSection(skill)} 
                            style={section === skill ? aboutMeStyle : sectionStyle}
                        >{section === skill ? 'About Me' : skill}</div>
                    )
                }
            </div>
            <div className="section_right_div">{sectionTable[section]}</div>
        </div>
    );
}

export default SectionDisplay;