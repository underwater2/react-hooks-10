import React from "react";
import ReactDOM from "react-dom";
import { useClick } from "./useClick";

const App = () => {
  // 실행 순서가 이해 안간다.
  const sayHello = () => console.log("say hello");
  const title = useClick(sayHello);

  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
