import React from "react";
import logo from "./logo.svg";
import packageImg from "./packageImg.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={packageImg} className="packageImg" alt="packageImg" />
      </header>
    </div>
  );
}

export default App;
