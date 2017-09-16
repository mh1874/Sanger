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
		 	//console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
		 fetch("/api/getdataSwiper").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		swiper: data
		 	})
		 })
	}
	render() {
		return (
			<div className="home">

					<Header />
					<div className="section">
					<Carousel autoplay={4000}>
						{
							this.state.swiper.map((item,index)=>{
								return <div key={"xx"+index} className="swiperImg">
											<img src={item.src} />
									   </div>
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
												<img src={item.src} />
												<span>{item.name}</span>
												<Link to={"/detail/" + item.name}>详情页</Link>
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

export default Home;
