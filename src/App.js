import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home/Home.js'
import Classify from './components/Classify/Classify.js'
import Community from './components/Community/Community.js'
import My from './components/My/My.js'
import DetailSingle from './components/Detail/DetailSingle.js'
import DetailList from './components/DetailList/DetailList.js'


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/classify" component={Classify}/>
      <Route path="/community" component={Community}/>
      <Route path="/my" component={My}/>
      <Route path="/detailSingle/:id" component={DetailSingle}/>
      <Route path="/detailList/:id" component={DetailList}/>
    </div>
  </Router>
)
export default App;