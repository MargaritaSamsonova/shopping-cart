import {createAction} from "redux-actions";

export const fetchProductsCartRequest = createAction("FETCH_PRODUCTS_CART_REQUEST");
export const fetchProductsCartSuccess = createAction("FETCH_PRODUCTS_CART_SUCCESS");

export const addProductsToCartRequest = createAction("ADD_PRODUCTS_TO_CART_REQUEST");
export const addProductsToCartSuccess = createAction("ADD_PRODUCTS_TO_CART_SUCCESS");

export const deleteProductsFromCartRequest = createAction("DELETE_PRODUCTS_FROM_CART_REQUEST");
export const deleteProductFromCartSuccess = createAction("DELETE_PRODUCT_FROM_CART_SUCCESS");

export const changeProductInCartRequest = createAction("CHANGE_PRODUCT_IN_CART_REQUEST");
export const changeProductInCartSuccess = createAction("CHANGE_PRODUCT_IN_CART_SUCCESS");

export const incrementQuantityProductInCartRequest = createAction("INCREMENT_QUANTITY_PRODUCT_IN_CART_REQUEST");
export const decrementQuantityProductInCartRequest = createAction("DECREMENT_QUANTITY_PRODUCT_IN_CART_REQUEST");

export const productsCartFailure = createAction("PRODUCTS_CART_FAILURE");

