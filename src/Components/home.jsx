import React, { Component } from "react";
import Section from "./Section";
import section2text from "../SectionData/section2";
import section3text from "../SectionData/section3";
import section1text from "../SectionData/section1";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Section
          title="Welcome"
          subtitle={section1text}
          dark={true}
          id="home"
          className="section"
          blogs={true}
        />

        <Section
          title="This Guy"
          subtitle={section2text}
          dark={false}
          id="about"
          className="section"
          blogs={false}
          about={true}
        />
        <Section
          title="My Doings"
          subtitle={section3text}
          dark={false}
          id="courses"
          className="section"
          blogs={false}
          courses={true}
        />
        <Section
          title="Get At Me"
          subtitle={section2text}
          dark={false}
          id="social"
          className="section"
          blogs={false}
          contacts={true}
        />
      </React.Fragment>
    );
  }
}

export default Home;
