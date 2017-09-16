import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


export default class Classify extends React.Component {
	render() {
		return (
			<div className="classify">
					<Header />
					<ul className="classify-ul">
						<li>蛋糕</li>
						<li>冰淇淋</li>
						<li>咖啡</li>
						<li>设计师礼品</li>
	        			<li>企业专区</li>
					</ul>
					<div className="container"><h1>内容</h1></div>
					<Footer />
			</div>
		);
	}
}
