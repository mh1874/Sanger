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
											this.state.swiper.map((item,index)=>{
												return <div key={item._id} className="swiperImg">
															<img src={item.src} alt={item.name}/>
													   </div>
											})
										}
									</Carousel>
									<div className="menu">
										<ul>
											{
												this.state.list.map((item, index) => {
													return <li key={item._id}>
																<div><img src={item.src} alt={item.name}/></div>
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
														<img src={item.src} alt={item.name}/>
														<span>{item.name}</span>
														<Link to={"/detail/" + item.name}>详情页</Link>
													</li>
											})
										}
									</ul>
								</div>
			<div id="homeMain" >
				<div className="home">
					<Header />
					<div className="section" ref="homeWrapper">
						<div className="homeWrapper">	
							<Carousel autoplay={4000}>
							    <div><h3>1</h3></div>
							    <div><h3>2</h3></div>
							</Carousel>
							<div className="menu">
								<ul>
									<li>
										<div>1</div>
										<span>蛋糕</span>
									</li>
									<li>
										<div>2</div>
										<span>冰淇淋</span>
									</li>
									<li>
										<div>3</div>
										<span>咖啡</span>
									</li>
										<li>
										<div>4</div>
										<span>企业专区</span>
									</li>
								</ul>
							</div>
					<Footer />
				</div>
			</div>	
		);
	}
}

export default Home;
