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
      <div className="proj">
        <div className="proj-info">
          <label>Palis</label>
          <p className="proj-desc">Search an artist, movie, band, television show, etc. & this application provides similar genre based options.</p>
          <div className="link-icons">
            <a href="https://www.youtube.com/watch?v=pcJhff5PVvM&t=1s" target="_blank">
              <img className="youtube-icon" src="/youtube_icon.png" alt=""/>
            </a>
            <a href="https://github.com/mikepcarlos/palis-backend" target="_blank">
              <img className="githubby" src="/gittyback.svg" alt=""/>
            </a>
            <a href="https://github.com/mikepcarlos/palis-frontend" target="_blank">
              <img className="githubby" src="/gittyfront.png" alt=""/>
            </a>
          </div>
        </div>
      </div>,
      <div className="proj">
        <div className="proj-info">
          <label>Gttr</label>
          <p className="proj-desc">A web app that allows users the ability to create outfits based on different articles of clothing and post them to their profile, showcasing that users style.</p>
          <div className="link-icons">
            <a href="https://www.youtube.com/watch?v=jtLFmWrvudU&t=1s" target="_blank">
              <img className="youtube-icon" src="/youtube_icon.png" alt=""/>
            </a>
            <a href="https://github.com/mikepcarlos/gttr-mod2-project" target="_blank">
              <img className="githubby" src="/gittyback.svg" alt=""/>
            </a>
          </div>
        </div>
      </div>
    ]

    if (this.state.currentProj === ""){
      return (
          <div className="proj-open-info">
            <p>Please select which project you'd like to see from the menu below</p>
          </div>
      )
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
        <div id="unit">
          <div id="frame">
            <div id="screen">
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
              </div>
              <div className="proj-box">
                {this.chooseProject()}
              </div>
            </div>
          </div>
          <div id="panel">
            <div id="dial1"></div>
            <div id="dial2"></div>
            <div id="speaker"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects
