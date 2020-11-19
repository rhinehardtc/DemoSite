import Sketch from "react-p5";
import SectionDisplay from "./SectionDisplay";
import './App.css';

function App() {

  let x = 2;
  let y = 1;
  let easing = 0.05;
 
  const shapesSetup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight / 2).parent(canvasParentRef);
  };
 
  const shapesDraw = (p5) => {
    p5.background(137, 134, 193);
    let targetX = p5.mouseX;
    let dx = targetX - x;
    x += dx * easing;

    let targetY = p5.mouseY;
    let dy = targetY - y;
    y += dy * easing;

    let c = p5.color(255, 0, 0);
    p5.fill(c);
    p5.noStroke();
    p5.ellipse(x, p5.windowHeight / 3.3, p5.windowWidth / 7, p5.windowWidth / 7);

    c = p5.color('#fffd7ad1');
    p5.fill(c);
    p5.stroke(255, 0, 0);
    p5.strokeWeight(p5.windowWidth / 150);
    
    p5.square(p5.windowWidth / 7, y - 750, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y - 600, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y - 450, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y - 300, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y - 150, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y , p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y + 150, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y + 300, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y + 450, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y + 600, p5.windowWidth / 15);
    p5.square(p5.windowWidth / 7, y + 750, p5.windowWidth / 15);

    p5.square((p5.windowWidth / 7) * 5.57, y - 750, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y - 600, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y - 450, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y - 300, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y - 150, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y , p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y + 150, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y + 300, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y + 450, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y + 600, p5.windowWidth / 15);
    p5.square((p5.windowWidth / 7) * 5.57, y + 750, p5.windowWidth / 15);
  };
 
  return (
    <div className="main_div">
      <div className="p5_shapes_div">
        <Sketch setup={shapesSetup} draw={shapesDraw} />
      </div>
      <header className="welcome_header">
          <p>Welcome!</p>
          <h6 className="scroll_down">▼ Scroll Down to Learn About Me ▼</h6>
      </header>
      <SectionDisplay />
    </div>
  );
}

export default App;
