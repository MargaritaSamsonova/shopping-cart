import {createAction} from "redux-actions";

export const fetchProductsRequest = createAction("FETCH_PRODUCTS_REQUEST");
export const fetchProductsFailure = createAction("FETCH_PRODUCTS_FAILURE");
export const fetchProductsSuccess = createAction("FETCH_PRODUCTS_SUCCESS");

export const addSizeFilter = createAction("ADD_SIZE_FILTER");
export const deleteSizeFilter = createAction("DELETE_SIZE_FILTER");
export const clearFilterSizes = createAction("CLEAR_SIZE_FILTER");

export const updateOrder = createAction("UPDATE_ORDER");

export const SIZES = ["XS", "S", "M", "L", "XL"];
export const ORDER_BY = {
    PRICE_ASD: "PRICE_ASD",
    PRICE_DESC: "PRICE_DESC",
}
