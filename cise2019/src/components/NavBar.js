import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import About from './AboutPage.js';
import Contact from './ContactPage.js';

export default class NavBar extends Component {
  render() {
    return (
      <div className="container">
          <Router>
            <div className="navigation">
            <h2>Welcome to PlantATree!</h2>
             <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/HomePage.js'} className="nav-link">Home</Link></li>
                <li><Link to={'/AboutPage.js'} className="nav-link">About</Link></li>
                <li><Link to={'/ContactPage.js'} className="nav-link">Contact</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/HomePage.js' component={HomePage}/>
                <Route path='/ContactPage.js' component={Contact} />
                <Route path='/AboutPage.js' component={About} />
            </Switch>
          </div>
          </Router>  
      </div>
    )
  }
}