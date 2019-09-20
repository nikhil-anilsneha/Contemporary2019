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

                <br></br>

                <p>Tree Category: Palm</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): 'text goes here'
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): 'text goes here'
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                <br></br>
                <br></br>
                {/* text goes here */}
                <br></br>
                <br></br>
                {/* text goes here */}
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>
                
                <p>Price: 'text goes here'</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                {/* text goes here */}
                </p>

                <br></br>

                {/* Add to cart button goes here */}
                <button class="button">Add to Cart</button>

                <br></br>
                <br></br>
                <br></br>

            </div>
        );
    }
}
 
export default CascadePalmTree;