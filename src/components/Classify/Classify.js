import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import {Link} from 'react-router-dom';


//引入betterScroll
import BScroll from 'better-scroll'

export default class Classify extends React.Component {
	constructor(){
		super();
		this.state = {list: []};
	}
	componentDidMount() {
		this._menuScroll();
	}
	_menuScroll() {
		new BScroll(this.refs.classifyWrapper, {
			click: true,
			scrollX: true
		})
	}
	render() {
		return (
			<div className="classify">
					<Header />
					<div className="classifyWrapper" ref="classifyWrapper">
						<ul className="classify-ul">
							<Link to="../DetailList/DetailList">
								<li>蛋糕</li>
							</Link>
							<li>冰淇淋</li>
							<li>咖啡</li>
							<li>设计师礼品</li>
		        			<li>企业专区</li>
						</ul>
					</div>	
					<div className="container"><h1>内容</h1></div>

					<Footer />
			</div>
		);
	}
}


