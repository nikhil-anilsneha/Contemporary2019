import React, { Component } from 'react';
import './tree.css';
import CascadePalmTreePic from "./images/CascadePalmTreePic.jpg";

class CascadePalmTree extends Component {
    render() { 
        return (
            <div class = "CascadePalmTreePage">

                <h1>Cascade Palm Tree</h1>

                <br></br>
                
                <img src={CascadePalmTreePic} alt="CascadePalmTreePic" className="CascadePalmTreePic"></img>

                <br></br>

                <p>Tree Category: Palm</p>

                <p>
                Conditions of Place to be Planted:
                <br></br>
                {/* <br></br> */}
                An excellent choice for planting near swimming pools, ponds or streams. If used as an indoor houseplant, the Cascade Palm will thrive in a room with plenty of bright light. Outdoors, this plant prefers to grow in a spot with shade to partial shade exposure.
                <br></br>
                <br></br>
                Soil Drainage (fast/med/slow/anything): Cascade Palms enjoy well drained but moist, rich organic mix. Remember try to stay away from wet, mucky or arid soils.
                <br></br>
                <br></br>
                Sun (sunny/med/shade/anything): Prefers shade, but will tolerate some sunlight.
                </p>

                <p>
                Maintenance Requirements (high/med/low) - (feeding, watering, pruning): 
                <br></br>
                {/* <br></br> */}
                To help establish your new Cascade Palm, fertilize sparingly at least 6 inches away from the base, tri-annually with a slow time released product.
                <br></br>
                <br></br>
                The Cascade palm likes to be kept moist, especially while it’s getting established. But once established, keep it dry in winter and moist in summer. During warmer weather, palms should be watered regularly and thoroughly.
                <br></br>
                <br></br>
                Trim your palm carefully. The temptation is hard to resist, but many species of palms draw nutrients from old fronds long after they have begun to yellow or even brown. It is a very common mistake to over-prune palm trees, which weakens the overall plant and robs it of valuable nutrients. In general, remove fully browned leaves and never cut your palm down to just one or two new fronds.
                <br></br>
                {/* <br></br> */}
                </p>

                <p>Maximum Height of Mature Tree (Less than 1m, 1-2m, 2-3m, Greater than 3m):
                <br></br>
                {/* <br></br> */}
                1-2m – The maximum height the Cascade will grow is about 2 metres.
                </p>

                <p>Growth Rate (fast/med/slow):
                <br></br>
                {/* <br></br> */}
                Medium – The Cascade Palm has a moderate growth rate.
                </p>
                
                <p>Price: $50</p>

                <p>
                Relevant Facts Flowers:
                <br></br>
                {/* <br></br> */}
                The male stalks on each plant will release pollen, if the female flowers are pollinated their stalks turn orange as the seed matures.
                </p>

                <p>Relevant Facts Berries:
                <br></br>
                {/* <br></br> */}
                Immature fruit is ovoid, shiny and dark green. Fruit remains sessile on the flower stalk. It turns black when mature and measures about 1.25 cm through the long axis and 1 cm in diameter.
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
 
export default CascadePalmTree;