import React from 'react'

const Projects = () => {
  return(
    <div>
      <div className="titles">
        <label>Projects</label>
      </div>
      <div className="proj-box">
        <div className="proj-1">
          <img src="/8bitpalis.jpg" alt=""/>
          <div className="proj-1-info">
            <label>Palis</label>
            <ul>Built with: React // JavaScript // Rails // CSS // HTML</ul>
            <p>Search an artist, movie, band, television show, etc. & this application provides similar genre based options.</p>
          </div>
          <div className="link-icons-1">
            <img className="youtube-icon" src="/youtube_icon.png" alt=""/>
            <i class="icon github is-medium"></i>
          </div>
        </div>
        <div className="proj-2">
          <img src="/8bitgttr.jpg" alt=""/>
          <div className="proj-2-info">
            <label>Gttr</label>
            <ul>Built with: Rails // CSS // HTML </ul>
            <p>A web app that allows users the ability to create outfits based on different articles of clothing and post them to their profile, showcasing that users style.</p>
          </div>
          <div className="link-icons-2">
            <img className="youtube-icon" src="/youtube_icon.png" alt=""/>
            <i class="icon github is-medium"></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
