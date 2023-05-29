import "./navbar.css";
import React, { Component } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import {
 Link
} from "react-router-dom";


export default class Navbar extends Component {
isNavShowing = false;
  constructor() {
    super();
    this.state = {
      isNavShowing: this.isNavShowing,
    };
  }


  handleNav = () => {
    this.setState({
        isNavShowing : !(this.state.isNavShowing),
    })
  }
  render() {
    return (
      <nav className="nav">
        <div className="navbar container">
          <div className="logo">
            <Link to="/">
              News<span>Media</span>
            </Link>
          </div>

          <ul
            className={`nav__items ${
              this.state.isNavShowing ? "show__nav" : "hide__nav"
            }`}
          >
            <li className="nav__link">
              <Link to="/">Home</Link>
            </li>
            <li className="nav__link">
              <Link to="/business">Business</Link>
            </li>
            <li className="nav__link">
              <Link to="/entertainment">Entertainment</Link>
            </li>
            <li className="nav__link">
              <Link to="/health">Health</Link>
            </li>
            <li className="nav__link">
              <Link to="/science">Science</Link>
            </li>
            <li className="nav__link">
              <Link to="/sports">Sports</Link>
            </li>
            <li className="nav__link">
              <Link to="/technology">Technology</Link>
            </li>
          </ul>

          <div className="nav__toggle" onClick={this.handleNav}>
           {
            this.state.isNavShowing ? <AiOutlineClose/> : <FaBars/>
           }
          </div>
        </div>
      </nav>
    );
  }
}
