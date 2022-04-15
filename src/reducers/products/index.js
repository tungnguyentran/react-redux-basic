import { combineReducers } from 'redux';
import {ADD_CART, DELETE_CART, GET_PRODUCTS} from '../../actions/products';

const initProductState = {
    products: [],
    carts: [] // 1,2,3,4,5
}


const product = (state = initProductState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            console.log('reducer GET_PRODUCTS', action.payload)
            return {
                ...state,
                products: action.payload
            }
        case ADD_CART:
            console.log('reducer ADD_CART', action.payload)
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        case DELETE_CART:
            return {
                ...state,
                carts: state.carts.filter(productID => productID !== action.payload)
            }
        default:
            return state;
    }
};

const ShopApp = combineReducers({
    product: product
});

export default ShopApp
