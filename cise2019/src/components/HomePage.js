import React, { Component } from 'react';
import Carousel from './Carousel';
import LoginForm from './Register.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PlantsImage from './images/PlantsImage.JPG';
import ToolsImage from './images/ToolsImage.JPG';
import Plants from './AboutPage.js';
import Tools from './ToolsPage.js';
import ContactImage from './images/ContactImage.JPG';

export default class HomePage extends Component {
  state = {
    isPlantsVisible: false,
    isToolsVisible: false,
  }

  render() {
    return (
      <div className="container">
        <br></br>
          <Carousel></Carousel>  
          <br></br>
          <div className="plants-tools">
            <img src={PlantsImage} className="plants-tools-images" alt="plants icon"
              onClick={() => this.setState({ isPlantsVisible: true, isToolsVisible: false, isHomeVisible: false }) }/>
            <img src={ToolsImage} className="plants-tools-images" alt="tools icon"
              onClick={() => this.setState({ isToolsVisible: true, isPlantsVisible:false, isHomeVisible: false }) }/>
            <img src={ContactImage} className="plants-tools-images" alt="contacts icon"  />
          </div>
          { this.state.isPlantsVisible ? <Plants /> : null }
          { this.state.isToolsVisible ? <Tools /> : null } 
      </div>
    )
  }
}