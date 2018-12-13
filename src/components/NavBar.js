import React, { Component } from 'react';
import { withRouter } from "react-router";

class NavBar extends Component {

  goToAboutMe = () => {
    this.props.history.push("/about")
  }

  goToProjects = () => {
    this.props.history.push("/projects")
  }

  goToBlogs = () => {
    this.props.history.push("/blogs")
  }

  goToContact = () => {
    this.props.history.push("/contact")
  }

  render(){
    return(
      <div className="navbar-container">
        <div className="radios">
          <label>
            <input type="radio" className="radio" name="answer"/>
            <span onClick={this.goToAboutMe}>About Me</span>
          </label>
          <label>
            <input type="radio" className="radio" name="answer"/>
            <span onClick={this.goToProjects}>Projects</span>
          </label>
          <label>
            <input type="radio" className="radio" name="answer"/>
            <span onClick={this.goToBlogs}>Blogs</span>
          </label>
          <label>
            <input type="radio" className="radio" name="answer"/>
            <span onClick={this.goToContact}>Contact</span>
          </label>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
