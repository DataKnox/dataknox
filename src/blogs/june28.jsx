import React, { Component } from "react";
import YouTube from "react-youtube";

class June28 extends Component {
  state = {};

  render() {
    const opts = {
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <React.Fragment>
        <div className="blogcontainer">
          <div className="blogpost">
            <h4>June 28 - YouTube on the Way</h4>
            <div className="youtube-container">
              <YouTube
                videoId="ZP3VUcrZ15c"
                opts={opts}
                onReady={this._onReady}
                className="main-youtube"
              />
            </div>
            <p> It's really happening, part 2.</p>
            <p>
              I've invested a TON of time and capital into getting a great
              looking studio up and running.
            </p>
            <p>
              The sound is dialed in. The audio is dialed in. The software
              works. The last piece is lighting!
            </p>
            <p>
              I fully intend to be recording new content by the end of next
              week.
            </p>
            <p>
              I'll be recording things like career advice, mistakes I've made,
              tech news, and CBT Nuggets sneak peaks!
            </p>
            <p>
              Subscribing to my channel, and really and YouTuber's channel, goes
              a long way. That's how YouTube measures our success.
            </p>
            <p>
              The more subscribers I can gain, the more features I can unlock,
              ultimately to do great things and bring better content to you!
            </p>
            <p>So to those who have subscribed, sincerely, thank you.</p>
            <p>
              <a href="https://knoxhutchinson.com" rel="noopener noreferrer">
                Return Home
              </a>
            </p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default June28;
