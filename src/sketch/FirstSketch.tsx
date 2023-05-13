import dynamic from "next/dynamic";
import p5Types from "p5";

import { useWindowSize } from "../hooks/useWindowSize";

const Sketch = dynamic(import("react-p5"), {
  loading: () => <></>,
  ssr: false,
});

export const FirstSketch = ({ width, height }: { width?: Number | string; height?: Number | string }) => {
  let w = Number(width);
  let h = Number(height);

  const preload = (p5: p5Types) => {
    // ここは今回使わない
  };

  const setup = (p5: p5Types, canvasParentRef: Element) => {
    if (isNaN(w)) {
      console.log("w is NaN");
      w = canvasParentRef.clientWidth;
    }
    if (isNaN(h)) {
      console.log("h is NaN");
      h = canvasParentRef.clientHeight;
    }
    console.log(`${w} ${h}`);
    p5.createCanvas(w, h).parent(canvasParentRef);
    p5.colorMode(p5.HSB, w, h, 100);
    p5.noStroke();
  };

  const barWidth = 20;
  let lastBar = -1;

  const draw = (p5: p5Types) => {
    let whichBar = p5.mouseX / barWidth;
    if (whichBar !== lastBar) {
      let barX = whichBar * barWidth;
      p5.fill(barX, p5.mouseY, 80);
      p5.rect(barX, 0, barWidth, p5.height);
      lastBar = whichBar;
    }
  };

  const windowResized = (p5: p5Types) => {
    //p5.resizeCanvas(p5.width, p5.height);
  };

  return <Sketch preload={preload} setup={setup} draw={draw} windowResized={windowResized} />;
};

export default FirstSketch;
