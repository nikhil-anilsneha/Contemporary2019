// RENAMED THIS FILE FROM tree.js TO AshTree.js (19/9/19)

import React, { Component } from 'react';
import './tree.css';
// import tree from "./images/tree.jpg";
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
                
                {/* <img src={tree} alt="tree" className="tree"></img> */} {/* works now */}
                <img src={AshTreePic} alt="AshTreePic" className="AshTreePic"></img>

                {/* 
                Tree Category - fruit tree (apple, tomato), hedge (leylandii (Green), laurel hedging), evergreen (Pine (Eastern White Pine), Cypress), NZ native (Pohutukawa, Kauri), gum tree (Blue Gum, Rainbow Gum), palm tree (Feather Leaf Palm (King Palm, Cascade Palm)), hardwood (ash, maple, oak)
                Maintenance Requirements
                Relevant Facts - Flowers
                Relevant Facts - Berries
                Maximum Height
                Price
                Conditions for Planting
                Growth Rate
                */}

                <br></br>

                {/* https://www.savatree.com/ash-tree.html */}
                {/* https://www.weedbusters.org.nz/weed-information/weed-list/ash/ */}
                {/* https://plantscientist.files.wordpress.com/2015/03/1200px-fraxinus_excelsior_002.jpg */}

                <p>Tree Category: Hardwood</p>

                <p>
                Conditions of Place to be Planted: Most ash tree varieties grow best in moist, rich soil; require full sun and plenty of space.
                <br></br>
                Soil Drainage: Fast
                <br></br>
                Sun: Sunny
                </p>

                <p>
                Maintenance Requirements: Ash trees are susceptible to ash tree borers and other pests and disease. Keep ash trees as healthy as possible through regular monitoring, pruning, fertilizing and watering.
                Mature and established ash trees benefit from ash tree fertilizer feedings of organic-based macro and micronutrients for the nutrition necessary to sustain their health.
                </p>

                <p>Maximum Height: 50 to 80 feet high / 50 to 90 foot spread (>3m)</p>
                
                <p>Growth Rate: Fast</p>

                <p>Price: $50</p>

                <p>
                Relevant Facts Flowers: Spring flowers are inconspicuous, but the fruit that follows is more noticeable, hanging in clusters of winged seeds which turn light brown and linger on the tree until early winter. 
                Flowers lack petals, are very small and purple, appear in dense clusters (in September-October) before the leaves, and are followed by seeds (1.2-1.5 mm long) with a large wing (2.7-4 cm long) attached to one end. 
                </p>

                <p>Relevant Facts Berries: None</p>

                {/* Add to cart button goes here */}
                <button class="button">Add to Cart</button>

                <br></br>

            </div>
        );
    }
}
 
export default AshTree;