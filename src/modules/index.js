import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import theme from './theme';

export default combineReducers({
    products,
    cart,
    theme
})
