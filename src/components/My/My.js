import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
<<<<<<< HEAD
//input特效插件
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
//引入验证码插件
import '../../gVerify.js';
//引入material-ui
import RaisedButton from 'material-ui/RaisedButton';
=======
import Register from './Register'
import { Input } from 'antd';
//引入验证码插件
import '../../gVerify.js';
import {Link} from 'react-router-dom';
>>>>>>> 365e655a99348fd99d859f5349162ff4c5a5b631

export default class My extends React.Component {
	constructor(){
		super()
		this.showNum = this.showNum.bind(this);
		this.showPhone = this.showPhone.bind(this);
		this.state={
			userName : "",
			userPassword : "",
			phone : "",
			isRemember : false,
			count : 60,
			liked : true
		}
		this.changeName = this.changeName.bind(this);
		this.changePwd = this.changePwd.bind(this);
		this.success = this.success.bind(this)
	}
	componentDidMount(){
		var verifyCode = new window.GVerify("container");
		this.showNum()
	}
	//监听用户名input中的数据，储存在state中
	changeName(e){
		let uname = e.target.value;
			this.setState({
	            userName: uname
	        },()=>{
	        	console.log(this.state.userName)
	        });     
	}
	//监听密码输入input中的数据，储存在state中
	changePwd(e){
		let upwd = e.target.value;
		this.setState({
            userPassword: upwd
        },()=>{
	        	console.log(this.state.userPassword);
	    });
        console.log(this.state.userPassword);
	}
	//监听手机输入input中的数据，储存在state中
	
	//是否记住密码
	handleCheckbox(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            },()=>{
	        	console.log(this.state.isRemember);
	    	})
        }else{
            this.setState({
                isRemember: false
            },()=>{
	        	console.log(this.state.isRemember);
	    	})
        }
    }
	//点击发送验证码
	success(){
	  message.success('验证码已发送，请注意查收！', );
	};
	//验证码倒计时
	
	//改变登录方式
	showNum(){
		this.refs.numberLogin.style.display = "block";
		this.refs.phoneLogin.style.display = "none";
		this.refs.num.style.borderBottom = "1px solid #5c4335"
		//this.refs.phones.style.borderBottom = "none"
	}
	showPhone(){
		this.refs.numberLogin.style.display = "none";
		this.refs.phoneLogin.style.display = "block";
		//this.refs.phones.style.borderBottom = "1px solid #5c4335";
		this.refs.num.style.borderBottom = "none";
	}
	render() {
		
		return (
			<div className="my">
				<Header />
				<div className="container">
					<div className="content">
						<div className="headerLogin">
							<span onClick={this.showNum} ref="num">账号密码登陆</span>
							<span onClick={this.showPhone} ref="phone">手机验证码登录</span>
						</div>
						<div className="numberLogin" ref="numberLogin">
							<form method="post" name="" action="">
								<Input type="text" placeholder="用户名/邮箱地址" onChange={this.changeName} name="user"/>
								<Input type="password" placeholder="填写密码" onChange={this.changePwd} name="pwd"/>
							</form>
						</div>
						<div className="phoneLogin" ref="phoneLogin">
							<Input type="text" placeholder="手机号" />
							<div className="SecurityCode">
								<Input type="text" placeholder="请输入图片字符"/>
								<div id="container"></div>
							</div>
							<div className="getCode">
								<Input type="text" placeholder="输入手机验证码"/>
								<div className="getCodeBtn">
									<Button className="yanCode" onClick={this.success}>发送验证码</Button>
								</div>
							</div>
							
						</div>
						<div className="login">
							登录
						</div>
						<div className="footLogin">
							<div className="checkbox">
								<input type="checkbox" name="rememberMe" checked={this.state.isRemember} onClick={this.handleCheckbox.bind(this)} />记住密码
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
