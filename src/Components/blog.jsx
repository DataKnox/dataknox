import React, { Component } from "react";

class Blog extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <div>
          <h4> Recent Blogs</h4>
          <ul>
            <li>
              <a href="/blogs/june20" className="bloglinks">
                June 20, 2019 - Learn to Code!
              </a>
            </li>
            <li>
              <a href="/blogs/june21" className="bloglinks">
                June 21 - WHY Learn to Code?
              </a>
            </li>
            <li>
              <a href="/blogs/june22" className="bloglinks">
                June 22 - This website, ReactJS
              </a>
            </li>
            <li>
              <a href="/blogs/june25" className="bloglinks">
                June 25 - vSphere or Hyper-V?
              </a>
            </li>
            <li>
              <a href="/blogs/june28" className="bloglinks">
                June 28 - YouTube coming soon
              </a>
            </li>
            <li>
              <a href="/blogs/july1" className="bloglinks">
                July 1 - Google AdSense
              </a>
            </li>
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
