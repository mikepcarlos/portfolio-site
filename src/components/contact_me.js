import React from 'react'

const Contact = () => {
  return(
    <div>
      <div className="titles">
        <label>Contact</label>
        <div className="contact-info">
          <p>Email: michaelpcarlos@gmail.com</p>
          <p>Click below for reference</p>
          <img className="gameover" src="/game_over.gif" alt=""/>
        </div>
        <div className="personal-pages">
          <a href="https://www.linkedin.com/in/michael-carlos/">
            <img src="/linkedin.png" alt=""/>
          </a>
          <a href="https://github.com/mikepcarlos">
            <img src="/GitHubby.png" alt=""/>
          </a>
          <a href="https://medium.com/@michaelpcarlos">
            <img src="/8bitmedium2.png" alt=""/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
