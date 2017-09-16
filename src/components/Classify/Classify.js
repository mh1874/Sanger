import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import {Link} from 'react-router-dom';
//import BScroll from 'better-scroll' 



export default class Classify extends React.Component {
	render() {
		return (
			<div className="classify">
				<Header />
					<ul className="classify-ul content2">
						<Link to="../DetailList/DetailList">
							<li>蛋糕</li>
						</Link>
						<li>冰淇淋</li>
						<li>小切块</li>
						<li>咖啡</li>
					</ul>
				<div className="container"><h1>内容</h1></div>
				<Footer />
			</div>
		);
	}
}














