import React, { Component } from 'react';
import './css/App.css';
import AppNode from "./appNode/appNode";

class App extends Component {
  render() {
    return (
        <div>
          <AppNode name="test node" url="https://eshop.applab.coolpany.cloud" watcherUrl="http://localhost:8080" />
        </div>
    );
  }
}

export default App;
