import React, { Component } from 'react';
import Carousel from './Carousel';
import PlantsImage from './images/PlantsImage.JPG';
import ToolsImage from './images/ToolsImage.JPG';
import TipsImage from './images/Tips.JPG';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <br></br>
          <Carousel></Carousel> 
          <br></br>
          <div>
             <table className="table">
               <tbody>
              <tr>
                <th ><a href="./Home.js">Just In: Spring Season Tomato Plants</a></th>
                <th><a href="./Home.js">3 for $15 Royal Gala Apple Trees - Shop Now!</a></th>
                <th><a href="./tips.js">Strawberry Planting 101 - Click Here!</a></th>
              </tr>
              </tbody>
            </table>
          </div>
          <br></br>
          <div className="row">
          <div className="col-sm-4">
            <a href="./Home.js">
              <img src={PlantsImage} className="plants-tools-images" alt="plants icon"/> </a>
            </div>
            <div className="col-sm-4">
            <a href="./Home.js">  
            <img src={ToolsImage} className="plants-tools-images" alt="tools icon"/></a>
            </div>
            <div className="col-sm-4">
            <a href="./tips.js">
              <img src={TipsImage} className="plants-tools-images" alt="contacts icon"/></a>
              </div>
          </div>
      </div>
    )
  }
}