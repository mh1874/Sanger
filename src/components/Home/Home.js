import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Footer from '../Footer/Footer.js';
//引入轮播图UI
import { Carousel } from 'antd';
//引入betterScroll
import BScroll from 'better-scroll'


class HomeUI extends React.Component {
	componentDidMount() {
		this.props.fetchListData();
	}
	render() {
		console.log(this.props)
		return (
			<div className="home">
					<div className="header">
						<p></p>
						<p>蛋糕</p>
						<p>北京</p>
					</div>
					<div className="section">
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
					<ul className="home-ul">
						{
							this.props.home_list.map((item, index) => {
								return <li key={"h_l" + index}>
											<img src={item.logo} />
											<span>{item.shop_name}</span>
											<span>{item.price}</span>
											<Link to={"/detail/" + item.shop_name}>详情页</Link>
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

const mapStateToProps = (state) => {
	return {
		home_list: state.home_list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchListData: () => {
			fetch('/api/getdata').then((res) => {
				return res.json();
			}).then((json) => {
				dispatch({
					type: "GET_HOME",
					payload: json
				})
			})
		}
	};
};
	
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);
export default Home;