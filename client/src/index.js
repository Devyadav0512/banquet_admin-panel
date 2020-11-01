import React from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css'
//import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/home';
import Admin from './container/admin';
import Adminlogin from './container/adminlogin';

const app = (
  <Router>
      <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/adminpanel" component={Admin} />
          <Route exact path="/adminlogin" component={Adminlogin} />
      </div>
  </Router>
)



ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();