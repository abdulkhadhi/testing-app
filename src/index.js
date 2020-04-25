import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import UserRegister from "./formpage/dropdown/Registeruser";
import AdminLogin from "./formpage/dropdown/Admin";
import UserLogin from "./formpage/dropdown/Userlog";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
<Router>
        <Route exact path="/" component={App} />
        <Route exact path="/userlogin" component={UserLogin} />
        <Route exact path="/register" component={UserRegister} />
        <Route exact path="/Adminlogin" component={AdminLogin} />
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
