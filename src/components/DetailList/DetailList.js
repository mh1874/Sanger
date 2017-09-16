import React from 'react';
import HeaderList from '../Header/HeaderList.js';
import FooterList from '../Footer/FooterList.js';
import {Link} from 'react-router-dom';


class DetailList extends React.Component {
	render() {
		return (
			<div className="Details">
				<HeaderList />
				<div className="detail_box">
					<span className="detail_car">
						<i className="iconfont">&#xe501;</i>
						
					</span>
				</div>
				<FooterList />
			</div>
		);
	}
}
export default DetailList













