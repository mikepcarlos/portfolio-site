import React, { Component } from 'react';
import { Switch } from 'react-router-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import AboutMe from './about_me.js'
import Blogs from './blogs.js'
import Contact from './contact_me.js'
import Projects from './projects.js'

class NavBar extends Component {
  render(){
    return(
      <Router>
        <div className="navbar-container">
          <div className="radios">
            <label>
              <input type="radio" className="radio" name="answer"/>
              <span>About Me</span>
            </label>
            <label>
              <input type="radio" className="radio" name="answer"/>
              <span>Projects</span>
            </label>
            <label>
              <input type="radio" className="radio" name="answer"/>
              <span>Blogs</span>
            </label>
            <label>
              <input type="radio" className="radio" name="answer"/>
              <span>Contact</span>
            </label>
          </div>
        </div>
      </Router>
    )
  }
}

export default NavBar
