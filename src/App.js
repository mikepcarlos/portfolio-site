import React, { Component } from 'react';
// import Typed from 'typed.js';
import './App.css';
// import NavBar from './components/NavBar.js'
import Controller from './components/controller_nav.js'
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AboutMe from './components/about_me.js'
import Blogs from './components/blogs.js'
import Contact from './components/contact_me.js'
import Projects from './components/projects.js'
import Home from './components/home.js'

class App extends Component {
  //
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     introPhrase: ["Hello there! Glad to meet you. Welcome to the world of my portfolio.Select where you'd like to go."]
  //   }
  // }
  //
  // componentDidMount(){
  //   const strings = this.state.introPhrase
  //
  //   const options = {
  //     strings: strings,
  //     typeSpeed: 40
  //   };
  //
  //   this.typed = new Typed(this.el, options);
  // }
  //
  // componentWillUnmount() {
  //   // Make sure to destroy Typed instance on unmounting
  //   // to prevent memory leaks
  //   this.typed.destroy();
  // }
  //
  //
  // // displayNavBar = () => {
  // //   setTimeout(function(){
  // //     return (<NavBar />)
  // //   }, 3000)
  // // }
  //
  //

  render() {
    return (
      <Router>
        <div className="App">
          <div className="routes">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={AboutMe} />
              <Route exact path="/projects" component={Projects} />
              <Route exact path="/blogs" component={Blogs} />
              <Route exact path="/contact" component={Contact} />
            </Switch>
          </div>
            <Controller/>
        </div>
      </Router>
    );
  }
}

export default App;
