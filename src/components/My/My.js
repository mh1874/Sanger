import React from 'react';
import Footer from '../Footer/Footer.js';
import Register from './Register'
import { Input } from 'antd';
//引入验证码插件
import '../../gVerify.js';
import {Link} from 'react-router-dom';

export default class My extends React.Component {
	constructor(){
		super()
	}
	componentDidMount(){
		var verifyCode = new window.GVerify("container");
	}
	render() {
		
		return (
			<div className="my">
				<div className="container">
					<div className="content">
						<div className="headerLogin">
							<span>账号密码登陆</span>
							<span>手机验证码登录</span>
						</div>
						<div className="numberLogin">
							<form method="post" name="">
								<Input type="text" placeholder="用户名/邮箱地址"/>
								<Input type="password" placeholder="填写密码"/>
							</form>
						</div>
						<div className="phoneLogin">
							<Input type="text" placeholder="手机号"/>
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
							
						</div>
						<div className="login">
							登录
						</div>
						<div className="footLogin">
							<div className="checkbox">
								<input type="checkbox" name="rememberMe" />记住密码
							</div>
							<div className="toRegister">
								忘记密码
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<Link to={"./Register"}>
									去注册
								</Link>
							</div>
						</div>
					</div>
					
				</div>
				<Footer />
			</div>
		);
	}
}
