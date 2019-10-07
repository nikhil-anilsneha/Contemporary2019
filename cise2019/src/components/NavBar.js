import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import Contact from './ContactPage.js';
import Cart from './C.js';
import Home from './Home.js';
import Tips from './tips.js';
import Checkout from './Checkout.js';
import Login from './Login.js';
import SingleTip from './SingleTip';
import AshTree from './AshTree.js';
import TreeAll from './TreeAll.js';
// import Register from './Register';
import Register from './RegisterTest';
import '../index.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div>
            <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li><Link to={'/HomePage.js'} className="nav-link">Home</Link></li>
              <li><Link to={'/Home.js'} className="nav-link">Browse</Link></li>
              <li><Link to={'/ContactPage.js'} className="nav-link">Contact</Link></li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li><Link to={'/C.js'} className="nav-link">View Cart</Link></li>
              <li>
                  <Link to={"/Login.js"} className="nav-link">
                    <Login></Login>
                  </Link>
                </li>
                <li>
                  <Link to={"/Register.js"} className="nav-link">
                    <Register></Register>
                  </Link>
                </li>
            </ul>
            </div>
          </nav>
          <br />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/HomePage.js' component={HomePage} />
            <Route path='/ContactPage.js' component={Contact} />
            <Route path='/Home.js' component={Home} />
            <Route path='/C.js' component={Cart} />
            <Route path='/tips.js' component={Tips} />
            <Route path='/Checkout.js' component={Checkout} />
            <Route path="/tips/:tipsId" component={SingleTip} />
            <Route path='/Checkout.js' component={Checkout} />
            <Route path='/TreeAll.js' component={TreeAll} />
            <Route path="/tree/:treeId" component={AshTree} />
          </Switch>
        </Router>
      </div>
    )
  }
}
