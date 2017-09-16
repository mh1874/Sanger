import React from 'react';
import HeaderList from '../Header/HeaderList.js';
import FooterList from '../Footer/FooterList.js';
import {Link} from 'react-router-dom';


class DetailList extends React.Component {
	render() {
		return (
			<div className="Details">
				<HeaderList />
				你好
				<FooterList />
			</div>
		);
	}
}
export default DetailList













