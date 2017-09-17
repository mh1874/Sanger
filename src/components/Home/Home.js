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
		 	console.log(data[0].src);
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
		 		this._billboardScroll();
		 	},0)
		 })
	}
	_initScroll() {
		new BScroll(this.refs.homeWrapper, {
			click: true,
			bounce: true
		})
	}
	_billboardScroll() {
		new BScroll(this.refs.billboardWrapper, {
			click: true,
			scrollX: true
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
							<div className="fill"></div>
							<div className="title_billboard">
								<p >廿一客·榜单</p>
								<div className="billboardWrapper" ref="billboardWrapper">
									<ul className="home-ul">
										{
											this.state.list.map((item, index) => {
												return <li key={item._id} >
															<Link to={"/DetailSingle/" + item._id}>
																<img src={item.src} alt="item.name"/>
															</Link>
														</li>
											})
										}
									</ul>
								</div>
							</div>
							<div className="fill"></div>
						</div>
					</div>
  					<Footer />
  				</div>
  			</div>
  		);
	}
}

export default Home;
