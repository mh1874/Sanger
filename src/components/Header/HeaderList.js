import React from 'react'
import {Link} from 'react-router-dom'


class headerList extends React.Component {
	render() {
		return (
			<div className="headerList">
		      <Link className="header_btn" to="../Classify/Classify">
		        <span>返回</span>
		      </Link>
		      <p>多口味....</p>
		    </div>
		);
	}
}

export default headerList
