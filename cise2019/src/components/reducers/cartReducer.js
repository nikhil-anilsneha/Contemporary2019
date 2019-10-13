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
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING } from '../actions/action-types/cart-actions'

const initState = {
    //stores all items/filters used in the web application
    items: [
        { id: 1, title: 'Ash', price: 50, img: Item1, type: 'Hardwood' },
        { id: 2, title: 'Oak', price: 60, img: Item2, type: 'Hardwood' },
        { id: 3, title: 'Apple', price: 25, img: Item3, type: 'Fruit' },
        { id: 4, title: 'Tomato', price: 30, img: Item4, type: 'Fruit' },
        { id: 5, title: 'Cascade Palm', price: 50, img: Item5, type: 'Palm' },
        { id: 6, title: 'King Palm', price: 100, img: Item6, type: 'Palm' },
        { id: 7, title: 'Kauri', price: 120, img: Item7, type: 'NZ Native' },
        { id: 8, title: 'Pohutukawa', price: 150, img: Item8, type: 'NZ Native' },
        { id: 9, title: 'Shovel', price: 10, img: Item9, type: 'Tool' },
        { id: 10, title: 'Rake', price: 10, img: Item10, type: 'Tool' },
        { id: 11, title: 'Potting Mix', price: 15, img: Item11, type: 'Tool' },
    ],
    MediumCostItems: [
        { id: 2, title: 'Oak Tree', price: 60, img: Item2, type: 'Hardwood' },
        { id: 6, title: 'King Palm', price: 100, img: Item6, type: 'Palm' },
    ],
    HighCostItems: [
        { id: 7, title: 'Kauri Tree', price: 120, img: Item7, type: 'NZ Native' },
        { id: 8, title: 'Pohutukawa', price: 150, img: Item8, type: 'NZ Native' },
    ],
    PartialShadeItems: [
        { id: 2, title: 'Oak Tree', price: 60, img: Item2, type: 'Hardwood' },
        { id: 4, title: 'Tomato', price: 30, img: Item4, type: 'Fruit' },
        { id: 5, title: 'Cascade Palm', price: 50, img: Item5, type: 'Palm' },
    ],
    HighSunItems: [
        { id: 1, title: 'Ash Tree', price: 50, img: Item1, type: 'Hardwood' },
        { id: 2, title: 'Oak Tree', price: 60, img: Item2, type: 'Hardwood' },
        { id: 3, title: 'Apple Tree', price: 25, img: Item3, type: 'Fruit' },
        { id: 4, title: 'Tomato', price: 30, img: Item4, type: 'Fruit' },
        { id: 6, title: 'King Palm', price: 100, img: Item6, type: 'Palm' },
        { id: 7, title: 'Kauri Tree', price: 120, img: Item7, type: 'NZ Native' },
        { id: 8, title: 'Pohutukawa', price: 150, img: Item8, type: 'NZ Native' }
    ],
    hardWoodItems: [
        { id: 1, title: 'Ash Tree', price: 50, img: Item1, type: 'Hardwood' },
        { id: 2, title: 'Oak Tree', price: 60, img: Item2, type: 'Hardwood' }
    ],
    FruitItems: [
        { id: 3, title: 'Apple Tree', price: 25, img: Item3, type: 'Fruit' },
        { id: 4, title: 'Tomato', price: 30, img: Item4, type: 'Fruit' }
    ],
    PalmItems: [
        { id: 5, title: 'Cascade Palm', price: 50, img: Item5, type: 'Palm' },
        { id: 6, title: 'King Palm', price: 100, img: Item6, type: 'Palm' }
    ],
    NZNativeItems: [
        { id: 7, title: 'Kauri Tree', price: 120, img: Item7, type: 'NZ Native' },
        { id: 8, title: 'Pohutukawa', price: 150, img: Item8, type: 'NZ Native' }
    ],
    ToolItems: [
        { id: 9, title: 'Shovel', price: 10, img: Item9, type: 'Tool' },
        { id: 10, title: 'Rake', price: 10, img: Item10, type: 'Tool' },
        { id: 11, title: 'Potting Mix', price: 15, img: Item11, type: 'Tool' }
    ],
    CheapItems: [
        { id: 3, title: 'Apple Tree', price: 25, img: Item3, type: 'Fruit' },
        { id: 4, title: 'Tomato', price: 30, img: Item4, type: 'Fruit' },
        { id: 9, title: 'Shovel', price: 10, img: Item9, type: 'Tool' },
        { id: 10, title: 'Rake', price: 10, img: Item10, type: 'Tool' },
        { id: 11, title: 'Potting Mix', price: 15, img: Item11, type: 'Tool' }
    ],
    OneToTwoItems: [
        { id: 5, title: 'Cascade Palm', price: 50, img: Item5, type: 'Palm' }
    ],
    ThreePlusItems: [
        { id: 1, title: 'Ash Tree', price: 50, img: Item1, type: 'Hardwood' },
        { id: 2, title: 'Oak Tree', price: 60, img: Item2, type: 'Hardwood' },
        { id: 3, title: 'Apple Tree', price: 25, img: Item3, type: 'Fruit' },
        { id: 4, title: 'Tomato', price: 30, img: Item4, type: 'Fruit' },
        { id: 6, title: 'King Palm', price: 100, img: Item6, type: 'Palm' },
        { id: 7, title: 'Kauri Tree', price: 120, img: Item7, type: 'NZ Native' },
        { id: 8, title: 'Pohutukawa', price: 150, img: Item8, type: 'NZ Native' }
    ],
    addedItems: [],
    totalItem: 0,
    total: 0,
    checked: 0
}
const cartReducer = (state = initState, action) => {
    //INSIDE HOME COMPONENT
    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let tItem = 0;
        //check if the action id exists in the addedItems
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            tItem = tItem + 1;
            return {
                ...state,
                total: state.total + addedItem.price,
                totalItem: state.totalItem + tItem
            }
        }
        else {
            addedItem.quantity = 1;
            tItem = tItem + 1;
            //calculating the total
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                totalItem: state.totalItem + tItem
            }

        }
    }
    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state.addedItems.find(item => action.id === item.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)

        //calculating the total
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }
    //INSIDE CART COMPONENT
    if (action.type === ADD_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        let tItem = 0;
        addedItem.quantity += 1
        tItem++;
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal,
            totalItem: state.totalItem + tItem
        }
    }
    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        let tItem = 0;
        //if the qt == 0 then it should be removed
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                totalItem: state.totalItem - 1
            }
        }
        else {
            addedItem.quantity -= 1
            tItem++;
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
                totalItem: state.totalItem - tItem
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 6,
            checked: 1
        }
    }

    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 6,
            checked: 0
        }
    }
    if (action.type === 'EXP_SHIPPINGA') {
        return {
            ...state,
            total: state.total + 69,
            checked: 3
        }
    }
    if (action.type === 'EXP_SHIPPINGA2') {
        return {
            ...state,
            total: state.total + 63,
            checked: 3
        }
    }
    if (action.type === 'EXP_SHIPPINGS') {
        return {
            ...state,
            total: state.total - 69,
            checked: 0
        }
    }
    if (action.type === 'EXP_SHIPPINGS2') {
        return {
            ...state,
            total: state.total - 63,
            checked: 1
        }
    }

    else {
        return state
    }

}

export default cartReducer