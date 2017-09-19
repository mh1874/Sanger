import React from 'react';
import FooterList from '../Footer/FooterList.js';
import {Link} from 'react-router-dom';


class DetailList extends React.Component {
	constructor(){
		super();   //调用父类构造器
		this.cakePart = this.cakePart.bind(this);
		this.state = {
			List_detail: [] ,
			List_detail_label: [],
			List_detail_details: [],
			List_detail_detailsImg: [],
			List_detail_sweetNum: '',
			styleS: [],
			List_detail_sweetyName: []
		};
	}
	componentDidMount() {
		this.cakePart();
	}
	cakePart() {
		let data;
		let sweetyname = [];
		fetch("/api/getdataGood").then((res) =>{
			return res.json()
		}).then((data_a)=>{
			setTimeout(() => {
				for (let i =0; i<data_a.length; i++ ) {
					if (data_a[i]._id === this.props.match.params.id) {
						data = data_a[i];
						for(let j=0; j<data.sweetNum; j++){
							sweetyname.push("iconfont active")
						}
						for(let k=0; k<(5-data.sweetNum); k++){
							sweetyname.push("iconfont")
						}
						setTimeout(() => {
							this.setState({   //让页面上数据更新
						 		List_detail: data,
						 		List_detail_details : data.details,
						 		List_detail_label : data.label,
						 		List_detail_detailsImg : data.detailsImg,
						 		List_detail_sweetNum : data.sweetNum,
						 		List_detail_sweetyName: sweetyname
						 	})
						},0)
					}else{
						this.coffeePart();
					}
				}
			},0)
		})
	}
	coffeePart() {
		let data;
		let sweetyname = [];
		fetch("/api/getdataAaa").then((res) =>{
			return res.json()
		}).then((data_b)=>{
			setTimeout(() => {
				for (let j=0; j<data_b.length; j++ ){
					if (data_b[j]._id === this.props.match.params.id) {
						data = data_b[j];
						for(let i=0; i<data.sweetNum; i++){
							sweetyname.push("iconfont active")
						}
						for(let k=0; k<(5-data.sweetNum); k++){
							sweetyname.push("iconfont")
						}
						console.log(sweetyname)
						setTimeout(() => {
							this.setState({   //让页面上数据更新
						 		List_detail: data,
						 		List_detail_details : data.details,
						 		List_detail_label : data.label,
						 		List_detail_detailsImg : data.detailsImg,
						 		List_detail_sweetNum : data.sweetNum,
						 		List_detail_sweetyName: sweetyname
						 	})
						},0)
					}
				}
			},0)
		})
	}
//	sweetHeart() {
//		let howSweety = [];
//		let sweetyClass = {};
//		fetch("/api/getdataGood").then((res) => {
//			return res.json();
//		}).then((data) => {
//			for(let i=0; i<data.length; i++){
//				howSweety.push(data[i].sweetNum);
//			}
//			return howSweety;
//		}).then((list) => {
//			for(let i=0; i<list.length; i++){
//				let name = [];
//				for(let j=0; j<list[i]; j++){
//					name.push("iconfont active")
//				}
//				for(let k=0; k<(list.length-list[i]-1); k++){
//					name.push("iconfont")
//				}
//				sweetyClass["name" + i] = name;
//			}
//			console.log(sweetyClass)
//		})
//	}
	//商品列表详情页模板
	render() {
		return (
			<div className="Details">
				<div className="headerList">
			      	<Link className="header_btn" to="/Classify">
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
								{
									this.state.List_detail_sweetyName.map((item, index) => {
										return <i key={"sweety" + index} className={item}>&#xe634;</i>
									})
								}
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













