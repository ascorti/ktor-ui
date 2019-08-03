import React, { Component } from 'react';
import './App.css';
import AppNode from "./appNode/appNode";

class App extends Component {
  render() {
    return (
        <div>
          <AppNode name="test node" url="http://localhost:9100" watcherUrl="http://localhost:3000" />
        </div>
    );
  }
}

export default App;
