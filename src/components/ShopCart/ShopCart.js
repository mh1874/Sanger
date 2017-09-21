import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer.js';




export default class ShopCart extends React.Component {
	constructor() {
		super();
		this.state = {
			list: {},
			price : {},
			group : {},
			totalPrice: "",
			showShopNum : 1
		};
		this.addCake = this.addCake.bind(this);
		this.addNum = this.addNum.bind(this);
		this.reduceNum = this.reduceNum.bind(this);
		this.deleteGoods = this.deleteGoods.bind(this);
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
		 		price : data[0].price,
				group : data[0].group[1],
				totalPrice : data[0].price.newPrice
		 	},()=>{
		 		console.log(this.state.list)
		 		console.log(this.state.price)
		 	})
		});
	}
	//点击加号
	addNum(){
		this.setState({
			showShopNum : ++this.state.showShopNum
		})
		this.computedTotalPrice()
		this.refs.reduceBtn.style.display = "block";
		this.refs.iconfont.style.display = "none";
	}
	//点击减号
	reduceNum(){
		this.setState({
			showShopNum : --this.state.showShopNum
		},()=>{
			console.log(this.state.showShopNum)
		})
		this.computedTotalPrice()
		if(this.state.showShopNum < 2){
			this.refs.reduceBtn.style.display = "none";
			this.refs.iconfont.style.display = "block";
		}
	}
	deleteGoods(){
		//此处应删除商品信息
		this.refs.shopGoods.style.display = "none";
		this.setState({
			totalPrice : 0
		})
	}
	//计算总价
	computedTotalPrice(){
		var shopNum = this.state.showShopNum;
		this.setState({
			totalPrice : shopNum * this.state.price.newPrice + ".00"
		})
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
						<ul className="shopGoods" ref="shopGoods">
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
											<div className="reduce"><span onClick={this.reduceNum} ref="reduceBtn">-</span><i className="iconfont" ref="iconfont" onClick={this.deleteGoods}>&#xe631;</i></div>
											<input type="text" name="" className="showShopNum" value={this.state.showShopNum} ref="showShopNum"/>
											<div className="increase" onClick={this.addNum}>+</div>
										</div>
									</div>
								</div>
								<div className="give">
									<img src={this.state.group.img} />
									<span>{this.state.group.name}</span>
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
						</ul>
					</div>
				</div>
				<div className="shopFoot">
					<div className="buy">
						<div className="shopPrice">
							<p>￥<span>{this.state.totalPrice}</span></p>
							<p>商品</p>
						</div>
						<div className="get">下单</div>
					</div>
				</div>
			</div>
		);   
	}
}