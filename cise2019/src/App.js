import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css';
import banner from "./components/images/banner.jpg";
import NavBar from './components/NavBar';
import Cart from './components/mycart.js';
import CartHome from './components/CartHome.js';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="maindiv">
          <img src={banner} alt="banner" className="banner"></img>
          <NavBar></NavBar>
          
        </div>
        </BrowserRouter>
    );
  }
}



export default App;
