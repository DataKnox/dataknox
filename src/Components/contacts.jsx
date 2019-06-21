import React, { Component } from "react";
import Facebook from "../Assets/Facebook.png";
import Youtubeimg from "../Assets/Youtube.png";
import Twitter from "../Assets/Twitter.png";
import Linkedin from "../Assets/LinkedIn.png";

class Contacts extends Component {
  state = {};
  render() {
    return (
      <div>
        <a
          href="https://www.youtube.com/channel/UCi7SD3zfCjkiDWvSFthIQSg?sub_confirmation=1"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Youtubeimg}
            height="auto"
            width="auto"
            alt="Youtube"
            className="list-icon"
          />
        </a>
        <br />
        <a
          href="https://twitter.com/CBTKnoxH"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Twitter}
            height="auto"
            width="auto"
            alt="Twitter"
            className="list-icon"
          />
        </a>
        <br />
        <a
          href="https://www.facebook.com/DataKnox"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Facebook}
            height="auto"
            width="auto"
            alt="facebook"
            className="list-icon"
          />
        </a>
        <br />
        <a
          href="https://linkedin.com/in/knox-hutchinson"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Linkedin}
            height="auto"
            width="auto"
            alt="Linkedin"
            className="list-icon"
          />
        </a>
      </div>
    );
  }
}

export default Contacts;
