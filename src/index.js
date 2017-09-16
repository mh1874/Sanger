import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './styles/reset/reset.css';
import './styles/footer/footer.css';
import './styles/home/home.css';
import './styles/classify/classify.css';
import './styles/community/community.css';
import './styles/my/my.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore,combineReducers } from 'redux';
import {connect, Provider} from 'react-redux';
//reducers
import AllReducers from './reducers/AllReducers.js'

import injectTapEventPlugin from 'react-tap-event-plugin';
 
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const reducers = combineReducers(AllReducers);
const store = createStore(reducers);


const renderPage = () => {
	ReactDOM.render(<Provider store={store}>
						<App />
					</Provider>, document.getElementById('root'));
}
renderPage();
//订阅
store.subscribe(renderPage);

