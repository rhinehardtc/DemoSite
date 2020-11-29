import React, { useState, useEffect } from 'react';
import Sketch from "react-p5";

const CSS3Section = () => {

    const [filter1Style, setFilter1Style] = useState('filter_1_off');
    const [filter2Style, setFilter2Style] = useState('filter_2_off');
    const [filter3Style, setFilter3Style] = useState('filter_3_off');


    return(
        <>
            <div className="intro_div">
                <h2>CSS3</h2>
            </div>
            <div className="outer_filter_div">
                <div className="css3_text">
                    <p>
                        Styling is the part of a project that I find most relaxing. I really enjoy the art of styling with CSS3 and have taken it upon myself
                        to do the styling for every project I've worked on so far, whether solo or with a partner. I consider multiple browsers and mobile layout
                        as well and do extensive testing throughout my build process to make sure that resizing works and layout remains coherent.
                    </p> 
                    <p>
                        You may have noticed some interesting uses of CSS at play in my site already, including the floating social links, overflow scrolls, and
                        sliding drawers. I've even included some slide-out color filters below this text that can be clicked on to mask this area in different ways.
                    </p>
                </div>
                <div className="middle_filter_div">
                    <div className={filter1Style}></div>
                    <div 
                        className="inner_filter_div" 
                        onClick={() => filter1Style === 'filter_1_off' ? setFilter1Style('filter_1_on') : setFilter1Style('filter_1_off')}
                    >▴ Filter 1 ▴</div>
                </div>
                <div className="middle_filter_div">
                    <div className={filter2Style}></div>
                    <div 
                        className="inner_filter_div" 
                        onClick={() => filter2Style === 'filter_2_off' ? setFilter2Style('filter_2_on') : setFilter2Style('filter_2_off')}
                    >▴ Filter 2 ▴</div>
                </div>
                <div className="middle_filter_div">
                    <div className={filter3Style}></div>
                    <div 
                        className="inner_filter_div" 
                        onClick={() => filter3Style === 'filter_3_off' ? setFilter3Style('filter_3_on') : setFilter3Style('filter_3_off')}
                    >▴ Filter 3 ▴</div>
                </div>
            </div>
        </>
    )
}

export default CSS3Section;