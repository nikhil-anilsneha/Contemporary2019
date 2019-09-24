import React, { Component } from 'react';
import Carousel from './Carousel';
import PlantsImage from './images/PlantsImage.JPG';
import ToolsImage from './images/ToolsImage.JPG';
import ContactImage from './images/ContactImage.JPG';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom';
import Tree from "./tree.js";

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
        <br></br>
          <Carousel></Carousel> 
          <br></br>
          <div className="carousel-links">
             <table>
               <tbody>
              <tr>
                <th><a href="./tree.js">Just In: Spring Season Tomato Plants</a></th>
                <th><a href="./tree.js">3 for $15 Royal Gala Apple Trees - Shop Now!</a></th>
                <th><a href="./GardenTips.js">Strawberry Planting 101 - Click Here!</a></th>
              </tr>
              </tbody>
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