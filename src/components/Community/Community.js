import React from 'react';
import {NavLink} from 'react-router-dom';
import Footer from '../Footer/Footer.js';

export default class Community extends React.Component {
	render() {
		return (
			<div className="community">
				<div className="community-header">
					<h5>社区</h5>
				</div>
				<div className="community-container">
					<div className="community-title">
						<span className="title-item">Sanger客志</span>
						<span className="title-item">树洞</span>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}
