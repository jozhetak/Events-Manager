import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Navbar.scss'

/**
 *  Input navigation bar component of the landing/sign in/sign up pages
 */

class Navbar extends React.Component {
  render() {
    return(
      <header>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" id='navbar-override'>
          <a className="no-highlight navbar-brand" href="#">
            Events-Manager
          </a>
          <div className="collapse navbar-collapse" id="navbarText">
            <div id='float'>
              <span className="navbar-text">
                <Link id='highlight' to='/login'>SIGN IN</Link>
              </span>
              <span className="navbar-text">
                <a className="no-highlight" href='#'>|</a>
              </span>
              <span className="navbar-text">
                <Link to='/users'>SIGN UP</Link>
              </span>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default Navbar