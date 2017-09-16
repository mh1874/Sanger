import React from 'react'
import {NavLink} from 'react-router-dom'

const Footer = () => (
    <div className="footer">
      <ul className="footer-ul">
        <li>
        	<NavLink exact activeClassName="selected" to="/">
        		<i className="iconfont">&#xe66f;</i>
        	</NavLink>
        	<span>首页</span>
        </li>
        <li>
        	<NavLink activeClassName="selected" to="/classify">
        		<i className="iconfont">&#xe502;</i>
        	</NavLink>
        	<span>分类列表</span>
        </li>
        <li>
        	<NavLink activeClassName="selected" to="/community">
        		<i className="iconfont">&#xe88c;</i>
        	</NavLink>
        	<span>社区</span>
        </li>
        <li>
        	<NavLink activeClassName="selected" to="/my">
        		<i className="iconfont">&#xe60d;</i>
        	</NavLink>
        	<span>我的</span>
        </li>
      </ul>
    </div>
)
export default Footer;