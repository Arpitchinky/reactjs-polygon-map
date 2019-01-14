import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MyMapComponent from "./MyMapComponent";


class App extends Component {
 

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Google Map With React</h1>
        </header>
       <MyMapComponent isMarkerShown={true}/>
        
      </div>
    );
  }
}

export default App;
