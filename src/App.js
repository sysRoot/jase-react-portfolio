import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import './App.scss';

library.add(fab, far, fas);

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Some subpar non-paragraph</p>
      </div>
    );
  }
}

export default App;
