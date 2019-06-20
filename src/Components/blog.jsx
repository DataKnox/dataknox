import React, { Component } from "react";

class Blog extends Component {
  state = {};

  async populateBlog() {
    const blogId = this.props.match.params.id;
    if (blogId === null) return <p>Something went wrong</p>;

    fetch(blogId);
  }

  async componentWillMount() {
    await this.populateBlog();
  }

  render() {
    return null;
  }
}

export default Blog;
