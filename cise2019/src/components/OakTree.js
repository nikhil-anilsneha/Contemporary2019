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

                <br></br>

                <p>Tree Category: Hardwood</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                The large oak tree requires a lot of space, so the first consideration when choosing a place to grow one is the amount of room you have and any obstructions present. Avoid planting the oak tree over a septic tank or underground utilities.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Grow oaks in acid, well-drained soil and avoid extremely wet conditions that may increase susceptibility to disease.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Oak trees of all species generally thrive in full sun exposure to partial shade.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                Don’t fertilize the tree until its second year after planting. Even then, only use fertilizer if the leaves are pale, or the tree is not growing as it should. Keep in mind that oak trees grow very slowly at first. Feeding the tree to encourage fast growth weakens the wood. This can lead to splits in the trunk and broken branches.
                <br></br>
                <br></br>
                A newly planted oak tree requires water, to the depth it is planted, daily. After two or three weeks, reduce the frequency so you are watering every two to three days for two to three weeks. Finally, provide the oak tree with 1 inch of water for the rest of its first year. Give the tree an inch of water every two weeks during its second year and an inch of water every three weeks in the oak tree’s third year.
                <br></br>
                <br></br>
                Mature oak trees require minimal maintenance pruning to keep the tree healthy and attractive in the home landscape. The best time to prune all varieties of oak is during the winter dormant months to reduce the risk of pests or disease entering through the open wounds.
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
                The growth rate of oak trees varies greatly depending on the particular species. The white oak tree species has a slow growth process. The southern red oak tree has a moderately fast growth rate. Water oak trees have a rapid growth rate.
                </p>
                
                <p>Price: $60</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                In spring, a single oak tree produces both male flowers (in the form of catkins) and small coon flowers (female flowers). Oak trees have male flowers on one part of their branch, and female flowers on another part of the same branch.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                The fruit is a nut called an acorn, borne in a cup-like structure. Production of acorns starts at the age of 20 to 50 years. Each acorn contains one seed (rarely two or three) and takes 6–24 months to mature, depending on their species.
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
 
export default OakTree;