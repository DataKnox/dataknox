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
          title="Welcome to Data Knox. More to come."
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
          about={true}
        />
        <Section
          title="My Doings - I.T. Training on CBT Nuggets"
          subtitle={section3text}
          dark={false}
          id="courses"
          className="section"
          courses={true}
        />
        <Section
          title="Get At Me"
          subtitle={section2text}
          dark={false}
          id="social"
          className="section"
          contacts={true}
        />
         <Section
          title="Blogs"
          subtitle={section2text}
          dark={false}
          id="blog"
          className="section"
          blog={true}
        />
        <Section
        title="Privacy"
        id="privacy"
        className="privacy"
        privacy={true}
        />
      </React.Fragment>
    );
  }
}

export default Home;
