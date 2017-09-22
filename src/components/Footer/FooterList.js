import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';


class FooterListUI extends React.Component {
	constructor() {
		super();
		this.state = {
			goodsObj: []
		}
	}	
	componentDidMount() {
		setTimeout(() => {
			this.setState({
				goodsObj: [this.props.Messages]
			})
		},1000)
	}
	render() {
		let addCount = this.props.addCount;
		return (
			<div className="FooterList">
		      	<div onClick={()=>addCount(this.state.goodsObj)}>加入购物车</div>
		      	<span>$0.00</span>
		    </div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		goodsMes_list: state.goodsMes_list
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addCount: (goodsMes) => {
			dispatch({
				type: "GET_GoodsMes",
				payload: goodsMes
			})
		}
	};
};

const FooterList = connect(mapStateToProps, mapDispatchToProps)(FooterListUI);

export default FooterList