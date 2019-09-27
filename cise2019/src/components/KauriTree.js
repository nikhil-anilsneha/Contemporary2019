import React, { Component } from 'react';
import './tree.css';
import KauriTreePic from "./images/KauriTreePic.jpg";
// import KauriTreePic2 from "./images/KauriTreePic2.jpeg";

class KauriTree extends Component {
    render() { 
        return (
            <div class = "KauriTreePage">

                <h1>Kauri Tree</h1>

                <br></br>
                
                <img src={KauriTreePic} alt="KauriTreePic" className="KauriTreePic"></img>

                <br></br>

                <p>Tree Category: NZ Native</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                Site selection is critical when planting kauri. Think carefully about how large a kauri tree can grow before planting one in an urban environment. It could become a nuisance on a small suburban section, planted too close to a building or beneath an overhead obstruction like a power cable.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Kauri are tolerant of low levels of soil nutrients, but growth and health can be enhanced by ensuring nutrients are plentiful and competition is minimised.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Kauri growth requires high light levels.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                Established stressed trees can gain an instant boost from application of organic blood and bone (for example Nitrosol). To further enhance tree growth/health for a sustained period, a few handfuls of slow release fertilizer (such as Planticote or Osmocote) can be placed around the tree before mulching and yearly after this. Fertiliser application is best done during warm wet periods in spring or autumn to ensure it soaks into the ground.
                <br></br>
                <br></br>
                Seedlings and young kauri trees (with developing root systems) are susceptible to drought. Mature trees, although well known for being more drought tolerant than many other native plants, will also suffer during long dry periods. To minimise drought stress, a solid water once a week is beneficial especially for young trees (as a rough guide, a few hours a week with a soaker hose over summer should be adequate).
                <br></br>
                <br></br>
                Kauri naturally drop their lower branches as they grow toward the forest canopy. However, in open situations lower branches may be retained. If a small branch dies on a kauri tree, or live branches need to be removed, a 4-5cm stub should be left on the tree. This method should only be used for branches less than 4cm in diameter, larger branches should be sawn off close to the trunk. Wind stress can often cause cracking/damage at the joint of double leader shoots. Young trees with multiple leader shoots can be pruned back to one main trunk to avoid this.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                Greater than 3m – Kauri are among the world's mightiest trees, growing to over 50m tall.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                In general, over the lifetime of the tree the growth rate tends to increase, reach a maximum, then decline.
                </p>
                
                <p>Price: $120</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                The kauri is a conifer which means it produces cones - both male and female. Male cones are finger-shaped and fall once they have released their pollen in spring. Female cones are round and turn from green to brownish red as they mature. They ripen after three years of growth and release seeds that are dispersed by the wind.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                Kauri gum (sometimes called New Zealand amber) oozes from the bark of mature trees. The tree's oblong leaves are flat and leathery. They are bronze when young but turn bright green as they mature. Kauri trees bear both male and female cones.
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
 
export default KauriTree;