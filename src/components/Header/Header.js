import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => (
    <div className="header">
      <ul className="header-ul">
        <li className="header-empty"></li>
        <li className="header-logo">
        	<Link to="/">
        		Sanger
        	</Link>	
        </li>
        <li className="header-position">
        	<i className="iconfont">&#xe6fc;</i>
        	<span className="position"></span>
        </li>
      </ul>
    </div>
)
export default Header;