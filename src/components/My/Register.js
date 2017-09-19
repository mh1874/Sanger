import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import { Input } from 'antd';
//引入验证码插件
import '../../gVerify.js';

import {Link} from 'react-router-dom';

class Register extends React.Component{
	constructor(){
		super()
		this.state = {
			username : "",
			passwords : "",
			confirm : ""
		}
		this.fnPhone = this.fnPhone.bind(this)
		this.fnPaw = this.fnPaw.bind(this)
		this.fnConfirm = this.fnConfirm.bind(this)
	}
	componentDidMount(){
		var verifyCode = new window.GVerify("container");
	}
	//手机号判断是否输入正确
	fnPhone(event){
		var pattern = /^(13|14|15|18)[0-9]{9}$/;
		console.log(event.target.value)
		//正则判断手机号格式
		if (pattern.test(event.target.value)) {
			this.setState({
				username : event.target.value
			})
		}else{
			this.refs.Prompt_username.style.display = "block";
			this.refs.Prompt_password.style.display = "none";
			this.refs.Prompt_confirm.style.display = "none";
			this.refs.Prompt_pic.style.display = "none";
		}
	}
	//密码格式是否输入正确
	fnPaw(event){
		var pat = /^\w{6,20}$/
		console.log(event.target.value)
		//判断密码格式
		if (pat.test(event.target.value)) {
			this.setState({
				passwords : event.target.value
			})
		}else{
			this.refs.Prompt_username.style.display = "none";
			this.refs.Prompt_password.style.display = "block";
			this.refs.Prompt_confirm.style.display = "none";
			this.refs.Prompt_pic.style.display = "none";
		}
	}
	//判断两次密码是否一致
	fnConfirm(event){
		console.log(event.target.value)
		console.log(this.state.passwords)
		if (event.target.value == this.state.passwords) {
			console.log(1)
			this.setState({
				confirm : event.target.value
			})
		}else{
			this.refs.Prompt_username.style.display = "none";
			this.refs.Prompt_password.style.display = "none";
			this.refs.Prompt_confirm.style.display = "block";
			this.refs.Prompt_pic.style.display = "none";
		}
	}
	render() {
		console.log(this.username)
		return(
			<div className="register_box" >
				<Header />
				<div className="register_content">
					<div className="register_header">
						用户注册
					</div>
					<div className="register_con">
						<form method="post" name="">
							<Input type="text" placeholder="请输入手机号" onBlur={this.fnPhone}/>
							<Input type="password" placeholder="密码：8~20位字符，包含字母和数字" onBlur={this.fnPaw} />
							<Input type="password" placeholder="确认密码" onBlur={this.fnConfirm} />
							<div className="SecurityCode">
								<Input type="text" placeholder="请输入图片字符"/>
								<div id="container"></div>
							</div>
							<div className="getCode">
								<Input type="text" placeholder="输入手机验证码"/>
								<div className="getCodeBtn">
									发送验证码
								</div>
							</div>
						</form>
					</div>
					<div className="prompt">
						<li className="promptTxt" ref="Prompt_username">
							请输入正确的手机号
						</li>
						<li className="promptPaw" ref="Prompt_password">
							请输入8~20位字符，包含字母和数字
						</li>
						<li className="confirm" ref="Prompt_confirm">
							两次密码不一致
						</li>
						<li className="pic" ref="Prompt_pic">
							请输入图片型验证码
						</li>
						
					</div>
					<div className="registers">
						注册
					</div>
					<div className="register_foot">
						<div className="checkbox">
							<input type="checkbox" name="rememberMe" />已阅读并同意
						</div>
						<div className="toRegister">
							<Link to={''}>
								21客会员协议
							</Link>和
							<Link to={''}>
								隐私保护政策
							</Link>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}

export default Register























