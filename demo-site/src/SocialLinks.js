import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

const SocialLinks = () => {

    return(
        <>
            <div className="intro_div">
                <h4>I'm all over the internet!</h4>
            </div>
            <div className="link_logos">
                <a href="https://github.com/rhinehardtc" title="Go to my GitHub page!" target="_blank">
                    <img className="link_icon" src="/GitHub-Mark-120px-plus.png" alt="GitHub" aria-label="Link to my GitHub"></img>
                </a>
                <a href="https://www.youtube.com/channel/UCjvhU_Gzr-YF5b2azyQpCww?view_as=subscriber" title="Go to my YouTube channel!" target="_blank">
                    <img className="link_icon" src="/youtube_social_circle_red.png" alt="YouTube" aria-label="Link to my YouTube channel"></img>
                </a>
                <a href="https://www.linkedin.com/in/cameron-rhinehardt-0358a0161/" title="Go to my LinkedIn page!" target="_blank">
                    <img className="link_icon" src="/LI-In-Bug.png" alt="LinkedIn" aria-label="Link to my LinkedIn"></img>
                </a>
            </div>
        </>
    )
}

export default SocialLinks;