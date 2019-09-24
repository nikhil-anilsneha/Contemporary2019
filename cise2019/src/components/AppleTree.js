import React, { Component } from 'react';
import './tree.css';
import AppleTreePic from "./images/AppleTreePic.jpg";

class AppleTree extends Component {
    render() { 
        return (
            <div class = "AppleTreePage">

                <div class = "tree-name">
                    <h1>Apple Tree</h1>
                </div>

                <br></br>
                
                <div class = "tree-image">
                    <img src={AppleTreePic} alt="AppleTreePic" className="AppleTreePic"></img>
                </div>

                <br></br>

                <div class = "category">
                    <div class = "category-name">
                        <p>Tree Category</p>
                    </div>

                    <div class = "category-content">
                        <p>Fruit</p>
                    </div>        
                </div>

                <div class = "conditions">
                    <div class = "conditions-name">
                        <p>Conditions of Place to be Planted</p>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "conditions-content">
                        <p>Choose an open, sunny spot sheltered from strong winds for your apple tree. <br></br> It is a good idea to find out how big the tree is going to grow to ensure it will have enough room.</p>
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
                        <p>Good well-drained soil.</p>
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
                        <p>Open, sunny spot sheltered from strong winds.</p>
                    </div>
                </div>
                
                <div class = "maintenance">
                    <div class = "maintenance-name">
                        <p>Maintenance Requirements</p>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-content"></div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-feeding">
                        <div class = "maintenance-feeding-name">
                            <p>Feeding</p>
                        </div>

                        <div class = "maintenance-feeding-content">
                            <p>Replenishing nutrients used by your apple tree ensures they will grow to their full potential, producing abundant and juicy crops. <br></br> Use fertiliser to feed your apple tree planted in the garden or in pots and containers in spring and summer. <br></br> Fertiliser is used so your apple tree receives a balance and even spread of all essential nutrients for maximum fruiting and flowering.</p>
                        </div>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-watering">
                        <div class = "maintenance-watering-name">
                            <p>Watering</p>
                        </div>

                        <div class = "maintenance-watering-content">
                            <p>Water your apple tree especially over the warm summer months to ensure you have juicy fruit.</p>
                        </div>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "maintenance-pruning">
                        <div class = "maintenance-pruning-name">
                            <p>Pruning</p>
                        </div>

                        <div class = "maintenance-pruning-content">
                            <p>Prune every winter to ensure a good crop of fruit the following season. <br></br> When pruning be sure to remove all diseased, damaged or dead wood. <br></br> Remove any branches that are crossing or rubbing. <br></br> Cut away any branches that are growing back into the centre of the tree.</p>
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
                        <p>Greater than 3m – Dwarf apple trees grow about 3 meters tall, while semi-dwarf varieties can reach 4.5 meters. <br></br> Meanwhile, standard-size apple trees often soar to heights above 6 meters and sometimes tower at 9 meters.</p>
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
                        <p>Slow – An Apple tree takes approximately 5 to 7 years from a seed until the tree produces its own apples.</p>
                    </div>
                </div>

                <div class = "price">
                    <div class = "price-name">
                        <p>Price</p>
                    </div>

                    <div class = "price-content">
                        <p>$25</p>
                    </div>
                </div>

                <div class = "facts">
                    <div class = "facts-flowers-name">
                        <p>Relevant Facts Flowers</p>
                    </div>

                    <div class = "facts-flowers-content">
                        <p>When an apple tree is ready to grow apples, it produces flower blossoms on the tree in the summer.</p>
                    </div>

                    {/* <br></br> */}
                    {/* <br></br> */}

                    <div class = "facts-berries-name">
                        <p>Relevant Facts Berries</p>
                    </div>

                    <div class = "facts-berries-content">
                        <p>Apple trees start as a seed, or can be grown from a cut apple tree stem that is grafted into the stock of another tree.</p>
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
 
export default AppleTree;