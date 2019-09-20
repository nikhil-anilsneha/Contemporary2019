import Item1 from './tomato.jpg'
import Item2 from './tomato.jpg'
import Item3 from './tomato.jpg'
import Item4 from './tomato.jpg'
import Item5 from './tomato.jpg'
import Item6 from './tomato.jpg'
import { ADD_TO_CART} from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {id:1,title:'Tomato', desc: "Soup Material 100", price:110,img:Item1},
        {id:2,title:'Tomato', desc: "You can make yummy curry", price:80,img: Item2},
        {id:3,title:'Tomato', desc: "This is a special tomato, it's a vegetable, not a fruit",price:120,img: Item3},
        {id:4,title:'Tomato', desc: "This one's for fruit salad", price:260,img:Item4},
        {id:5,title:'Tomato', desc: "Extremely throwable", price:160,img: Item5},
        {id:6,title:'Tomato', desc: "Plant this stuff",price:90,img: Item6}
    ],
    addedItems:[],
    total: 0

}
const cartReducer= (state = initState,action)=>{
   
    //INSIDE HOME COMPONENT
    if(action.type === ADD_TO_CART){
          let addedItem = state.items.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal
            }
            
        }
    }
    
  else{
    return state
    }
    
}

export default cartReducer
