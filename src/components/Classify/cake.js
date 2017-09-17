import React from 'react'
export default class Cake extends React.Component {
	constructor(){
		super();
		this.state = {list: []};
	}
	componentDidMount(){
		fetch("/api/getdataGood").then((res) => {
		 	return res.json();
		 }).then((data)=>{
		 	console.log(data);
		 	this.setState({ //让页面上数据更新
		 		list: data
		 	})
		 });
	}
	render() {
		return (
			<ul>
				{
					this.state.list.map((item,index)=>{
						return <li key={"xxx" + index}>
									<img src={item.headImg} alt={item.chineseName}/>
									<div>
										<h2>{item.englishName}</h2>
										<h2>{item.chineseName}</h2>
									</div>
							   </li>
					})
				}
			</ul>
		);
	}
}