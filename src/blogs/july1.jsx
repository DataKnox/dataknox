import React, { Component } from "react";
import adsense from "../Assets/adsense.png";

class July1 extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="blogcontainer">
          <div className="blogpost">
            <h4>Google AdSense Woes</h4>
            <p>
              Can we talk about how tough it is to get approved by Google
              AdSense for a moment?
            </p>
            <p>
              Content creators, whether bloggers or YouTubers, want to take
              advantage of how simple it is to work with Google AdSense to
              <br />
              generate a little extra cashflow.
            </p>
            <p>
              You create your google account, fill out a few quick question,
              paste in some code to the HEAD block of your HTML <br /> and
              you're off to the races. You'll be able to have some low key ads,
              like the ones you see before YouTube videos <br /> and Google
              issues a payout for any revenue received from the ads.
            </p>
            <p>Simple, right?</p>
            <p>Wrong.</p>
            <p>
              To get your website approved by Google AdSense, you have to have a
              large amount of helpful, relevant, original content.
            </p>
            <p>
              Now let me stop you right there because I know where your head is
              going - No. I am not making this website and blog to generate ad
              revenue.
            </p>
            <p>
              My honest intent is if I stumble across something cool, or
              helpful, I'm going to post it (wait till you see my next post!)
            </p>
            <p>
              It would just be super awesome if you received more info than "No
              Content."
            </p>
            <img src={adsense} alt="adenseerror" max-width="1vw" />
            <p>
              So what is it? It's more than likely a lack of interesting
              content.
            </p>
            <p>Guess I just have to keep posting more blogs :)</p>
            <p>
              <a href="https://knoxhutchinson.com">Return Home</a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default July1;
