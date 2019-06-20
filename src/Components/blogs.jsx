import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

import YouTube from "react-youtube";

class Blogs extends Component {
  state = {};
  render() {
    const opts = {
      height: "340",
      width: "600",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };
    return (
      <React.Fragment>
        <Spring from={{ marginTop: -1000 }} to={{ marginTop: 0 }} delay="1500">
          {props => (
            <div style={props}>
              <YouTube
                videoId="F9j2aiqK0tw"
                opts={opts}
                onReady={this._onReady}
                className="main-youtube"
              />
            </div>
          )}
        </Spring>
        <Spring from={{ marginTop: -1000 }} to={{ marginTop: 0 }} delay="1500">
          {props => (
            <div style={props}>
              <YouTube
                videoId="bbkBJxOo4gg"
                opts={opts}
                onReady={this._onLoad}
                className="second-youtube"
              />
            </div>
          )}
        </Spring>
      </React.Fragment>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }

  _onLoad(event) {
    event.target.pauseVideo();
  }
}

export default Blogs;
