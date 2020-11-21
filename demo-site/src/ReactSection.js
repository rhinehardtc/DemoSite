import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";


const ReactSection = () => {
    

    return (
        <>
            <div className="intro_div">
                <h2>React</h2>
            </div>
            <div className="react_vids_div" id="react_vids_div">
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
                <div className="scroll_indicator">
                    <h3>►</h3>
                </div>
            </div>
        </>
    )
}

export default ReactSection