import React, { Component } from "react";
import { Link } from "react-scroll";

export default class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-light fixed-top transparent"
        id="nav1"
      >
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="navbar-brand"
        >
          Home
        </Link>

        <Link
          activeClass=""
          to="about"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link"
        >
          About Me
        </Link>
        <Link
          activeClass=""
          to="courses"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link"
        >
          Courses
        </Link>
        <Link
          activeClass=""
          to="social"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link"
        >
          Social
        </Link>
        <Link
          activeClass=""
          to="blog"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link"
        >
          Blog
        </Link>
        <Link
          activeClass=""
          to="privacy"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="nav-link"
        >
          Privacy
        </Link>
      </nav>
    );
  }
}
