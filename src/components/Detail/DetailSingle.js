import React from 'react'
export default class DetailSingle extends React.Component {
	render() {
		console.log(this.props);
		return (
			<div>
				详情页
				{this.props.match.params.id}
			</div>
		);
	}
}
