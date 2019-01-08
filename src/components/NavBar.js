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


      <div className="cable">
        <div className="controller">
          <div className="navcon-box">
            <p className="NavCon">Nav-Con</p>
          </div>
          <div className="centerBlue">
            <div className="centerLeft">
            </div>
            <div className="centerRight">
            </div>
          </div>
          <div className="centerStart">
            <div className="SLeft">
            </div>
            <div className="SRight">
            </div>
          </div>
          <div className="centerSelect">
            <div className="SLeft">
            </div>
            <div className="SRight">
            </div>
          </div>

          <div className="controllerLeft">
            <div className="circle">
              <div className="circleLeft">
              </div>
            </div>
            <div className="crossCenter">
              <div className="crossTop">
              </div>
              <div className="crossBottom">
              </div>
              <div className="crossLeft">
              </div>
              <div className="crossRight">
              </div>
              <div className="crossCircle">
              </div>
            </div>
          </div>
          <div className="controllerRight">
            <div className="controllerRightCircle">
            </div>
            <div className="backButton1Center">
              <div className="cornerLeftBack1">
                <div className="cornerLeft1">
                </div>
              </div>
              <div className="cornerRightBack1">
                <div className="cornerRight1">
                </div>
              </div>
            </div>
            <div className="backButton2Center">
              <div className="cornerLeftBack2">
                <div className="cornerLeft2">
                </div>
              </div>
              <div className="cornerRightBack2">
                <div className="cornerRight2">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavBar)
