import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import Home from './components/Home/Home.js'
import Classify from './components/Classify/Classify.js'
import Community from './components/Community/Community.js'
import My from './components/My/My.js'
import Detail from './components/Detail/Detail.js'
import Cake from './components/Classify/cake.js'

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/classify" component={Classify}/>
      <Route path="/community" component={Community}/>
      <Route path="/my" component={My}/>
      <Route path="/detail/:id" component={Detail}/>
      <Route path="/cake" component={Cake}/>
    </div>
  </Router>
)
export default App;