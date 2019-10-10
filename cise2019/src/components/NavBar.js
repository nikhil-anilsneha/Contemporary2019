
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import HomePage from './HomePage.js';
import Contact from './ContactPage.js';
import Cart from './C.js';
import Home from './Home.js';
import Tips from './tips.js';
import Login from './Login.js';
import SingleTip from './SingleTip';
import Recipe from './Recipe.js';
import AshTree from './AshTree.js';
import TreeAll from './TreeAll.js';
import SpecialCheckout from './specialCheckout.js';
import RegisterTest from './RegisterTest.js';
import Profile from './Profile.js';
import Checkout from './Checkout.js';
import '../index.css';

export default class Navbar extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={"/HomePage.js"} className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={"/Home.js"} className="nav-link">
                    Browse
                  </Link>
                </li>
                <li>
                  <Link to={"/ContactPage.js"} className="nav-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={"/Profile.js"} className="nav-link">
                    Profile
                  </Link>
                </li>
              </ul>
              <ul className="navbar-right mr-auto">
                <li>
                  <Link to={"/C.js"} className="nav-link">
                    View Cart
                  </Link>
                </li>
                <br />
                <li>
                  <Link to={"/Login.js"} className="nav-link">
                    <Login></Login>
                  </Link>
                </li>
                <br />
                <li>

                  <Link to={"/RegisterTest.js"} className="nav-link">
                    <RegisterTest></RegisterTest>
                  </Link>
                </li>
              </ul>
            </nav>
            <br/>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route path='/HomePage.js' component={HomePage}/>
                <Route path='/Home.js' component={Home}/>
                <Route path='/ContactPage.js' component={Contact} />
                <Route path = '/C.js' component={Cart} />
                <Route path='/Recipe.js' component={Recipe}/>
                <Route path='/Login.js' component={Login}/>
                <Route path='/Profile.js' component={Profile}/>
                <Route path="/tips/:tipsId" component={SingleTip} />
                <Route path="/tips.js" component={Tips}/>
                <Route path ='/TreeAll.js' component ={TreeAll}/>
                <Route path ='/specialCheckout.js' component ={SpecialCheckout}/>
                <Route path ="/tree/:treeId" component={AshTree} />
                <Route path="./RegisterTest.js" component={RegisterTest}/>
                <Route path='/Checkout.js' component = {Checkout}/>
            </Switch>
          </div>
          </Router>  

      </div>
    );
  }
}
