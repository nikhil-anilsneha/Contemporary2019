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
                
                <br></br>

                <p>Tree Category: Fruit</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                Choose an open, sunny spot sheltered from strong winds for your apple tree. It is a good idea to find out how big the tree is going to grow to ensure it will have enough room.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Good well-drained soil.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Open, sunny spot sheltered from strong winds.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                Replenishing nutrients used by your apple tree ensures they will grow to their full potential, producing abundant and juicy crops. Use fertiliser to feed your apple tree planted in the garden or in pots and containers in spring and summer. Fertiliser is used so your apple tree receives a balance and even spread of all essential nutrients for maximum fruiting and flowering.
                <br></br>
                <br></br>
                Water your apple tree especially over the warm summer months to ensure you have juicy fruit.
                <br></br>
                <br></br>
                Prune every winter to ensure a good crop of fruit the following season. When pruning be sure to remove all diseased, damaged or dead wood. Remove any branches that are crossing or rubbing. Cut away any branches that are growing back into the centre of the tree.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                Greater than 3m – Dwarf apple trees grow about 3 meters tall, while semi-dwarf varieties can reach 4.5 meters. Meanwhile, standard-size apple trees often soar to heights above 6 meters and sometimes tower at 9 meters.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                Slow – An Apple tree takes approximately 5 to 7 years from a seed until the tree produces its own apples.
                </p>
                
                <p>Price: $25</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                When an apple tree is ready to grow apples, it produces flower blossoms on the tree in the summer.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                Apple trees start as a seed, or can be grown from a cut apple tree stem that is grafted into the stock of another tree.
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
 
export default AppleTree;