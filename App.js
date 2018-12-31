import React, { Component } from 'react';
import Example from "./Example"
import Header from "./Header"
import {BrowserRouter as Router} from "react-router-dom"
import Route from 'react-router-dom/Route'
class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Route path ="/"  render={
              ()=>{ 
                return <div className = "intro">
                  <Header />
                  <img className = "intro-picture" src = {require("./Intro.png")}/>
                    <div className = "center-it">
                      "Ask not what your country can do for you, but ask does your country even lift." - John F. Gainedy
                    </div>
                  </div>
              }
            }/>   
        <Route path ="/gainZ" render={
              ()=>{ 
                return <div>
                  <Example />

                  </div>
              }
            }/>      
        </div>
      </Router>
    );
  }
}

export default App;
