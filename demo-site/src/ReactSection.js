import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";


const ReactSection = () => {
    
    const [videoSlideStyle, setVideoSlideStyle] = useState('closed_react_vids_div');

    const toggle = () => {
        if(videoSlideStyle === 'closed_react_vids_div'){
            setVideoSlideStyle('react_vids_div')
        } else {
            setVideoSlideStyle('closed_react_vids_div')
        }
    }

    const linkStyle = {color: 'red', marginLeft: '1%', textDecoration: 'none'};

    return (
        <>
            <div className="intro_div">
                <h2>React</h2>
            </div>
            <div className="outer_vid_div" >
                <div className={videoSlideStyle}>
                    <div className="video_viewport">
                        <iframe 
                            className="demo_video"
                            src="https://www.youtube.com/embed/kQoJ3pYkz04" 
                            title="Like The Taste demo video"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                            allowFullScreen
                        ></iframe>
                        <iframe 
                            className="demo_video"
                            src="https://www.youtube.com/embed/uMlHYis91TU" 
                            title="Tell-A-Punch3020 demo video"
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" 
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
                <div className="scroll_indicator" onClick={() => toggle()}>
                    <p>▷</p>
                    <p>▷</p>
                </div>
                <div className="react_text">
                    <p>
                        I'm doing a lot lately with React! Out of all the programming languages, libraries, and tools that I've tried,
                        I think React might just be my favorite so far. I LOVE how easy it makes it to design websites and web-apps and
                        now with hooks, I like it even more because state management has become a breeze! 
                    </p> 
                    <p>
                        This site was also made with React, and if you click the drawer to the left of this text you can watch some demo
                        videos of my most recent React projects. Horrizontally scroll through them with your laptop touch pad, or shift +
                        scroll with your mouse. You can also click here to check out my  
                        <a href="https://rhinehardtc.github.io/Tell-A-Punch3020/" rel="noreferrer" title="Tell-A-Punch3020" target="_blank" style={linkStyle}> React fighting game</a>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default ReactSection