import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import banner from "./components/images/banner.jpg";
import HomePage from './components/HomePage.js';
import About from './components/AboutPage.js';
import Contact from './components/ContactPage.js';

class App extends Component {
  render() {
    return (
        <div>
          <img src={banner} alt="banner" className="banner"></img>
          <Router>
            <div className="navigation">
            <h2>Welcome to PlantATree!</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/components/HomePage.js'} className="nav-link">Home</Link></li>
                <li><Link to={'/components/AboutPage.js'} className="nav-link">About</Link></li>
                <li><Link to={'/components/ContactPage.js'} className="nav-link">Contact</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
                <Route path='/components/HomePage.js' component={HomePage} />
                <Route path='/components/ContactPage.js' component={Contact} />
                <Route path='/components/AboutPage.js' component={About} />
            </Switch>
          </div>
          </Router>
        </div>
    )
  }
}

export default App;
