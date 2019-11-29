import React from 'react';
import './Logo.css';
import { HashLink as Link } from 'react-router-hash-link';

class Logo extends React.Component {
  render() {
    return (
      // <a href="/" className="logo">
      //   <span className="logo__text">{this.props.name}</span>
      // </a>
      <div className="logo">
          <Link to="/">
            <span className="logo__text">{this.props.name}</span>
          </Link>
      </div>
    );
  }
}

export default Logo;
