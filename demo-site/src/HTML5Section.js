import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";


const HTML5Section = () => {

    const [hSlideStyle, setHSlideStyle] = useState('unslide_letters')
    const [tSlideStyle, setTSlideStyle] = useState('unslide_letters')
    const [mSlideStyle, setMSlideStyle] = useState('unslide_letters')
    const [lSlideStyle, setLSlideStyle] = useState('unslide_letters')
    const [numSlideStyle, setNumSlideStyle] = useState('unslide_letters')

    const linkStyle = {color: 'red', marginLeft: '1%', textDecoration: 'none'};

    return (
        
        <div className="outer_html5_div">
            <div className="intro_div html5_header_div" >
                <span className={`${hSlideStyle}`} onMouseEnter={() => setHSlideStyle('slide_letters')} onMouseLeave={() =>setHSlideStyle('unslide_letters')}>H</span>
                <span className={`${tSlideStyle}`} onMouseEnter={() => setTSlideStyle('slide_letters')} onMouseLeave={() => setTSlideStyle('unslide_letters')} >T</span>
                <span className={`${mSlideStyle}`} onMouseEnter={() => setMSlideStyle('slide_letters')} onMouseLeave={() => setMSlideStyle('unslide_letters')} >M</span>
                <span className={`${lSlideStyle}`} onMouseEnter={() => setLSlideStyle('slide_letters')} onMouseLeave={() => setLSlideStyle('unslide_letters')} >L</span>
                <span className={`${numSlideStyle}`} onMouseEnter={() => setNumSlideStyle('slide_letters')} onMouseLeave={() => setNumSlideStyle('unslide_letters')} >5</span>
            </div>
            <div className="html5_text">
                <p>
                    Who doesn't love HTML5? I'm very proficient in writing easily stylized HTML5 elements and know how to leverage a
                    wide range of tags in order to accomplish my web development goals. From the iframe to the h1, I can get it done.
                    I've done a lot of complex HTML layout on this site in order to achieve the styling that I sought through using
                    CSS3 and JavaScript.
                </p> 
                <p>
                    I just recently started a single-file HTML5 game as a new personal project as well. As soon as it's finished, I'll
                    definitely link to it here, or potentially be able to have it directly playable on this page! In the mean time, feel
                    free to check out the GitHub repo <a style={linkStyle} href="https://github.com/rhinehardtc/MetaDachi" rel="noreferrer" title="Go to my work in progress!" target="_blank">here</a>.
                </p>
            </div>
        </div>
        
    )
}

export default HTML5Section