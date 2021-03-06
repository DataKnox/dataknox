import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import About from "./about";
import Courses from "./courses";
import Blogs from "./blogs";
import Contacts from "./contacts";
import Privacy from "./privacy";
import Blog from "./blog";

class Section extends Component {
  render() {
    const {
      title,
      dark,
      id,
      blogs,
      courses,
      about,
      contacts,
      privacy,
      blog
    } = this.props;

    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id} style={{ marginLeft: 20 }}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="500">
            {props => (
              <p style={props} className="section-content">
                {title}
              </p>
            )}
          </Spring>
          <div className="optional-render">
            {blogs && <Blogs />}
            {about && <About />}
            {courses && <Courses />}
            {contacts && <Contacts />}
            {privacy && <Privacy />}
            {blog && <Blog />}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
