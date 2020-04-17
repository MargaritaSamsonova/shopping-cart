import { fork } from 'redux-saga/effects';
import {
    addProduct,
    decrementQuantityProduct,
    deleteProduct,
    fetchAllProducts,
    incrementQuantityProduct
} from "./cart/sagas";
import {handleSeries} from "./products/sagas";

export function* rootSaga() {
    yield fork(handleSeries);
    yield fork(fetchAllProducts);
    yield fork(addProduct);
    yield fork(incrementQuantityProduct);
    yield fork(decrementQuantityProduct);
    yield fork(deleteProduct);
}
