import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import About from './AboutPage.js';
import Contact from './ContactPage.js';
import Tools from './ToolsPage.js';
import Login from './Login.js';
import Cart from './cart.js';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
          <Router>
            <div className="navigation">
             <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/HomePage.js'} className="nav-link">Home</Link></li>
                <li><Link to={'/AboutPage.js'} className="nav-link">Plants</Link></li>
                <li><Link to={'/ToolsPage.js'} className="nav-link">Tools</Link></li>
                <li><Link to={'/ContactPage.js'} className="nav-link">Contact</Link></li>
              </ul>
              <ul className="navbar-right mr-auto">
                <li><Link to={'/cart.js'} className="nav-link">View Cart</Link></li>
                <li><Link to={'/Login.js'} className="nav-link">Log In</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/HomePage.js' component={HomePage}/>
                <Route path='/ContactPage.js' component={Contact} />
                <Route path='/AboutPage.js' component={About} />
                <Route path='/ToolsPage.js' component={Tools} />
                <Route path="/cart.js" component={Cart}/>
                <Route path = '/Login.js' component={Login}/>
            </Switch>
          </div>
          </Router>  
      </div>
    )
  }
}