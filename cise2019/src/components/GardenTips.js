import React, { Component } from 'react';

export default class GardenTips extends Component {
  render() {
    return (
        <div className="container">
          <h1>Gardening 101!</h1>
          <br></br>
          <br></br>
          <div className="strawberries">
          <h3>5 Steps to Strawberry Planting Success</h3>
          <ul>
            <li>Choose a spot in full sun</li>
            <li>Prepare your soil with organic matter like compost and sheep pellets.</li>
            <li>Add a layer of strawberry mix to plant into.
               Strawberry planting time is from June-November in New Zealand.</li>
            <li>Feed your strawberries every four weeks to replenish nutrients.</li>
            <li>Protect your strawberries with strawberry 
              straw to keep their roots moist and keep fruit off the soil.</li>
          </ul>
          <p>Thanks to https://www.tuigarden.co.nz/how-to-guide/strawberry-growing-guide/</p>
          </div>
        </div>
    );
  }
}