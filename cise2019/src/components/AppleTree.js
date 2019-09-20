import React, { Component } from 'react';
import './tree.css';
import AppleTreePic from "./images/AppleTreePic.jpg";

class AppleTree extends Component {
    render() { 
        return (
            <div class = "AppleTreePage">

                <h1>Apple Tree</h1>

                <br></br>
                
                <img src={AppleTreePic} alt="AppleTreePic" className="AppleTreePic"></img>
                {/* https://images.homedepot-static.com/productImages/d9957652-8efa-49f1-812a-3a246fcdd8f3/svn/gurney-s-fruit-trees-75566-64_1000.jpg */}

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
 
export default AppleTree;