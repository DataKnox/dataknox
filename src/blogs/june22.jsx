import React, { Component } from "react";

class June22 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="blogcontainer">
          <div className="blogpost">
            <h4>June 22, 2019 - This Website</h4>
            <p>
              As I've already pointed out on the About page,{" "}
              <a
                href="https://github.com/DataKnox/dataknox"
                target="_blank"
                rel="noopener noreferrer"
              >
                the code for this website
              </a>{" "}
              is open to the public. There's nothing secret there.{" "}
            </p>
            <p>
              First thing to point out, for those new to Web Development, is
              this is a static website.
            </p>
            <p>
              That means that interactions with this website don't require any
              sort of backend datasource - think like a shopping cart full of
              products. <br />
              Those products would all have a bunch of details that would be
              changing all the time, like quantity and price. To store that
              information, <br />
              businesses would need a database, and the websites we use to shop
              for products would be constantly refreshing what they display from
              the
              <br /> database.
            </p>
            <p>
              So this website isn't that. What you see is what you get. No
              backend datasources to complicate things.
            </p>
            <p>
              But this website is quite snappy and quick. Clicking on links,
              they load or scroll right to the correct place. How's that work?
            </p>
            <p>
              Facebook invented ReactJS 5 or 6 years ago for the sole purpose of
              making your website feel like it's just one page.
            </p>
            <p>
              ReactJS is variant of JavaScript, that combines the dynamic and
              fluid functionality of JavaScript, HTML, and CSS all into one
              simplified language.
            </p>
            <p>
              Remember that whole learn object-oriented programming rant I went
              on? Yeah, it's applicable here, because it's alllll JavaScript.
            </p>
            <p>
              React "competes" with other JavaScript variants (called Single
              Page Applications) like Angular and Vue. So why'd I pick React?
            </p>
            <p>
              One of the best things about React is that it is modular. If you
              have a piece of code that can be reused somewhere else, it's SUPER
              easy to reuse it.
            </p>
            <p>
              And most importantly, people are <strong>sharing</strong> their
              reusable code on GitHub like crazy.{" "}
              <a
                href="https://www.npmjs.com/package/react-scroll"
                target="_blank"
                rel="noopener noreferrer"
              >
                This
              </a>{" "}
              and{" "}
              <a
                href="https://github.com/react-spring/react-spring"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>{" "}
              are what I used to animate my home page.
            </p>
            <p>
              So how do you learn React?{" "}
              <a
                href="https://www.cbtnuggets.com/learn/it-training/reactjs"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                CBT Nuggets of course.
              </a>
            </p>
            <p>
              <a href="https://knoxhutchinson.com">Return Home</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default June22;
