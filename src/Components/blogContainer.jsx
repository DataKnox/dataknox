import React, { Component } from "react";

class BlogContainer extends Component {
  state = {};
  render() {
    const { excerpt, title, date } = this.props;
    return (
      <div className="blogExcerpt">
        <h1>{title}</h1>
        <h4>Published: {date}</h4>
        <p>{excerpt}</p>
      </div>
    );
  }
}

export default BlogContainer;
