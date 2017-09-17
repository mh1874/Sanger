import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
//引入轮播图UI
import { Carousel } from 'antd';
//引入betterScroll
import BScroll from 'better-scroll'

class Home extends React.Component {
	constructor() {
		super();//调用父类构造器
		this.state = {list: [],swiper : []};
	}
	componentDidMount() {
		 fetch("/api/getdataMenu").then((res) => {
		 	return res.json();
		 }).then((data)=>{
//		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
		 fetch("/api/getdataSwiper").then((res) => {
		 	return res.json();
		 }).then((data)=>{
//		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		swiper: data
		 	})
		 }).then(() => {
		 	setTimeout(() => {
		 		this._initScroll();
		 	},0)
		 })
	}
	_initScroll() {
		new BScroll(this.refs.homeWrapper, {
			click: true,
			bounce: true
		})
	}
	render() {
		return (
			<div id="homeMain" >
				<div className="home">
					<Header />
					<div className="section" ref="homeWrapper">
						<div className="homeWrapper">
							<Carousel autoplay>
								{
									this.state.swiper.map((item, index) => {
										return <li key={item._id}>
												<img src={item.src} alt={item.name}/>
											</li>
									})
								}
							</Carousel>
							<div className="menu">
								<ul>
									{
										this.state.list.map((item, index) => {
											return <li key={item._id}>
														<div><img src={item.src} /></div>
														<span>{item.name}</span>
													</li>
										})
									}
								</ul>
							</div>
							<ul className="home-ul">
								{
									this.state.list.map((item, index) => {
										return <li key={item._id}>
													<img src={item.src} alt="item.name"/>
													<span>{item.name}</span>
													<Link to={"/detail/" + item.name}>详情页</Link>
												</li>
									})
								}
							</ul>
						</div>
					</div>
  					<Footer />
  				</div>
  			</div>
  		);
	}
}

export default Home;
