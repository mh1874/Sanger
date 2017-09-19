import React from 'react';
import FooterList from '../Footer/FooterList.js';
import {Link} from 'react-router-dom';


class DetailList extends React.Component {
	constructor(){
		super();   //调用父类构造器
		this.state = {
			List_detail: [] ,
			List_detail_label: [],
			List_detail_details: [],
			List_detail_detailsImg: [],
			List_detail_sweetNum: '',
			styleS: []
		};
	}
	componentDidMount() {
		var data 
		fetch("/api/getdataGood").then((res) =>{
			return res.json()
		}).then((data_a)=>{
			setTimeout(() => {
				console.log(data_a[0]._id)
				console.log(this.props.match.params.id)
				for (var i =0; i<data_a.length; i++ ) {
					if (data_a[i]._id === this.props.match.params.id) {
						data = data_a[i]
						console.log(data_a[i])
					}
				}
			},0)
		}).then(() => {
			setTimeout(() => {
				this.setState({   //让页面上数据更新
			 		List_detail: data,
			 		List_detail_details : data.details,
			 		List_detail_label : data.label,
			 		List_detail_detailsImg : data.detailsImg,
			 		List_detail_sweetNum : data.sweetNum
			 	})
			},0)
		});
		fetch("/api/getdataAaa").then((res) =>{
			return res.json()
		}).then((data_b)=>{
			setTimeout(() => {
				console.log(data_b[0]._id)
				console.log(this.props.match.params.id)
				for (var j =0; j<data_b.length; j++ ){
					if (data_b[j]._id === this.props.match.params.id) {
						data = data_b[j];
						console.log(data_b[j])
					}
					console.log(data)
				}
			},0)
		}).then(() => {
			setTimeout(() => {
				this.setState({   //让页面上数据更新
			 		List_detail: data,
			 		List_detail_details : data.details,
			 		List_detail_label : data.label,
			 		List_detail_detailsImg : data.detailsImg,
			 		List_detail_sweetNum : data.sweetNum
			 	})
			},0)
		});
	}
	//传入的id值比较，获取所点击的商品的详情页信息
//		fetch("/api/getdataGood").then((res) =>{
//			return res.json()
//		}).then((data)=>{
//			setTimeout(() => {
//				for (var i =0; i<data.length; i++ ) {
//					if (data[i]._id === this.props.match.params.id) {
//						data = data[i]
//						console.log(1)
//					}
//					else{
//						console.log(2)
//						fetch("/api/getdataAaa").then((res) =>{
//							return res.json()
//						}).then((data_s)=>{
//							for (var j =0; j<data_s.length; j++ ){
//								if (data[j]._id === this.props.match.params.id) {
//									data = data[j]
//								}
//							}
//						})
//						console.log(data[0])
//					}
//				}
//				this.setState({   //让页面上数据更新
//			 		List_detail: data,
//			 		List_detail_label : data.label,
//			 		List_detail_details : data.details,
//			 		List_detail_detailsImg : data.detailsImg,
//			 		List_detail_sweetNum : data.sweetNum
//			 })
//			},0)
//			
//		})
//	}
	sweet(){
//		var sweets = document.getElementsByClassName("sweets");
//		var sweetNum = this.state.List_detail_sweetNum
//		var icons = []
//		for (var i = 0; i < sweetNum; i ++) {
//			icons.push("iconfont active")
//		}
//		for (var j = 0; j<(5-sweetNum) ; i++) {
//			icons.push("iconfont")
//		}
//		this.setState({
//			styleS : icons
//		})
	}
	//商品列表详情页模板
	render() {
		console.log(this.state.List_detail_label)
//		console.log(this.state.styleS)
//		console.log(sweetNum)
		return (
			<div className="Details">
				<div className="headerList">
			      	<Link className="header_btn" to="../Classify/Classify">
			       		<span>&lt;</span>
			     	</Link>
			     	<p>{this.state.List_detail.chineseName}</p>
			     	<p></p>
			    </div>
				<div className="detail_box">
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













