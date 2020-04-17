import {createAction} from "redux-actions";

export const fetchProductsRequest = createAction("FETCH_PRODUCTS_REQUEST");
export const fetchProductsFailure = createAction("FETCH_PRODUCTS_FAILURE");
export const fetchProductsSuccess = createAction("FETCH_PRODUCTS_SUCCESS");
