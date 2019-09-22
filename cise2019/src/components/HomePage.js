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
  render() {
    return (
      <div className="container">
        <br></br>
          <Carousel></Carousel>  
          <br></br>
          <div className="carousel-links">
             <table>
              <tr>
                <th><a href="./AboutPage.js">Just In: Spring Season Tomato Plants</a></th>
                <th><a href="./AboutPage.js">3 for $15 Royal Gala Apple Trees - Shop Now!</a></th>
                <th><a href="./Tips.js">Strawberry Planting 101 - Click Here!</a></th>
              </tr>
            </table>
          </div>
          <br></br>
          <div className="plants-tools">
            <a href="./AboutPage.js">
              <img src={PlantsImage} className="plants-tools-images" alt="plants icon"/> </a>
            <a href="./ToolsPage.js">  
            <img src={ToolsImage} className="plants-tools-images" alt="tools icon"/></a>
            <a href="./ContactPage.js">
              <img src={ContactImage} className="plants-tools-images" alt="contacts icon"/></a>
          </div>
      </div>
    )
  }
}