import React from 'react';
import {Link} from 'react-router-dom';

import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

class Home extends React.Component {
	constructor() {
		super();//调用父类构造器
		this.state = {list: []};
	}
	componentDidMount() {
		 fetch("/api/getdataMenu").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 })
	}
	render() {
		return (
			<div className="home">
				<Header />
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
				<Footer />
			</div>
		);
	}
}

export default Home;