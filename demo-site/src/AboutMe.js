import Sketch from "react-p5";

const AboutMe = () => {
    const leftList = ["Ruby on Rails", "JavaScript", "React", "HTML5", "CSS3", "JSON", "And More!"];

    return (
        <div className="about_me_div">
            <div className="about_left_div">
                {leftList.map(skill => <div key={skill} className="skill">{skill}</div>)}
            </div>
            <div>
                <h1>Hello</h1>
            </div>
        </div>
    );
}

export default AboutMe;