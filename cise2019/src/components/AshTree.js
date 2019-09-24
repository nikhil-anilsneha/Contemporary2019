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

                <div class = "tree-name">
                    <h1>Ash Tree</h1>
                </div>
                
                <br></br>
                
                <div class = "tree-image">
                    <img src={AshTreePic} alt="AshTreePic" className="AshTreePic"></img>
                </div>

                <br></br>

                <div class = "category">
                    <div class = "category-name">
                        <p>Tree Category</p>
                    </div>

                    <div class = "category-content">
                        <p>Hardwood</p>
                    </div>        
                </div>

                <div class = "conditions">
                    <div class = "conditions-name">
                        <p>Conditions of Place to be Planted</p>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}
                    
                    <div class = "conditions-content">
                        <p>The ash tree must grow in a luminous and sunny spot. <br></br> Before planting it in your garden, check that its growth won’t be impeded by any nearby wall, building, or even another tree.</p>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "soil-name">
                        <p>Soil Drainage</p>
                        <div class = "soil-name-sub">
                            <p>(Slow/Medium/Fast/Anything)</p>
                        </div>
                    </div>

                    <div class = "soil-content">
                        <p> Most ash tree varieties grow best in moist, rich soil.</p>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "sun-name">
                        <p>Sun</p>
                        <div class = "sun-name-sub">
                            <p>(Shade/Medium/Sunny/Anything)</p>
                        </div>
                    </div>

                    <div class = "sun-content">
                        <p>Requires full sun and plenty of space.</p>
                    </div>
                </div>

                <div class = "maintenance">
                    <div class = "maintenance-name">
                        <p>Maintenance Requirements</p>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-content">
                        <p>Ash trees are susceptible to Ash tree borers and other pests and disease. <br></br> Keep Ash trees as healthy as possible through regular monitoring, pruning, fertilizing and watering.</p>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-feeding">
                        <div class = "maintenance-feeding-name">
                            <p>Feeding</p>
                        </div>
                        
                        <div class = "maintenance-feeding-content">
                            <p>Mature and established Ash trees benefit from Ash tree fertilizer feedings or organic-based macro and <br></br> micronutrients for the nutrition necessary to sustain their health.</p>
                        </div>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-watering">
                        <div class = "maintenance-watering-name">
                            <p>Watering</p>
                        </div>

                        <div class = "maintenance-watering-content">
                            <p>Ash will grow quickly when supplied adequately with water. <br></br> Ensure the young seedlings are kept moist. <br></br> Reduce watering a little towards late summer.</p>
                        </div>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-pruning">
                        <div class = "maintenance-pruning-name">
                            <p>Pruning</p>
                        </div>

                        <div class = "maintenance-pruning-content">
                            <p>Pruning is recommended to preserve or improve tree structure, vigor and life-span. <br></br> Pruning can reduce specific defects or structural problems in an ash tree to greatly lessen the risk of failure. <br></br> Broken, diseased, or dead ash tree branches are typically removed in order to prevent decay-producing fungi from infecting other areas of the tree. <br></br> Also, removal of live branches is occasionally necessary to allow increased exposure to sunlight and circulation of air within the canopy.</p>
                        </div>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}
                </div>

                <div class = "height">
                    <div class = "height-name">
                        <p>Maximum Height of Mature Tree</p>
                        <div class = "height-name-sub">
                            <p>(Less than 1m, 1-2m, 2-3m, Greater than 3m)</p>
                        </div>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}
                    
                    <div class = "height-content">
                        <p>Greater than 3m – Approximately grows up to 30 or 40 meters in height.</p>
                    </div>
                </div>

                <div class = "growth">
                    <div class = "growth-name">
                        <p>Growth Rate</p>
                        <div class = "growth-name-sub">
                            <p>(Slow/Medium/Fast)</p>
                        </div>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "growth-content">
                        <p>Fast – The relatively fast growth rate of ash species makes them a common choice for use in home landscapes, especially for areas with new construction.</p>
                    </div>
                </div>
                
                <div class = "price">
                    <div class = "price-name">
                        <p>Price</p>
                    </div>

                    <div class = "price-content">
                        <p>$50</p>
                    </div>
                </div>

                <div class = "facts">
                    <div class = "facts-flowers-name">
                        <p>Relevant Facts Flowers</p>
                    </div>

                    <div class = "facts-flowers-content">
                        <p>Ash tree produces miniature purple flowers arranged in clusters. <br></br> Male and female flowers develop on separate plants (dioecious plant). <br></br> Flowers are pollinated by wind.</p>
                    </div>
                    
                    {/* <br></br> */}
                    {/* <br></br> */}
                    
                    <div class = "facts-berries-name">
                        <p>Relevant Facts Berries</p>
                    </div>

                    <div class = "facts-berries-content">
                        <p>Fruit of ash tree is called samara. <br></br> Samara is one to two inches long, flat and consists of thin membrane that protects miniature seeds.</p>
                    </div>
                </div>

                {/* <div class = "cart"> */}
                    {/* Add to cart button goes here */}
                    {/* <button class="button">Add to Cart</button> */}
                    {/* <br></br> */}
                {/* </div> */}

                {/* <br></br> */}
                {/* <br></br> */}
                {/* <br></br> */}

            </div>
        );
    }
}
 
export default AshTree;