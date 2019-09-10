import React, { Component } from 'react';
/* import meandjo from "./images/meandjo.jpg"; */
import banner from "./images/banner.jpg";
import Carousel from './Carousel';

export default class HomePage extends Component {
  render() {
    return (
      <div className="container">
          <img src={banner} alt="banner" className="banner"></img>
          <br></br>
          <br></br>
          <Carousel></Carousel>  
          <div className="text">
          <h1>Hello, my name is Sherin!</h1>
          <h3>I am 20 years old</h3>
          </div> 
      </div>
    )
  }
}