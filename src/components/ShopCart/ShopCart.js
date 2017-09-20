import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer.js';




export default class ShopCart extends React.Component {
	constructor() {
		super();
		this.state = {list: {},price : {}};
		this.addCake = this.addCake.bind(this);
	}
	componentDidMount() {
		this.addCake();
	}
	addCake(){ 
		fetch("/api/getdataGood").then((res) => {
		 	return res.json();
		}).then((data)=>{
		 	this.setState({ //让页面上数据更新
		 		list: data[0],
		 		price : data[0].price
		 	},()=>{
		 		console.log(this.state.list)
		 		console.log(this.state.price)
		 	})
		});
	}
	render() {
		return (
			<div className="shoppingCart">
				<h1 className="shopCartHead">购物车</h1>
				<div className="shopCartContent">
					<div className="nothing">
						<img src="http://static.21cake.com/themes/wap/img/cart-empty.png"/>
						<p>您的购物车里还没有商品</p>
						<p>
							<Link to={"/classify"}>
								去购物 >>
							</Link>
						</p>
					</div>
					<div className="haveGoods">
						<div className="seilAvtive">
							·满100元免配送费·
						</div>
						<ul className="shopGoods">
							<li>
								<div className="shopInfo">
									<img src={this.state.list.headImg}/>
									<div className="shopName">
										<h2>{this.state.list.englishName}</h2>
										<h2>{this.state.list.chineseName}</h2>
										<p>规格 : {this.state.list.portion}</p>
										<p>￥{this.state.price.newPrice}</p>
									</div>
									<div className="shopNum">
										<div className="trimNum">
											<div className="reduce"><span>-</span><i className="iconfont">&#xe631;</i></div>
											<input type="text" name="" className="showShopNum" value="1"/>
											<div className="increase">+</div>
										</div>
									</div>
								</div>
								<div>
									
								</div>
							</li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		);   
	}
}