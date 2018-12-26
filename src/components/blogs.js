import React from 'react'

const Blogs = () => {
  return(
    <div>
      <div className="titles">
        <label>Blogs</label>
        <div className="blog-box">
          <div className="bloggy one">
            <label>Blog #1</label>
            <p>Less is More</p>
            <img src="/8bitmedium2.png" alt=""/>
          </div>
          <div className="bloggy two">
            <label>Blog #2</label>
            <p>From Humble Beginnings</p>
            <img src="/8bitmedium2.png" alt=""/>
          </div>
          <div className="bloggy three">
            <label>Blog #3</label>
            <p>In with the Old...</p>
            <img src="/8bitmedium2.png" alt=""/>
          </div>
          <div className="bloggy four">
            <label>Blog #4</label>
            <p>Making the Most of JavaScript</p>
            <img src="/8bitmedium2.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
