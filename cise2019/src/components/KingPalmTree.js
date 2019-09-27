import React, { Component } from 'react';
import './tree.css';
import KingPalmTreePic from "./images/KingPalmTreePic.jpg";

class KingPalmTree extends Component {
    render() { 
        return (
            <div class = "KingPalmTreePage">

                <h1>King Palm Tree</h1>

                <br></br>
                
                <img src={KingPalmTreePic} alt="KingPalmTreePic" className="KingPalmTreePic"></img>

                <br></br>

                <p>Tree Category: Palm</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                King Palms are some of the best palms to plant around pools, tropical landscapes, or as focal points in front of a home for a “wow” factor. Beware of planting large palms too close to buildings or under power lines.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Enjoys bright light, rich and moist well drained soil.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): King Palms are grown in full sun.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                When fertilising palms there are a few points to note: Fertilise only when the ground is moist and water in well afterwards. Avoid over-fertilising palm trees as this can be fatal. Scatter fertiliser right around the base of the palm and out as far the distance that the fronds reach from the trunk. Avoid getting fertiliser in the crown of the palm or in a pile against the trunk.
                <br></br>
                <br></br>
                As a general rule make sure that palm trees receive sufficient watering in the growing months (September to May) but also have good drainage. Stagnant water may cause roots to rot and wet ground takes longer to warm up in spring. When watering it’s better to provide a good soaking periodically (perhaps twice a week in dry spells) than a light sprinkling daily. This helps the plant to develop good, deep roots.
                <br></br>
                <br></br>
                To keep your palm tree looking good it’s necessary to periodically prune it. While this can be done at any time of the year it’s often most effective in late spring when new growth is appearing and old leaves are dying off. Since palms re-use the nutrients in their old leaves it’s best to wait until there is no green left on the leaf before pruning. Prune the leave as close to the trunk as possible but in order to avoid scaring do not attempt to pull the leaf base off. Instead allow it to drop off in good time.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                Greater than 3m – The King Palm can grow to heights of 12-18 meters.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                Slow - The King Palm is a slow growing palm that requires minimal maintenance.
                </p>
                
                <p>Price: $100</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                The King Palm produces pink flowers that are held by 2-3 ft long branched inflorescence, growing from below the crownshaft. Male and female flowers are on the same inflorescence.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                The King Palm has attractive berry-like green fruits that turn red when ripe. Fruits are round, about 1/2 inches in diameter and hang in clusters.
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
 
export default KingPalmTree;