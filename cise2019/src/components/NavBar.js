import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import About from './AboutPage.js';
import Contact from './ContactPage.js';
import Tools from './ToolsPage.js';
import Cart from './C.js';
import Home from './Home.js';
import Checkout from './Checkout.js'
import AshTree from './AshTree.js';
import TreeAll from './TreeAll.js';

export default class Navbar extends Component {
render(){
    return (
      <div className="container">
          <Router>
            <div className="navigation">
             <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/HomePage.js'} className="nav-link">Home</Link></li>
                <li><Link to={'/Home.js'} className="nav-link">Plants</Link></li>
                <li><Link to={'/Home.js'} className="nav-link">Tools</Link></li>
                <li><Link to={'/AboutPage.js'} className="nav-link">Contact</Link></li>

               
              </ul>
              <ul className="navbar-right mr-auto">
                <li><Link to={'/C.js'} className="nav-link">View Cart</Link></li>
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
                <Route path = '/C.js' component={Cart} />
                <Route path = '/Checkout.js' component={Checkout}/>
                <Route path ='/TreeAll.js' component ={TreeAll}/>
                <Route path ="/tree/:treeId" component={AshTree} />
            </Switch>
          </div>
          </Router>  
      </div>
    )
}
  }
