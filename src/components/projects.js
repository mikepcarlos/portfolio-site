import React, { Component } from 'react';

class Projects extends Component {

  constructor(){
    super()

    this.state = {
      currentProj: ""
    }
  }

  setProject = (event) => {
    const name = event.target.parentElement.children[1].children[0].name
    this.setState({
      currentProj: name
    })
  }

  chooseProject = () => {
    let projectContainer = [
      <div className="proj-1">
        <div className="proj-1-info">
          <label>Palis</label>
          <ul>Built with: React // JavaScript // Rails // CSS // HTML</ul>
          <p>Search an artist, movie, band, television show, etc. & this application provides similar genre based options.</p>
          <div className="link-icons-1">
            <img className="youtube-icon" src="/youtube_icon.png" alt=""/>
            <i className="icon github is-medium"></i>
          </div>
        </div>
      </div>,
      <div className="proj-2">
        <div className="proj-2-info">
          <label>Gttr</label>
          <ul>Built with: Rails // CSS // HTML </ul>
          <p>A web app that allows users the ability to create outfits based on different articles of clothing and post them to their profile, showcasing that users style.</p>
          <div className="link-icons-2">
            <img className="youtube-icon" src="/youtube_icon.png" alt=""/>
            <i className="icon github is-medium"></i>
          </div>
        </div>
      </div>
    ]

    if (this.state.currentProj === ""){
      return projectContainer[0]
    } else if (this.state.currentProj === "palis") {
      return projectContainer[0]
    } else if (this.state.currentProj === "gttr")
      return projectContainer[1]
  }

  render () {
    return(
      <div>
        <div className="titles">
          <label>Projects</label>
        </div>
        <div className="proj-align">
          <div className="proj-select">
            <section>
              <div className="proj-nav">
                <label>
                  <input onClick={this.setProject} type="radio" className="radio" name="answer"/>
                  <span><img name="palis" src="/8bitpalis.jpg" alt=""/></span>
                </label>
                <label>
                  <input onClick={this.setProject} type="radio" className="radio" name="answer"/>
                  <span><img name="gttr" src="/8bitgttr.jpg" alt=""/></span>
                </label>
              </div>
            </section>
          </div>
          <div className="proj-box">
            {this.chooseProject()}
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
