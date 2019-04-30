import React, { Component } from 'react';
import './App.css';
import {Header} from './components/header';
import {Home} from './components/home';

class App extends Component {
  render() {
    var user = {
      hobbies:["Sports","Reading"]
    }
    return (
        <div className="container">
          <div className="row">
            <div className="col-xs-10">
              <Header/>
            </div>
            <div className="col-xs-10">
              <Home name={"Max"} age={27} user={user} >
                <span>This is transcluded text</span>
              </Home>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
