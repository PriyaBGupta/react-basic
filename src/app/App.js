import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header';
import {Home} from './components/home';

class App extends Component {
  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-10">
              <Header/>
            </div>
            <div className="col-xs-10">
              <Home name={"Max"} initialAge={30} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
