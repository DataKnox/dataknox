import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <br />
        <h3 id="about-header">Welcome to my page</h3>
        <br />
        <div id="about-body">
          <p>I didn't always want to be in I.T. That wasn't the dream.</p>
          <p>
            I actually wanted to work on Wall Street. Funny how things work out.
          </p>
          <p>
            Graduating with an Econ degree in 2008, it wasn't exactly the best
            job market for economists and bankers.
          </p>
          <p>
            There were a lot of dark times, but my wife was my rock. She
            encouraged me and helped me through it.
          </p>
          <p>
            I always had a knack for tech, especially data analysis. So I
            pursued that, and learned Tableau.
          </p>
          <p>
            Then I learned SQL - what good was data viz if I couldn't retrieve
            the data properly?
          </p>
          <p>
            Then I learned networking - what good is a server if they can't
            communicate with each other?
          </p>
          <p>
            I achieved my Net+, CCNA: Routing and Switching, CCNA: Security,
            JNCIA-JUNOS, and CMNO.
          </p>
          <p>
            Then I decided to check out server stuff, so I got my MCSA: Windows
            Server 2016.
          </p>
          <p>
            But cloud is really the final frontier. So I upgraded that to MCSE:
            Cloud and Infrastructure.
          </p>
          <p>
            And cloud really shines in Platform as a Service (PaaS) offerings,
            so I learned C#, ASP.NET, ReactJS, and NoSQL.
          </p>
          <p>(This site is ReactJS + NodeJS)</p>
          <p>
            CBT Nuggets carried me every step of the way through this journey. I
            am so lucky that they let me help others now.
          </p>
          <p>Hit me up on Social anytime and check my courses below</p>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
