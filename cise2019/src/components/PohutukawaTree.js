import React, { Component } from 'react';
import './tree.css';
import PohutukawaTreePic from "./images/PohutukawaTreePic.jpg";

class PohutukawaTree extends Component {
    render() { 
        return (
            <div class = "PohutukawaTreePage">

                <h1>Pohutukawa Tree</h1>

                <br></br>
                
                <img src={PohutukawaTreePic} alt="PohutukawaTreePic" className="PohutukawaTreePic"></img>

                <br></br>

                <p>Tree Category: NZ Native</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                Pohutukawa grows to become a huge tree, which can cause problems if planted on small suburban sections, or near fences or other structures on farm land. Plant the tree far away from buildings and pipes because the roots have been known to cause severe damage to homes and foundations.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Sandy, moist free draining, generally hardy to most soil types.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Sunny – Requires full sun exposure.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                Fertilize the tree by spreading a handful of bone meal and blood meal around the base of the tree in the spring.
                <br></br>
                <br></br>
                Water the tree once every two or three days in the first growing season. This will help the tree remain strong and establish itself faster.
                <br></br>
                <br></br>
                Prune back any damaged or diseased branches as they appear, and discard them to prevent the spread of disease to the rest of the tree. Prune back growth during the winter to shape the tree and give it a bushier appearance.
                <br></br>
                <br></br>
                It’s important to prune, lift and shape the canopy as required. Thinning out these trees thoughtfully can promote healthy growth, control the root system, maintain a stable structure and promote a bigger, brighter, better summer bloom.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                Greater than 3m – The tree grows up to 20m in height, with a dome-like spreading form.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                The growth rate of Pohutukawa depends on the age of the plant. Young Pohutukawa plants grow faster than older Pohutukawa plants.
                </p>
                
                <p>Price: $150</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                Although Pohutukawa flowers usually occur in a range of different reds, from a pinkish crimson to brownish red, a number of colour variations have been recorded. Unusual flower colours on record include: apricot, salmon, yellow and pink.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                Fruits appear as woody capsules approximately 1cm long ripening the following spring. The silvery appearance is a feature of buds, new growth and seed capsules.
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
 
export default PohutukawaTree;