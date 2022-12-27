import React from "react";
import ReactDOM from "react-dom";
import { useBeforeLeave } from "./useBeforeLeave";

const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return <div className="App"></div>;
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
