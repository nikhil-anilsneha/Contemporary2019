import React, { Component } from 'react';
import './tree.css';
import KingPalmTreePic from "./images/KingPalmTreePic.jpg";

class KingPalmTree extends Component {
    render() { 
        return (
            <div class = "KingPalmTreePage">

                <h1>King Palm Tree</h1>

                <br></br>
                
                <img src={KingPalmTreePic} alt="KingPalmTreePic" className="KingPalmTreePic"></img>
                {/* https://urbanpalms.com/wp-content/uploads/PA-A-CUNN-q2.jpg */}

                <br></br>

                <p>Tree Category: Palm</p>

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
 
export default KingPalmTree;