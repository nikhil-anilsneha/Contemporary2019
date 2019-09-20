import React, { Component } from 'react';
import './tree.css';
import TomatoTreePic from "./images/TomatoTreePic.jpg";

class TomatoTree extends Component {
    render() { 
        return (
            <div class = "TomatoTreePage">

                <h1>Tomato Tree</h1>

                <br></br>
                
                <img src={TomatoTreePic} alt="TomatoTreePic" className="TomatoTreePic"></img>
                {/* https://www.victoriananursery.co.uk/images/800/sq_tomato_blizzard_001.jpg */}

                <br></br>

                <p>Tree Category: Fruit</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                Soil Drainage:
                <br></br>
                Sun:
                </p>

                <p>
                Maintenance Requirements:
                </p>

                <p>Maximum Height: </p>
                
                <p>Growth Rate: </p>

                <p>Price: </p>

                <p>
                Relevant Facts Flowers:
                </p>

                <p>Relevant Facts Berries: </p>

                {/* Add to cart button goes here */}
                <button class="button">Add to Cart</button>

                <br></br>

            </div>
        );
    }
}
 
export default TomatoTree;