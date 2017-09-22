import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
//引入轮播图UI
import { Carousel } from 'antd';
//引入卡片UI
import { Card } from 'antd';
//引入betterScroll
import BScroll from 'better-scroll'

class Home extends React.Component {
	constructor() {
		super();//调用父类构造器
		this.state = {
			list: [],
			swiper : [],
			newGoods: [],
			newAaas: [],
			newArticles: []
		};
	}
	componentDidMount() {
		 fetch("/api/getdataMenu").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
		 fetch("/api/getdataSwiper").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		swiper: data
		 	})
		 }).then(() => {
		 	setTimeout(() => {
		 		this._initScroll();
		 	},0)
		 });
		 fetch("/api/getdataGood").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		newGoods: data
		 	})
		 }).then(() => {
		 	setTimeout(() => {
		 		this._cakeScroll();
		 	},0)
		 });
		 
		 fetch("/api/getdataAaa").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		newAaas: data
		 	})
		 }).then(() => {
		 	this._iceCreamScroll();
		 });
		 
		 fetch("/api/getdataArticle").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		newArticles: data
		 	})
		 }).then(() => {
		 	setTimeout(() => {
		 		this._articlesScroll();
		 	},0)
		 });
	}
	_initScroll() {
		new BScroll(this.refs.homeWrapper, {
			click: true
		})
	}
	_cakeScroll() {
		new BScroll(this.refs.cakeWrapper, {
			click: true,
			scrollX: true
		})
	}
	_iceCreamScroll() {
		new BScroll(this.refs.iceCreamWrapper, {
			click: true,
			scrollX: true
		})
	}
	_articlesScroll() {
		new BScroll(this.refs.articlesWrapper, {
			click: true,
			scrollX: true
		})
	}
	render() {
		return (
			<div id="homeMain" >
				<Link to={"/ShopCart"}>  
					<span className="detail_car">
						<i className="iconfont">&#xe501;</i>
					</span>
				</Link>
				<div className="home">
					<Header />
					<div className="section" ref="homeWrapper">
						<div className="homeWrapper">
							<Carousel autoplay>
								{
									this.state.swiper.map((item, index) => {
										return <li key={item._id}>
													<Link to={"/classify"}>
														<img src={item.src} alt={item.name}/>
													</Link>
												</li>
									})
								}
							</Carousel>
							<div className="menu">
								<ul>
									{
										this.state.list.map((item, index) => {
											return <li key={item._id}>
														<div>
															<Link to={"/classify"}>
																<img src={item.src} alt={item.name}/>
																<span>{item.name}</span>
															</Link>	
														</div>
													</li>
										})
									}
								</ul>
							</div>
							<div className="fill"></div>
							<div className="title_billboard">
								<h5 className="title">廿一客·新品</h5>
								<Link to={"/classify"} className="titleImg">
									<img src="http://static.21cake.com//upload/images/5b6e03957eea42c2b804581bab62d833.jpg" alt="mongo"/>
								</Link>
								<div className="billboardWrapper" ref="cakeWrapper">
									<ul className="home-ul">
										{
											this.state.newGoods.map((item, index) => {
												return <li key={item._id} >
															<div className="goods-list">
																<Link to={"/detailList/" + item._id}>
																	<img src={item.headImg} alt={item.chineseName}/>
																	<h2>{item.chineseName}</h2>
																	<p>{item.introduce}</p>
																</Link>
															</div>
														</li>
											})
										}
									</ul>
								</div>
								<div className="fill"></div>
								<h5 className="title">廿一客·中秋节</h5>
								<Link to={"/classify"} className="titleImg">
									<img src="http://static.21cake.com//upload/images/ab936b72722e8e6e64b746cd08af0f90.jpg" alt="moonCake"/>
								</Link>
								<div className="icecreamWrapper" ref="iceCreamWrapper">
									<ul className="ice-ul">
										{
											this.state.newAaas.map((item, index) => {
												return <li key={item._id} >
															<div className="goods-list">
																<Link to={"/detailList/" + item._id}>
																	<img src={item.headImg} alt={item.chineseName}/>
																	<h2>{item.chineseName}</h2>
																	<p>{item.introduce}</p>
																</Link>
															</div>
														</li>
											})
										}
									</ul>
								</div>
							</div>
							<div className="fill"></div>
							<div className="activities">
								<h5 className="title">廿一客·活动</h5>
								<Carousel autoplay>
									<Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="activity-card">
									    <div className="custom-card">
									      <h2>贺:</h2>
									      <p>二十一客品牌成立13周年及北京工厂升级下单298元,订单完成送21元代金券</p>
									      <span>只剩3天</span>
									    </div>
									    <div className="custom-image">
									      <img alt="example" src="http://static.21cake.com//upload/images/58ca484543ed589d8b96ff3b9c75161c.jpg" />
									    </div>
									</Card>
									<Card style={{ width: 240 }} bodyStyle={{ padding: 0 }} className="activity-card">
									    <div className="custom-card">
									      <h2>清凉一夏</h2>
									      <p>再三推荐单口味Gelato组合120元4个</p>
									      <span>只剩11天</span>
									    </div>
									    <div className="custom-image">
									      <img alt="example" src="http://static.21cake.com//upload/images/29ae416d9d194c44e6763fb789452d07.jpg" />
									    </div>
									</Card>
								</Carousel>
							</div>
							<div className="fill"></div>
							<div className="articles" ref="articlesWrapper">
								<h5 className="title">廿一客·文章</h5>
								<ul className="articles-ul">
									{
										this.state.newArticles.map((item, index) => {
											return	<li key={item._id}>
														<Link to={'/articles/' + item._id}>
															<Card bodyStyle={{ padding: 0 }} className="article-card">
															    <div className="custom-image">
															      <img src="http://static.21cake.com/public/images/a9/75/d9/24361110e115f5fe45681b0c5c2b0f5c.jpg"/>
															    </div>
															    <div className="custom-card">
															    	<h6>{item.title}</h6>
															    	<p></p>
															    </div>
															</Card>
														</Link>	
													</li>
										})
									}
									
								</ul>
							</div>
							<div className="lostbottom">
								<div>没了...</div>
							</div>
						</div>
					</div>
  					<Footer />
  				</div>
  			</div>
  		);
	}
}

export default Home;
