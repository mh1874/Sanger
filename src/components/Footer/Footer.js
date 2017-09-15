import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


const Footer = () => (
    <div className="footer">
      <ul className="footer-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/classify">Classify</Link></li>
        <li><Link to="/community">Community</Link></li>
        <li><Link to="/my">My</Link></li>
      </ul>
    </div>
)
export default Footer;