import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component {
	constructor() {
		super();
		this.geolocation = this.geolocation.bind(this);
		this.state = {
			yourPosition: []
		}
		this.geolocation();
	}
	componentDidMount() {
	}
	geolocation() {
		//未实现定位 疑问在有经纬度 但不能拿到地理位置
		if(navigator.geolocation){
			navigator.geolocation.getCurrentPosition((position) => {
				let url = `/v2/?callback=renderReverse&location=${position.coords.longitude},${position.coords.latitude}&output=json&pois=1&ak=09BMikHzasSofh3i3gXSENEwDvSVkQQ2`;
				fetch(url).then((res) => {
					console.log(res)
				 	return res.json();
				 }).then((data)=>{
				 	this.setState({ //让页面上数据更新
				 		yourPosition: data
				 	})
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
		        	<span className="position">{this.state.yourPosition}</span>
		        </li>
		      </ul>
		    </div>
		);   
	}
}
export default Header;