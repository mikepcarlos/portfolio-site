import React, { Component } from 'react';
import Typed from 'typed.js';

class Home extends Component {

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

  render() {
    return (
      <div className="home">
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
      </div>
    );
  }
}

export default Home;
