import React from 'react'
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

//class FooterList extends React.Component {
//	render() {
//		var Messages = this.props.Messages;
//		console.log(Messages._id)
//		return (
//			<div className="FooterList">
//		      	<div>加入购物车</div>
//		      	<span>$0.00</span>
//		    </div>
//		);
//	}
//}

class FooterListUI extends React.Component {
	constructor() {
		super();
		this.state = {
			goodsObj: []
		}
	}	
	componentDidMount() {
		let goodsNum = 0;
		setTimeout(() => {
			this.setState({
				goodsObj: [this.props.Messages, goodsNum]
			})
		},1000)
	}
	render() {
		let addCount = this.props.addCount;
//		console.log(this.props)
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
		classify_list: state.classify_list
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		addCount: (goodsId) => {
			goodsId[1] = ++goodsId[1];
			console.log(goodsId[1])
			dispatch({
				type: "GET_Classify",
				payload: goodsId
			})
		}
	};
};

const FooterList = connect(mapStateToProps, mapDispatchToProps)(FooterListUI);

export default FooterList