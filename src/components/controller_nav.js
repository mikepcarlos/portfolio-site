import React, { Component } from 'react';
import { withRouter } from "react-router";

class Controller extends Component {

  constructor(){
    super()

    this.state = {
      hideMe: {
        display: 'none'
      }
    }
  }

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
  render(){
    return(
      <div className="cable">
        <div className="controller">
        <div className="navcon-box">
          <p className="NavCon">Nav-Con</p>
        </div>
          <div className="centerBlue">
            <div className="home-icon">
              <i onClick={this.goHome} className="fas fa-home"></i>
            </div>
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
                <div onClick={this.goToProjects} className="cornerLeft1">
                  <p>P</p>
                </div>
              </div>
              <div className="cornerRightBack1">
                <div onClick={this.goToBlogs} className="cornerRight1">
                  <p>B</p>
                </div>
              </div>
            </div>
            <div className="backButton2Center">
              <div className="cornerLeftBack2">
                <div onClick={this.goToAboutMe} className="cornerLeft2">
                  <p>A</p>
                </div>
              </div>
              <div className="cornerRightBack2">
                <div onClick={this.goToContact} className="cornerRight2">
                  <p>C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Controller)
