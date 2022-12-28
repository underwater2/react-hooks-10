import React from "react";
import ReactDOM from "react-dom";
import { useFullscreen } from "./useFullscreen";

const App = () => {
  const onChange = (isFull) =>
    console.log(isFull ? "We are in Fullscreen" : "We are not in Fullscreen");
  const { element, triggerFull, exitFull } = useFullscreen(onChange);
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <div ref={element}>
        <h1 style={{ color: "blue" }}>Hello</h1>
        <button onClick={exitFull}>Exit Fullscreen</button>
      </div>
      <button onClick={triggerFull}>Make this Fullscreen</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
