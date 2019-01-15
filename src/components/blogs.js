import React from 'react'

const Blogs = () => {
  return(
    <div>
      <div className="titles">
        <label>Blogs</label>
        <div className="blogbox">
          <div className="blogbox-top">
            <label>TITLE</label>
            <label>LINK</label>
          </div>
          <div className="bloggy">
            <p>From Humble Beginnings</p>
            <a href="https://medium.com/@michaelpcarlos/from-humble-beginnings-47d54175cae9" target="_blank">
              <img src="/8bitmedium2.png" alt=""/>
            </a>
          </div>
          <div className="bloggy">
            <p>In with the Old..</p>
            <a href="https://medium.com/@michaelpcarlos/in-with-the-old-in-with-the-new-f0b4614f7dbf" target="_blank">
              <img src="/8bitmedium2.png" alt=""/>
            </a>
          </div>
          <div className="bloggy">
            <p>The Most of JavaScript</p>
            <a href="https://medium.com/@michaelpcarlos/making-the-most-of-javascript-aa52a9629634" target="_blank">
              <img src="/8bitmedium2.png" alt=""/>
            </a>
          </div>
          <div className="bloggy">
            <p>Express Servers</p>
            <a href="https://medium.com/@michaelpcarlos/setting-up-an-express-server-6521a7357189">
              <img src="/8bitmedium2.png" alt=""/>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
