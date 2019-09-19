import React from 'react';
import './App.css';
import FrontPage from './component/frontpage.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReturnUser from './component/returnuser.js';
import ShowGymHistory from './component/showgymhistory.js';

function App() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={FrontPage}/>
          <Route exact path="/returnuser" component={ReturnUser}/>
          <Route exact path="/showgymhistory" component={ShowGymHistory}/>
        </Switch>
      </Router>
    ) 
}

export default App;
