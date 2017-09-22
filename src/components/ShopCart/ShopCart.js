import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class ShopCartUI extends React.Component {
	constructor() {
		super();
		this.state = {
			list: [],
			goodsMes: {},
			goodsNum: [],
			goodsPrice: ""
		};
	}
	componentWillMount() {
		let goodsList = this.props.goodsMes_list;
		let newList = {};
		goodsList.forEach((e) => {
			newList[e] = newList[e]>=1 ? newList[e]+1 : 1;
		});
		this.setState({
			goodsMes: newList
		})
		let that = this;
		let data = [];
		let num = [];
		let price = 0;
		fetch('/api/getdataGood').then((res) => {
			return res.json();
		}).then((dataCart) => {
			for(let i = 0; i < dataCart.length; i++){
				for(let j in that.state.goodsMes){
					if(dataCart[i]._id === j){
						data.push(dataCart[i]);
						num.push(that.state.goodsMes[j]);
						price += dataCart[i].price.newPrice * that.state.goodsMes[j];
						setTimeout(() => {
							this.setState({
								list: data,
								goodsNum: num,
								goodsPrice: price
							})
						},0)
					}else{
						fetch("/api/getdataAaa").then((res) =>{
							return res.json()
						}).then((data_b)=>{
							for (let j=0; j<data_b.length; j++ ){
								for(let k in that.state.goodsMes){
									if (data_b[j]._id === k) {
										data.push(data_b[j]);
										num.push(that.state.goodsMes[k]);
										price += data_b[j].price.newPrice * that.state.goodsMes[k];
										setTimeout(() => {
											this.setState({   //让页面上数据更新
										 		list: data,
										 		goodsNum: num,
										 		goodsPrice: price
										 	})
										},0)	
									}
								}	
							}
						})
					}
				}
			}	
		})	
	}
	componentDidMount() {
		setTimeout(() => {
			this.props.computedTotalPrice(this.state.goodsPrice);
		},1000)
	}
	render() {
		return (
			<div className="shoppingCart">
				<h1 className="shopCartHead">购物车</h1>
				<Link to="/">
					<span className="fan">返回</span>
				</Link>
				<div className="shopCartContent">
					<div className="nothing" ref="nothing">
						<img alt="shoppingcart" src="http://static.21cake.com/themes/wap/img/cart-empty.png"/>
						<p>您的购物车里还没有商品</p>
						<p>
							<Link to={"/classify"}>
								去购物 >>
							</Link>
						</p>
					</div>
					<div className="haveGoods" ref="haveGoods">
						<div className="seilAvtive">
							·满100元免配送费·
						</div>
						<ul className="shopGoods" ref="shopGoods">
							{
								this.state.list.map((item, index)=>{
									return <li key={item._id}>
											<div className="shopInfo">
												<img alt="goodsImg" src={item.headImg}/>
												<div className="shopName">
													<h2>{item.englishName}</h2>
													<h2>{item.chineseName}</h2>
													<p>规格 : {item.portion}</p>
													<p>￥{item.price.newPrice}</p>
												</div>
												<div className="shopNum">
													<div className="trimNum">
														<div className="reduce"><span ref="reduceBtn">-</span><i className="iconfont" ref="iconfont">&#xe631;</i></div>
														<input type="text" name="" className="showShopNum" value={this.state.goodsNum[index]} ref="showShopNum"/>
														<div className="increase">+</div>
													</div>
												</div>
											</div>
											<div className="give">
												<img alt="giftsImg" src={item.group.img} />
												<span>{item.group.name}</span>
											</div>
											<div className="birthday">
												<div className="card">
													<span>生日牌</span>
												</div>
												<div className="addCard">
													+  添加生日牌
												</div>
												<div className="open">></div>
											</div>
										</li>
								})
							}
						</ul>
					</div>
				</div>
				<div className="shopFoot">
					<div className="buy">
						<div className="shopPrice">
							<p>￥<span>{this.props.Price_list}.0</span></p>
							<p>商品</p>
						</div>
						<div className="get">下单</div>
					</div>
				</div>
			</div>
		);   
	}
}

const mapStateToProps = (state) => {
	return {
		goodsMes_list: state.goodsMes_list,
		Price_list: state.Price_list
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		computedTotalPrice: (price) => {
			dispatch({
				type: "GET_Price",
				payload: price
			})
		}
	};
};
const ShopCart = connect(mapStateToProps, mapDispatchToProps)(ShopCartUI);

export default ShopCart;
