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
			phoneValue : ""
		
		}
	}
	componentDidMount(){
		var verifyCode = new window.GVerify("container");
	}
	fnPhone(event){
		var pattern = /^(13|14|15|18)[0-9]{9}$/;
		if (pattern.test(event.target.value)) {
			this.setState({
				phoneValue : event.target.value
			})
		}
	}
	render() {
		return(
			<div className="register_box" >
				<Header />
				<div className="register_content">
					<div className="register_header">
						用户注册
					</div>
					<div className="register_con">
						<form method="post" name="">
							<Input type="text" placeholder="请输入手机号"/>
							<Input type="password" placeholder="密码：8~20位字符，包含字母和数字"/>
							<Input type="password" placeholder="确认密码" />
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























