import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import {Link} from 'react-router-dom';

class Articles extends React.Component {
	constructor() {
		super();
		this.getArticles = this.getArticles.bind(this);
		this.state = {
			newArticles: []
		}
	}
	componentDidMount() {
		this.getArticles();
	}
	getArticles() {
		fetch("/api/getdataArticle").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		newArticles: data
		 	})
		 })
	}
	render() {
		return (
			<div className="articles">
				<Header />
				<div className="articles-content">
					{
						this.state.newArticles.map((item, index) => {
							return <div className="articles-item" key={"youknowwhat" + index}>
										<h2 className="articles-title">{item.title}</h2>
										<p className="articles-publish">发布时间:{item.time}</p>
										{
											this.state.newArticles[0].articleImg.map((item, index) => {
												return <img src={item} alt="freedom" key={"strander" + index} />
											})
										}
										<Link to={"/classify"} className="toshopping">去购买~~~</Link>
									</div>
						})
					}
				</div>
				<Footer />
			</div>
		);
	}
}

export default Articles;