import { ADD_TO_CART,REMOVE_ITEM,SUB_QUANTITY,ADD_QUANTITY,ADD_SHIPPING} from './action-types/cart-actions'
export const addToCart= (id)=>{
    return{
        type: ADD_TO_CART,
         id }
    }