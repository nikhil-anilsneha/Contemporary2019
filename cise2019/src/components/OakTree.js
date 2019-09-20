import React, { Component } from 'react';
import './tree.css';
import OakTreePic from "./images/OakTreePic.jpg";

class OakTree extends Component {
    render() { 
        return (
            <div class = "OakTreePage">

                <h1>Oak Tree</h1>

                <br></br>
                
                <img src={OakTreePic} alt="OakTreePic" className="OakTreePic"></img>
                {/* http://s3-wp-lyleprintingandp.netdna-ssl.com/wp-content/uploads/2017/12/27142524/court-oak-2314686_1280.jpg */}

                <br></br>

                <p>Tree Category: Hardwood</p>

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
 
export default OakTree;