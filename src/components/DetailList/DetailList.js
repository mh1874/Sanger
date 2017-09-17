import React from 'react';
import HeaderList from '../Header/HeaderList.js';
import FooterList from '../Footer/FooterList.js';
import {Link} from 'react-router-dom';


class DetailList extends React.Component {
	constructor(){
		super();   //调用父类构造器
		this.state = {List_detail : [] };
	}
	
	//传入的id值比较，获取所点击的商品的详情页信息
	componentDidMount(){
		fetch("/api/getdataGood").then((res) =>{
			return res.json()
		}).then((data)=>{
			console.log(data[0])
			this.setState({   //让页面上数据更新
		 		List_detail: data[0]
		 	})
		})
	}
	//商品列表详情页模板
	render() {
		return (
			<div className="Details">
				<HeaderList />
				<div className="detail_box">
					<span className="detail_car">
						<i className="iconfont">&#xe501;</i>
					</span>
					<div className="detail_src">
						图片
					</div>
					<div className="detail_int">
						<h4>Gelato 10</h4>
						<p>多口味组合(4种搭配)</p>
						<span>冰淇淋</span>
					</div>
					<div className="detail_num">
						<span>规格数量选择</span>
						<span>&gt; </span>
					</div>
					<div className="detail_spec">
						<p>
							<i className="iconfont">&#xe634;</i>
							<span>参考甜度</span>
							<span>
								<i className="iconfont">&#xe634;</i>
								<i className="iconfont">&#xe634;</i>
								<i className="iconfont">&#xe634;</i>
								<i className="iconfont">&#xe634;</i>
								<i className="iconfont">&#xe634;</i>
							</span>
						</p>
						<p>
							<i className="iconfont">&#xe60b;</i>
							<span>配送时间</span>
							<span>
								想在订购最早明天9:30起送 .最晚起送时间是22:00.
							</span>
						</p>
						<p>
							<i className="iconfont">&#xe631;</i>
							<span>保温条件</span>
							<span>
								储存在-22℃或以下的温度
							</span>
						</p>
					</div>
					<div className="detail_ad">
						<p>/不使用罐头水果和植混奶油/</p>
						<p>/坚持应季凯特鲜切芒果/</p>
					</div>
					<div className="detail_adimg">
						介绍图片
					</div>
				</div>
				<FooterList />
			</div>
		);
	}
}
export default DetailList













