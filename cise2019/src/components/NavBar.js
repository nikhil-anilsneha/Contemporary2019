import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import About from './AboutPage.js';
import Contact from './ContactPage.js';
import Tools from './ToolsPage.js';
import Cart from './Cart.js';
import Home from './Home.js';

export default class Navbar extends Component {
render(){
    return (
      <div className="container">
          <Router>
            <div className="navigation">
             <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/HomePage.js'} className="nav-link1">Home</Link></li>
                <li><Link to={'/Home.js'} className="nav-link2">Plants</Link></li>
                <li><Link to={'/Home.js'} className="nav-link3">Tools</Link></li>
                <li><Link to={'/ContactPage.js'} className="nav-link4">Contact</Link></li>

               
              </ul>
              <ul className="navbar-right mr-auto">
                <li><Link to={'/Cart.js'} className="nav-link">View Cart</Link></li>
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
                <Route path = '/Home.js' component={Home} />
                <Route path = '/Cart.js' component={Cart} />
            </Switch>
          </div>
          </Router>  
      </div>
    )
}
  }
