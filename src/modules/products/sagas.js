import config from "../../config";
import { takeEvery, call, put } from 'redux-saga/effects';
import {
    fetchProductsRequest,
    fetchProductsFailure,
    fetchProductsSuccess,
} from './actions';

const getProducts = () =>
    fetch(`${config.backendUrl}/products`).then(response =>
        response.json(),
    );

export function* handleSeries() {
    yield takeEvery(fetchProductsRequest, function*() {
        try {
            const result = yield call(getProducts);
            yield put(fetchProductsSuccess(result));
        } catch (error) {
            yield put(fetchProductsFailure(error));
        }
    });
}
