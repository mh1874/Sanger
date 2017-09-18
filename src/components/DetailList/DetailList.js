import React from 'react';
//import HeaderList from '../Header/HeaderList.js';
import FooterList from '../Footer/FooterList.js';
import {Link} from 'react-router-dom';


class DetailList extends React.Component {
	constructor(){
		super();   //调用父类构造器
		this.state = {
			List_detail : [] ,
			List_detail_label : [],
			List_detail_details :[],
			List_detail_detailsImg : [],
			List_detail_sweetNum : ''
		};
		this.transmit = this.transmit.bind(this)
		this.transmit()
	}
	
	//传入的id值比较，获取所点击的商品的详情页信息
	transmit(){
		fetch("/api/getdataGood").then((res) =>{
			return res.json()
		}).then((data)=>{
			setTimeout(() => {
				for (var i =0; i<data.length; i++ ) {
					if (data[i]._id === this.props.match.params.id) {
						data = data[i]
					}
				}
				console.log(data)
				this.setState({   //让页面上数据更新
			 		List_detail: data,
			 		List_detail_label : data.label,
			 		List_detail_details : data.details,
			 		List_detail_detailsImg : data.detailsImg,
			 		List_detail_sweetNum : data.sweetNum
			 	})
				return data;
			},0)
			
		})
	}
	sweet(){
		var sweets = document.getElementsByClassName("sweets");
		for (var i = 0; i < this.state.List_detail_sweetNum; i ++) {
			
		}
	}
	//商品列表详情页模板
	render() {
		console.log(this.state.List_detail._id)
		return (
			<div className="Details">
				<div className="detail_box">
					<div className="headerList">
				      	<Link className="header_btn" to="../Classify/Classify">
				       		<span>返回</span>
				     	</Link>
				     	<p>{this.state.List_detail.chineseName}</p>
				    </div>
					<span className="detail_car">
						<i className="iconfont">&#xe501;</i>
					</span>
					<div className="detail_src">
						<img className="detail_src2" src={this.state.List_detail.headImg} alt={this.state.List_detail.chineseName} />
					</div>
					<div className="detail_int">
						<h4>{this.state.List_detail.englishName}</h4>
						<p>{this.state.List_detail.chineseName}</p>
						<ul>
							{
								this.state.List_detail_label.map((item,index) => {
									return <li key={"xx_" + index}>
												{item}
											</li>
								})
							}
						</ul>
					</div>
					<div className="detail_num">
						<span>规格数量选择</span>
						<span>&gt; </span>
					</div>
					<div className="detail_spec">
						<p>
							<i className="iconfont">&#xe634;</i>
							<span>参考甜度</span>
							<span className="sweets"> 
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
								{this.state.List_detail.distribution}
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
						{
							this.state.List_detail_details.map((item,index) => {
								return <p key={"aa" + index}>
										{item}
									</p>
							})
						}
					</div>
					<div className="detail_adimg">
						{
							this.state.List_detail_detailsImg.map((item,index) => {
								return <div key={"bb" + index}>
										<img src={item} alt={"bb" + index} />
									</div>
							})
						}
					</div>
				</div>
				<FooterList />
			</div>
		);
	}
}
export default DetailList













