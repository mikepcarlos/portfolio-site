import React from 'react'

const Contact = () => {
  return(
    <div>
      <div className="titles">
        <label>Contact</label>
        <div className="contact-info">
          <img className="gameover" src="/game_over.gif" alt=""/>
          <p>Email: michaelpcarlos@gmail.com</p>
          <p>Click below for reference</p>
        </div>
        <div className="personal-pages">
          <a href="https://www.linkedin.com/in/michael-carlos/" target="_blank">
            <img src="/linkedin.png" alt=""/>
          </a>
          <a href="https://github.com/mikepcarlos" target="_blank">
            <img src="/GitHubby.png" alt=""/>
          </a>
          <a href="https://medium.com/@michaelpcarlos" target="_blank">
            <img src="/8bitmedium2.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
