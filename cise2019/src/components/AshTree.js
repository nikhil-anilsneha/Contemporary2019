// RENAMED THIS FILE FROM tree.js TO AshTree.js (19/9/19)

import React, { Component } from 'react';
import './tree.css';
import AshTreePic from "./images/AshTreePic.jpg";

class AshTree extends Component {
    // state = {  }
    render() { 
        return (
            // put this into a container with one column for picture and another for text
            // only need one row and two columns

            <div class = "AshTreePage">

                <h1>Ash Tree</h1>

                <br></br>
                
                <img src={AshTreePic} alt="AshTreePic" className="AshTreePic"></img>

                <br></br>

                <p>Tree Category: Hardwood</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                The ash tree must grow in a luminous and sunny spot. Before planting it in your garden, check that its growth won’t be impeded by any nearby wall, building, or even another tree.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Most ash tree varieties grow best in moist, rich soil.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Requires full sun and plenty of space.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                Ash trees are susceptible to Ash tree borers and other pests and disease. Keep Ash trees as healthy as possible through regular monitoring, pruning, fertilizing and watering.
                <br></br>
                <br></br>
                Mature and established Ash trees benefit from Ash tree fertilizer feedings or organic-based macro and micronutrients for the nutrition necessary to sustain their health.
                <br></br>
                <br></br>
                Ash will grow quickly when supplied adequately with water. Ensure the young seedlings are kept moist. Reduce watering a little towards late summer.
                <br></br>
                <br></br>
                Pruning is recommended to preserve or improve tree structure, vigor and life-span. Pruning can reduce specific defects or structural problems in an ash tree to greatly lessen the risk of failure.
                <br></br>
                <br></br>
                Broken, diseased, or dead ash tree branches are typically removed in order to prevent decay-producing fungi from infecting other areas of the tree. Also, removal of live branches is occasionally necessary to allow increased exposure to sunlight and circulation of air within the canopy.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                Greater than 3m – Approximately grows up to 30 or 40 meters in height.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                Fast – The relatively fast growth rate of ash species makes them a common choice for use in home landscapes, especially for areas with new construction.
                </p>
                
                <p>Price: $50</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                Ash tree produces miniature purple flowers arranged in clusters. Male and female flowers develop on separate plants (dioecious plant). Flowers are pollinated by wind.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                Fruit of ash tree is called samara. Samara is one to two inches long, flat and consists of thin membrane that protects miniature seeds.
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
 
export default AshTree;