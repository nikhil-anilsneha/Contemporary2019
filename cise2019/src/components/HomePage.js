import React, { Component } from 'react';
import Carousel from './Carousel';
import LoginForm from './LoginForm.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlantsImage from './images/PlantsImage.JPG';
import ToolsImage from './images/ToolsImage.JPG';
import Plants from './AboutPage.js';
import Tools from './ToolsPage.js';

export default class HomePage extends Component {
  state = {
    isPlantsVisible: false,
    isToolsVisible: false,
  }

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
            <img src={PlantsImage} className="plants-tools-images" onClick={() => this.setState({ isPlantsVisible: true, isToolsVisible: false }) }/>
            <img src={ToolsImage} className="plants-tools-images" onClick={() => this.setState({ isToolsVisible: true, isPlantsVisible:false }) }/>
          </div>
          { this.state.isPlantsVisible ? <Plants /> : null }
          { this.state.isToolsVisible ? <Tools /> : null }
      </div>
    )
  }
}