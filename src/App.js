import React from "react";
import './App.css';

export default function App() {

  return (
    <div className="App">
      <div className="contrainer">
     <h1>Weather App</h1> 
     <button className="btn btn-primary">Hello</button>
      <footer>
        This project was coded by {" "} <a href="https://www.linkedin.com/in/ava-lee-64331882" target="_blank">Ava Lee</a>{" "} and is {" "}
        <a href="https://github.com/Ava33343/react-weatherApp" 
          target="_blank">open-sourced on Github</a>
      </footer>
      </div>
    </div>
  );
}