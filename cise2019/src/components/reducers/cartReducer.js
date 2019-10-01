import Item1 from '../images/AshTreePic.jpg';
import Item2 from '../images/OakTreePic.jpg'
import Item3 from '../images/AppleTreePic.jpg'
import Item4 from '../images/TomatoTreePic.jpg'
import Item5 from '../images/CascadePalmTreePic.jpg'
import Item6 from '../images/KingPalmTreePic.jpg'
import Item7 from '../images/KauriTreePic.jpg'
import Item8 from '../images/PohutukawaTreePic.jpg'
import Item9 from '../images/Shovel.png';
import Item10 from '../images/Rake.png';
import Item11 from '../images/PottingMix.jpg';
import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {
    items: [
        {id:1,title:'Ash Tree', price:50,img:Item1},
        {id:2,title:'Oak Tree', price:60,img: Item2},
        {id:3,title:'Apple Tree', price:25,img: Item3},
        {id:4,title:'Tomato', price:30,img:Item4},
        {id:5,title:'Cascade Palm', price:50,img: Item5},
        {id:6,title:'King Palm', price:100,img: Item6},
        {id:7,title:'Kauri Tree', price:120,img: Item7},
        {id:8,title:'Pohutukawa', price:150,img: Item8},
        {id:9,title:'Shovel', price:10,img:Item9},
        {id:10,title:'Rake', price:10,img: Item10},
        {id:11,title:'Potting Mix', price:15,img: Item11},
    ],
    addedItems:[],
    total: 0,
    checked: 0
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
    if(action.type === REMOVE_ITEM){
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
        console.log(itemToRemove)
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.items.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.items.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }

    if(action.type=== ADD_SHIPPING){
          return{
              ...state,
              total: state.total + 6,
              checked: 1
          }
    }

    if(action.type=== 'SUB_SHIPPING')
    {
        return{
            ...state,
            total: state.total - 6,
            checked : 0
        }
  }
    
  else{
    return state
    }
    
}

export default cartReducer