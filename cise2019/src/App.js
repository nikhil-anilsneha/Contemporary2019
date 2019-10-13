import React, {Component} from 'react';
import './App.css';
import banner from "./components/images/banner.jpg";
import NavBar from './components/NavBar';
import HomePage from './components/HomePage.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
        <div className="maindiv">
          <img src={banner} alt="banner" className="banner img-responsive"></img>
          <NavBar></NavBar>
        </div>
    );
  }
}

export default App;
