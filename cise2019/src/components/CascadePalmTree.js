import React, { Component } from 'react';
import './tree.css';
import CascadePalmTreePic from "./images/CascadePalmTreePic.jpg";

class CascadePalmTree extends Component {
    render() { 
        return (
            <div class = "CascadePalmTreePage">

                <h1>Cascade Palm Tree</h1>

                <br></br>
                
                <img src={CascadePalmTreePic} alt="CascadePalmTreePic" className="CascadePalmTreePic"></img>
                {/* https://frasercoastnursery.com.au/wp-content/uploads/2019/07/cascade-palm.jpg */}

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
 
export default CascadePalmTree;