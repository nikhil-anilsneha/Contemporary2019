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

                <br></br>

                <p>Tree Category: Fruit</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                It’s best practice not to plant your tomatoes in the same spot as last season, or in the same spot as potatoes were planted as diseases can remain in the soil and affect your new crop.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Tolerates many soil conditions as long as it’s well drained, though compost-enriched soil is preferable for optimal growth.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Needs placement in full sun, though in hotter climates it can be planted in areas with partial shade.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                Feed your tomatoes every four weeks to replenish nutrients.
                <br></br>
                <br></br>
                Water your tomatoes deeply and regularly.
                <br></br>
                <br></br>
                Halfway through the growing season prune the base leaves to let sun and light in to improve air circulation to help prevent fungal disease like blight.
                <br></br>
                <br></br>
                Annual pruning is often recommended for these trees to help keep them looking their best and maintaining their size in small gardens. Pruning can also help encourage branching in younger trees.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                Greater than 3m – Mature plants typically range between 3 and 5.5 meters in height.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                Fast – The time required from planting to harvest varies from 45 to 80 or more days, with average main crop medium-size red varieties maturing and completing development in 70 days.
                </p>
                
                <p>Price: $30</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                The small, fragrant flowers appear in clusters near the tips of branches, and might be white, pink or light blue in color. The blooms typically appear in the late summer or early fall, but could flower at any time.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                Pretty much all tomato varieties are red although other colours are possible including green, yellow, orange, pink, black, brown, white, and purple.
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
 
export default TomatoTree;