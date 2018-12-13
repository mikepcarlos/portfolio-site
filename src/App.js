import React, { Component } from 'react';
import Typed from 'typed.js';
import './App.css';
import NavBar from './components/NavBar.js'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AboutMe from './components/about_me.js'
import Blogs from './components/blogs.js'
import Contact from './components/contact_me.js'
import Projects from './components/projects.js'

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
      <Router>
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
          <div className="routes">
            <Switch>
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
