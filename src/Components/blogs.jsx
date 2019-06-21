import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

import YouTube from "react-youtube";

class Blogs extends Component {
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
        <div className="youtube-container">
          <Spring
            from={{ marginTop: -1000 }}
            to={{ marginTop: 0 }}
            delay="1500"
          >
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
        </div>
        <div className="youtube-container">
          <Spring
            from={{ marginTop: -1000 }}
            to={{ marginTop: 0 }}
            delay="1500"
          >
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
        </div>
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
