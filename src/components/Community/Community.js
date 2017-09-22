import React from 'react';
import Footer from '../Footer/Footer.js';
import {Link} from 'react-router-dom';

import { Menu, Icon } from 'antd';
import { Card } from 'antd';
//引入betterScroll
import BScroll from 'better-scroll'

export default class Community extends React.Component {
	constructor() {
		super();
		const SubMenu = Menu.SubMenu;
		const MenuItemGroup = Menu.ItemGroup;
		this.monthly = this.monthly.bind(this);
		this.Sangerhidden = this.Sangerhidden.bind(this);
		this.TreeHolehidden = this.TreeHolehidden.bind(this);
		this.state = {
			newArticles: []
		}
	}
	componentDidMount() {
		this.monthly();
	}
	_SangerScroll() {
		new BScroll(this.refs.SangerWrapper, {
			click: true
		})
	}
	monthly() {
		fetch("/api/getdataArticle").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		newArticles: data
		 	})
		 }).then(() => {
		 	this._SangerScroll();
		 })
		 var distance = 5 + "rem";
		 this.refs.treeHole.style.left = distance;
	}
	Sangerhidden() {
		var SangerDistance = -5 + "rem";
		var treeHoleDistance = 0;
		this.refs.Sanger.style.left = SangerDistance;
		this.refs.treeHole.style.left = treeHoleDistance;
	}
	TreeHolehidden() {
		var SangerDistance = 0;
		var treeHoleDistance = 5 + "rem";
		this.refs.Sanger.style.left = SangerDistance;
		this.refs.treeHole.style.left = treeHoleDistance;
	}
	render() {
		console.log(this.state)
		return (
			<div className="community">
				<div className="community-header">
					<h5>社区</h5>
				</div>
				<div className="title-list">
					<Menu className="community-title">
						<Menu.Item key="mail" className="title-item">
							<p onClick={this.TreeHolehidden}>Sanger客志</p>
						</Menu.Item>
						<Menu.Item key="app" className="title-item">
							<p onClick={this.Sangerhidden}>树洞</p>
						</Menu.Item>
					</Menu>
				</div>
				<div className="community-container" ref="SangerWrapper">
					<div className="community-wrapper">
						<ul className="sanger-ul" ref="Sanger">
							{
								this.state.newArticles.map((item, index) => {
									return	<li key={item._id} className="community-item">
												<Link to={'/articles/' + item._id}>
													<Card bodyStyle={{ padding: 0 }} className="article-card">
													    <div className="custom-image">
													      <img src="http://static.21cake.com/public/images/a9/75/d9/24361110e115f5fe45681b0c5c2b0f5c.jpg"/>
													    </div>
													    <div className="custom-card">
													    	<h6>{item.title}</h6>
													    	<p>{item.time}</p>
													    </div>
													</Card>
												</Link>	
											</li>
								})
							}
						</ul>
						<ul className="treehole-ul" ref="treeHole">
							<li key="dontsay" className="treehole-item">
								<Card bodyStyle={{ padding: 0 }} className="article-card">
								    <div className="custom-card">
								    	<h6>主题</h6>
								    	<p>Who is No.1</p>
								    </div>
								    <div className="custom-image">
								      <img src="http://static.21cake.com//activity/site/21cake_magazine/img/1.png"/>
								    </div>
								</Card>
							</li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
