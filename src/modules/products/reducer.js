import {handleActions} from "redux-actions";
import {fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess,
    addSizeFilter, clearFilterSizes, deleteSizeFilter} from "./actions";
import {combineReducers} from "redux";

const elements = handleActions({
    [fetchProductsRequest]: () => [],
    [fetchProductsSuccess]: (state, action) => action.payload,
}, []);

const filterSizes = handleActions({
    [addSizeFilter]: (state, action) => [...state, action.payload],
    [deleteSizeFilter]: (state, action) => state.filter(item => item !== action.payload),
    [clearFilterSizes]: () => [],
}, []);

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
    filterSizes,
    isLoading,
    error
});
