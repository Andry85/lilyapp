import React from 'react';
import './Footer.css';



class Footer extends React.Component {
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer__inner">
          <p className="footer__copy">© 2020. All rights reserved.</p>
          <ul className="social">
            <li>
              <a className="social__linkedin" href="https://www.linkedin.com/">linkedin</a>
            </li>
            <li>
              <a className="social__behance" href="https://www.behance.net/">behance</a>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;


