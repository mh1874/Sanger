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
			goodsObj: [],
			goodsList: [],
			finalList: []
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
		console.log(this.props)
		let addCount = this.props.addCount;
		return (
			<div className="FooterList">
		      	<div onClick={()=>addCount(this.state.goodsObj, this.state.goodsList, this.state.finalList)}>加入购物车</div>
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
		addCount: (goodsMes, goodsList, finalList) => {
			let newList = {};
			goodsList.push(goodsMes);
			goodsList.forEach((e) => {
	  			newList[e] = newList[e]>=1 ? newList[e]+1 : 1;
	  		});
			dispatch({
				type: "GET_Classify",
				payload: newList
			})
		}
	};
};

const FooterList = connect(mapStateToProps, mapDispatchToProps)(FooterListUI);

export default FooterList