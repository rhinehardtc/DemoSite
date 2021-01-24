import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

const AndMoreSection = () => {

    const pStyle = {'font-size': '6vmin'};
    const divStyle = {width: 'fit content'}

    return(
        <>
            <div className="intro_div">
                <h2>Always Learning</h2>
            </div>
            <div className="more_section">
                <p style={pStyle}>Listed below are some other technologies I've worked with.</p>
                <div style={divStyle}>
                    <ul>
                        <li>Redux</li>
                        <li>React Hooks</li>
                        <li>JSON</li>
                        <li>Web Audio API</li>
                        <li>GamePad API</li>
                        <li>p5.js</li>
                        <li>Lodash</li>
                        <li>Git</li>
                        <li>Bit</li>
                        <li>Sessions</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AndMoreSection;