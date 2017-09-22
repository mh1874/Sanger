import React from 'react'
import {Link} from 'react-router-dom'
import jsonp from 'jsonp'


class Header extends React.Component {
	constructor() {
		super();
		this.geolocation = this.geolocation.bind(this);
		this.state = {
			yourPosition: ""
		}
		this.geolocation();
	}
	componentDidMount() {
//		var map = new window.BMap.Map("position")
//		console.log(map)
	}
	geolocation() {
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((position) => {
				var url = `http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location=${position.coords.latitude},${position.coords.longitude}&output=json&pois=1&ak=09BMikHzasSofh3i3gXSENEwDvSVkQQ2`;
				jsonp(url, null, (err, data) => {
					if (err) {
					    console.error(err.message);
					  } else {
					    this.setState({ //让页面上数据更新
					 		yourPosition: data["result"]["formatted_address"]
					 	}) 			
					  }
				})
			});
		}	
	}
	render() {
		return (
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
		        	<span id="position">{this.state.yourPosition}</span>
		        </li>
		      </ul>
		    </div>
		);   
	}
}
export default Header;