import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
//input特效插件
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
//引入验证码插件
import '../../gVerify.js';
//引入material-ui
import RaisedButton from 'material-ui/RaisedButton';

//引入验证码插件
import '../../gVerify.js';
import {Link} from 'react-router-dom';

export default class My extends React.Component {
	constructor(){
		super()
		this.state={
			userName: "",
			userPassword: "",
			phone: "",
			isRemember: false,
			count: 60,
			liked: true,
			dataBase: []
		}
		this.showNum = this.showNum.bind(this);
		this.showPhone = this.showPhone.bind(this);
		this.changeName = this.changeName.bind(this);
		this.changePwd = this.changePwd.bind(this);
		this.success = this.success.bind(this);
		this.changePhone = this.changePhone.bind(this);
		this.countDown = this.countDown.bind(this);
		this.load = this.load.bind(this);
		this.handleCheckbox = this.handleCheckbox.bind(this);
		this.getLocal = this.getLocal.bind(this);
	}
	componentDidMount(){
		var verifyCode = new window.GVerify("container");
		this.showNum();
		this.getLocal();
	}
	//监听用户名input中的数据，储存在state中
	changeName(e){
		let uname = e.target.value;
			this.setState({
	            userName: uname
	        });     
	}
	//监听密码输入input中的数据，储存在state中
	changePwd(e){
		let upwd = e.target.value;
		this.setState({
            userPassword: upwd
        });
	}
	//监听手机输入input中的数据，储存在state中
	changePhone(e){
		let phone = e.target.value;
		var pattern = /^(13|14|15|18)[0-9]{9}$/;
		if (pattern.test(phone) ){
			this.setState({
	            phone: phone
	        });
		}else{
			alert("手机号错误！！！")
		}
		
	}
	//是否记住密码
	handleCheckbox(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({
                isRemember: true
            })
        }else{
            this.setState({
                isRemember: false
            })
        }
    }
	//点击发送验证码
	success(){
	  this.countDown();
	};
	//验证码倒计时
	countDown(){
		if(this.state.liked){
			message.success('验证码已发送，请注意查收！', );
          this.timer = setInterval(()=> {
            var count = this.state.count;
            this.state.liked = false;
            this.refs.timer.style.display = "block";
            this.refs.sendCode.style.display = "none";
            count -= 1;
            if (count < 1) {
              this.setState({
                liked: true
              });
              count = 60;
　　　　　　　　clearInterval(this.timer);
				this.refs.timer.style.display = "none";
				this.refs.sendCode.style.display = "block";
            }
            this.setState({
              count: count
            });
          }, 1000);
        }
	};
	//点击登录按钮
	load(){
		let uname = this.refs.user.value;
		let upwd = this.refs.pwd.value;
		fetch(`/api/login?username=${uname}&psw=${upwd}`)
			.then((res) => {
				alert("登录成功");
			})
			.catch((err) => {
				alert("登录失败");
			})
		//是否记住密码
		if(this.state.isRemember === true){ //是否记住密码，若记住，则保存至localstorage，反之，清除
			// let loginData = {this.state.userName,this.state.userPassword};
			let loginData = {};
			loginData.userName = uname;
			loginData.userPassword = upwd;
			localStorage.name = JSON.stringify( loginData )
			this.setState({
				userName : uname,
				userPassword : upwd
			})
		}
	}
	//页面渲染完成是获取本地存储中的数据
	getLocal(){
		let userName1 = JSON.parse( localStorage.name ); 
		this.setState({
			userName : userName1.userName,
			userPassword : userName1.userPassword
		})
	}
	//改变登录方式
	showNum(){
		this.refs.numberLogin.style.display = "block";
		this.refs.phoneLogin.style.display = "none";
		this.refs.num.style.borderBottom = "1px solid #5c4335";
		this.refs.phones.style.borderBottom = "none";
	}
	showPhone(){
		this.refs.numberLogin.style.display = "none";
		this.refs.phoneLogin.style.display = "block";
		this.refs.phones.style.borderBottom = "1px solid #5c4335";
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
							<span onClick={this.showPhone} ref="phones">手机验证码登录</span>
						</div>
						<div className="numberLogin" ref="numberLogin">
							<form method="post" name="" action="">
								<input type="text" placeholder="用户名/邮箱地址" onChange={this.changeName} name="user" ref="user" value={this.state.userName}/>
								<input type="password" placeholder="填写密码" onChange={this.changePwd} name="pwd" ref="pwd" value={this.state.userPassword}/>
							</form>
						</div>
						<div className="phoneLogin" ref="phoneLogin">
							<input type="text" placeholder="手机号" onBlur={this.changePhone}/>
							<div className="SecurityCode">
								<input type="text" placeholder="请输入图片字符"/>
								<div id="container"></div>
							</div>
							<div className="getCode">
								<input type="text" placeholder="输入手机验证码" ref="phone"/>
								<div className="getCodeBtn">
									<Button className="yanCode" onClick={this.success} ref="yanCode1"><span className="sendCode" ref="sendCode">发送验证码</span><span className="time" ref="timer">({this.state.count})秒后重新发送</span></Button>
								</div>
							</div>
							
						</div>
						<div className="login" onClick={this.load}>
							登录
						</div>
						<div className="footLogin">
							<div className="checkbox">
								<input type="checkbox" name="rememberMe" checked={this.state.isRemember} onClick={this.handleCheckbox} />
								&nbsp;&nbsp;
								记住密码
							</div>
							<div className="toRegister">
								忘记密码
								&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
								<Link to={"./Register"}>
									去注册>	
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
