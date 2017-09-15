import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import Footer from '../Footer/Footer.js';

class HomeUI extends React.Component {
	componentDidMount() {
		this.props.fetchListData();
	}
	render() {
		console.log(this.props)
		return (
			<div className="home">
				<h1>Home</h1>
				<ul className="home-ul">
					{
						this.props.home_list.map((item, index) => {
							return <li key={"h_l" + index}>
										<img src={item.logo} />
										<span>{item.shop_name}</span>
										<span>{item.price}</span>
										<Link to={"/detail/" + item.shop_name}>详情页</Link>
									</li>
						})
					}
				</ul>
				<Footer />
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		home_list: state.home_list
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchListData: () => {
			fetch('/api/getdata').then((res) => {
				return res.json();
			}).then((json) => {
				dispatch({
					type: "GET_HOME",
					payload: json
				})
			})
		}
	};
};
	
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeUI);
export default Home;