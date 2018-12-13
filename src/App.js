import React, { Component } from 'react';
import Typed from 'typed.js';
import './App.css';
import NavBar from './components/NavBar.js'

class App extends Component {

  constructor() {
    super()

    this.state = {
      introPhrase: ["Hello there! Glad to meet you. Welcome to the world of my portfolio.Select where you'd like to go."]
    }
  }

  componentDidMount(){
    const strings = this.state.introPhrase

    const options = {
      strings: strings,
      typeSpeed: 40
    };

    this.typed = new Typed(this.el, options);
  }

  componentWillUnmount() {
    // Make sure to destroy Typed instance on unmounting
    // to prevent memory leaks
    this.typed.destroy();
  }


  // displayNavBar = () => {
  //   setTimeout(function(){
  //     return (<NavBar />)
  //   }, 3000)
  // }



  render() {
    return (
      <div className="App">
      <div className="titles">
        <label>Michael Carlos</label>
        <p>Full Stack Web Developer</p>
      </div>
      <div className="sprite-box">
        <img className="sprite-man" src="/Walk.gif" alt=""/>
      </div>
        <div className="intro-container">
          <div className="container is-dark with-title">
            <p className="title">Welcome!</p>
            <p ref={(el) => { this.el = el; }}></p>
          </div>
        </div>
        <NavBar/>
      </div>
    );
  }
}

export default App;
