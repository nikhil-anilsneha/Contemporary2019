import React, { Component } from 'react';
import Carousel from './Carousel';
import PlantsImage from './images/PlantsImage.JPG';
import ToolsImage from './images/ToolsImage.JPG';
import TipsImage from './images/Tips.JPG';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


export default class HomePage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <br></br>
        {/* display carousel */}
        <Carousel></Carousel>
        <br></br>
        <div>
          {/* display carousel links */}
          <table className="table">
            <tbody>
              <tr>
                <th><Link to="./specialCheckout.js">Just In: Spring Season Tomato Plants</Link></th>
                <th><Link to="./specialCheckout.js">3 for $15 Royal Gala Apple Trees - Shop Now!</Link></th>
                <th><Link to="./tips.js">Strawberry Planting 101 - Click Here!</Link></th>
              </tr>
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="row">
          {/* display image icons */}
          <div className="col-sm-4">
            <Link to='/Home.js'>
              <img src={PlantsImage} className="plants-tools-images" alt="plants icon" /> </Link>
          </div>
          <div className="col-sm-4">
            <Link to="./Home.js">
              <img src={ToolsImage} className="plants-tools-images" alt="tools icon" /></Link>
          </div>
          <div className="col-sm-4">
            <Link to="./tips.js">
              <img src={TipsImage} className="plants-tools-images" alt="tips icon" /></Link>
          </div>
        </div>
      </div>
    )
  }
}