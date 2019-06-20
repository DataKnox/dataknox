import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";
import About from "./about";
import Courses from "./courses";
import Blogs from "./blogs";
import Contacts from "./contacts";

class Section extends Component {
  render() {
    const { title, dark, id, blogs, courses, about, contacts } = this.props;

    return (
      <div className={"section" + (dark ? " section-dark" : "")}>
        <div className="section-content" id={id} style={{ marginLeft: 20 }}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay="500">
            {props => <h1 style={props}>{title}</h1>}
          </Spring>
          <div className="optional-render">
            {blogs && <Blogs />}
            {about && <About />}
            {courses && <Courses />}
            {contacts && <Contacts />}
          </div>
        </div>
      </div>
    );
  }
}

export default Section;
