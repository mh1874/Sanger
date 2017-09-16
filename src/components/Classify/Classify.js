import React from 'react';
import {NavLink} from 'react-router-dom'
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


export default class Classify extends React.Component {
	constructor(){
		super();
		this.state = {list: []};
	}
	componentDidMount(){
		fetch("/api/getdataGood").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
	}
	render() {
		return (
			<div className="classify">
					<Header />
					<ul className="classify-ul">
						
						<li ref="btn1">蛋糕</li>
						<li ref="btn2">冰淇淋</li>
						<li ref="btn3">咖啡</li>
						<li ref="btn4">设计师礼品</li>
	        			<li ref="btn5">企业专区</li>
					</ul>
					<div className="container">
						
					</div>
					<Footer />
			</div>
		);
	}
}

