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

  goHome = () => {
    this.props.history.push("/")
  }

  whichContainer = () => {
    if (this.props.history.location.pathname === "/"){
      return "navbar-container"
    } else {
      let newClass = this.props.history.location.pathname.substring(1)
      return `${newClass}-container`
    }
  }

  whichRadio = () => {
    if (this.props.history.location.pathname === "/"){
      return "radios"
    } else {
      let newClass = this.props.history.location.pathname.substring(1)
      return `${newClass}-radios`
    }
  }

  render(){
    return(
      <div className={this.whichContainer()}>
        <div className={this.whichRadio()}>
          <label>
            <input type="radio" className="radio" name="answer"/>
            <span onClick={this.goToAboutMe}>About</span>
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
          <label>
            <input type="radio" className="radio" name="answer"/>
            <span onClick={this.goHome}>Home</span>
          </label>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
