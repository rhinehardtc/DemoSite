import Sketch from "react-p5";
import './App.css';

function App() {

  let x = 2;
  let y = 1;
  let easing = 0.05;
 
  const shapesSetup = (p5, canvasParentRef) => {
    p5.createCanvas(1440, 400).parent(canvasParentRef);
    p5.noStroke();
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
    p5.ellipse(x, 250, 150, 150);
    c = p5.color(255, 253, 122);
    p5.fill(c);
    p5.noStroke();
    p5.square(200, y + 300, 88);
  };
 
  return (
    <div className="main_div">
      <div className="p5_div">
        <Sketch setup={shapesSetup} draw={shapesDraw} />
      </div>
      <header className="welcome_header">
          Welcome!
          <h6 className="scroll_down">▼ Scroll Down to Learn About Me ▼</h6>
      </header>
      <div>
        <Sketch setup={shapesSetup} draw={shapesDraw} />
      </div>
    </div>
  );
}

export default App;
