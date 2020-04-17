import {handleActions} from "redux-actions";
import {fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess} from "./actions";
import {combineReducers} from "redux";

const initialState = [];

const elements = handleActions({
    [fetchProductsRequest]: () => [],
    [fetchProductsSuccess]: (state, action) => action.payload,
}, initialState);

const isLoading = handleActions({
    [fetchProductsRequest]: () => true,
    [fetchProductsSuccess]: () => false,
    [fetchProductsFailure]: () => false,
}, false);

const error = handleActions({
    [fetchProductsRequest]: () => null,
    [fetchProductsFailure]: (state, action) => action.payload
}, null)

export default combineReducers({
    elements,
    isLoading,
    error
});
