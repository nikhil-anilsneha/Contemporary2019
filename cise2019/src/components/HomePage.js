import React, { Component } from 'react';
import Carousel from './Carousel';
import LoginForm from './LoginForm.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlantsImage from './images/PlantsImage.JPG';
import ToolsImage from './images/ToolsImage.JPG';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
          <div className="text">
          <Router>
            <Link to={'/LoginForm.js'} class="sign-up">Sign Up!</Link>
            <Switch>
              <Route path='/LoginForm.js' component={LoginForm}/>
            </Switch>
          </Router>
          </div> 
          <Carousel></Carousel>  
          <br></br>
          <div className="plants-tools">
            <img src={PlantsImage} className="plants-tools-images"/>
            <img src={ToolsImage} className="plants-tools-images"/>
          </div>
      </div>
    )
  }
}