import React, { Component } from 'react';
import Typed from 'typed.js';

class Home extends Component {

  constructor() {
    super()

    this.state = {
      introPhrase: ["Welcome to the world of my portfolio. Use the Nav-Con to select where you'd like to go. P leads to the projects page. A leads to the about me page. B leads to the blogs page. C leads to the contact page."]
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
        <div className="home-titles">
          <label>Michael Carlos</label>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="sprite-box">
          <img className="sprite-man" src="/Walk.gif" alt=""/>
        </div>
        <div className="intro-container">
          <div className="container is-dark with-title">
            <p className="title">Welcome!</p>
            <p className="intro-message" ref={(el) => { this.el = el; }}></p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
