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
            </div>
        </>
    )
}

export default ReactSection