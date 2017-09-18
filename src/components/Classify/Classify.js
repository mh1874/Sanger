import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import {Link} from 'react-router-dom';


//引入betterScroll
import BScroll from 'better-scroll'

export default class Classify extends React.Component {
	constructor(){
		super();
		this.state = {list: []};
		this.addIce = this.addIce.bind(this)
		this.addCoffee = this.addCoffee.bind(this)
		this.addCake = this.addCake.bind(this)
	}
	componentDidMount() {
		this._menuScroll();
	}
	_menuScroll() {
		new BScroll(this.refs.classifyWrapper, {
			click: true,
			scrollX: true
		})
	}
	addIce(){
		fetch("/api/getdataAaa").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
	}
	addCoffee(){
		fetch("/api/getdataGood").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
	}
	addCake(){
		fetch("/api/getdataGood").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data.price);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
	}
	render() {
		return (
			<div className="classify">
					<Header />
					<div className="classifyWrapper" ref="classifyWrapper">
						<ul className="classify-ul">
							<Link to="../DetailList/DetailList">
								<li>蛋糕</li>
							</Link>
							<li onClick={this.addIce}>冰淇淋</li>
							<li onClick={this.addCake}>咖啡</li>
							<li onClick={this.addIce}>设计师礼品</li>
		        			<li onClick={this.addCake}>企业专区</li>
						</ul>
					</div>	
					<div className="container">
						<span className="detail_car">
							<i className="iconfont">&#xe501;</i>
						</span>
						<ul>
							{
								this.state.list.map((item,index)=>{
									return <li key={item._id}>
												<img src={item.headImg} />
												<div>
													<h2>{item.englishName}</h2>
													<h2>{item.chineseName}</h2>
													<p>{item.distribution}</p>
													<div className="bottom">
														<div className="price">¥198.00</div>
														<div className="shoppingCart">
															<i className="iconfont">&#xe501;</i>
														</div>
													</div>
												</div>
										   </li>
								})
							}
						</ul>
					</div>

					<Footer />
			</div>
		);
	}
}


