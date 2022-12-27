import React from "react";
import ReactDOM from "react-dom";
import { useConfirm } from "./useConfirm";

const App = () => {
  const deleteworld = () => console.log("deleting...");
  const abort = () => console.log("Aborted");
  const confirmDelete = useConfirm("are you sure?", deleteworld, abort);

  return (
    <div className="App">
      <button onClick={confirmDelete}>Delete the word</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
