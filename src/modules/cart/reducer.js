import {handleActions} from "redux-actions";
import {
    changeProductInCartRequest,
    fetchProductsCartRequest,
    productsCartFailure,
    fetchProductsCartSuccess,
    addProductsToCartSuccess,
    changeProductInCartSuccess,
    deleteProductFromCartSuccess,
    addProductsToCartRequest
} from "./actions";
import {combineReducers} from "redux";

const elements = handleActions({
    [addProductsToCartSuccess]: (state, action) => [...state, action.payload],

    [deleteProductFromCartSuccess]: (state, action) => state.filter(item => item.id !== action.payload),

    [changeProductInCartSuccess]: (state, action) => state.map(item => (item.id === action.payload.id) ? {
            ...item,
            ...action.payload
        } : item),
    [fetchProductsCartSuccess]: (state, action) => action.payload,

    [productsCartFailure]: (state, action) => action.payload,
}, []);

const isLoading = handleActions({
    [fetchProductsCartRequest]: () => true,
    [productsCartFailure]: () => false,
    [fetchProductsCartSuccess]: () => false,
}, false);

const error = handleActions({
    [addProductsToCartRequest]: () => null,
    [addProductsToCartSuccess]: () => null,
    [deleteProductFromCartSuccess]: () => null,
    [changeProductInCartSuccess]: () => null,
    [fetchProductsCartSuccess]: () => null,
    [productsCartFailure]: (state, action) => action.payload
}, null)

export default combineReducers({
    elements,
    isLoading,
    error
});
