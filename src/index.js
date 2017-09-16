import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import './iconfont/iconfont.css';

import './styles/reset/reset.css';
import './styles/footer/footer.css';
import './styles/header/header.css';


import './styles/home/home.css';
import './styles/classify/classify.css';
import './styles/community/community.css';
import './styles/my/my.css';

import App from './App';
//import registerServiceWorker from './registerServiceWorker';

//import { createStore,combineReducers } from 'redux';
//import {Provider} from 'react-redux';
//reducers


//import AllReducers from './reducers/AllReducers.js'
//const reducers = combineReducers(AllReducers);
//store 必要参数是reducers 后面还可以写中间件之类的参数
//const store = createStore(reducers);



const renderPage = () => {
	ReactDOM.render(<App />, document.getElementById('root'));
}
renderPage();
//订阅
//store.subscribe(renderPage);

