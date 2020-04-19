import { takeEvery, call, put, fork, select } from 'redux-saga/effects';
import {
    addProductsToCartRequest,
    addProductsToCartSuccess,
    deleteProductsFromCartRequest,
    changeProductInCartRequest,
    fetchProductsCartRequest,
    productsCartFailure,
    fetchProductsCartSuccess,
    changeProductInCartSuccess,
    deleteProductFromCartSuccess,
    decrementQuantityProductInCartRequest,
    incrementQuantityProductInCartRequest
} from './actions';

const getProductById = (id) =>
    fetch(`http://localhost:3000/cart/${id}`).then(response =>
        response.json(),
    );

const getProductByParams = (params) =>fetch(`http://localhost:3000/cart?${
        Object.keys(params).map((paramKey)=>`${paramKey}=${params[paramKey]}`).join("&")}`
    ).then(response =>
        response.json(),
    );

const getProductsCart = () =>
    fetch(`http://localhost:3000/cart`).then(response =>
        response.json(),
    );

const deleteProductFromCart = (id) =>
    fetch(`http://localhost:3000/cart/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(response =>
        response.json(),
    )

const addProductToCart = (product) => {
    const changedProduct = {...product, "quantity": "1"};

    return fetch(`http://localhost:3000/cart/`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(changedProduct),
    }).then(response =>
        response.json(),
    )
}


const patchProductInCart = (product) =>
    fetch(`http://localhost:3000/cart/${product.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
    }).then(response =>
        response.json(),
    );

export function* fetchAllProducts() {
    yield takeEvery(fetchProductsCartRequest, function*() {
        try {
            const result = yield call(getProductsCart);
            yield put(fetchProductsCartSuccess(result));
        } catch (error) {
            yield put(productsCartFailure(error));
        }
    });
}

export function* addProduct() {
    yield takeEvery(addProductsToCartRequest, function*(action) {
         try {
             const addedProductArr = yield call(getProductByParams, {
                 productId: action.payload.productId,
                 size: action.payload.size
             });
             const isAddedProduct = addedProductArr.length;

             if (isAddedProduct) {
                 const addedProduct = addedProductArr[0];
                 const result = yield call(patchProductInCart, {
                     ...addedProduct,
                     "quantity": +addedProduct.quantity + 1
                 });
                 yield put(changeProductInCartSuccess(result));
             } else {
                 const result = yield call(addProductToCart, action.payload);
                 yield put(addProductsToCartSuccess(result));
             }
        } catch (error) {
            yield put(productsCartFailure(error));
        }
    });
}

export function* decrementQuantityProduct() {
    yield takeEvery(decrementQuantityProductInCartRequest, function*(action) {
         try {
             const product = yield call(getProductById, action.payload);

             if (+product.quantity === 1) {
                 yield put(deleteProductsFromCartRequest(product.id));
             } else {
                 const result = yield call(patchProductInCart, {
                     ...product,
                     "quantity": +product.quantity - 1
                 });
                 yield put(changeProductInCartSuccess(result));
             }
        } catch (error) {
            yield put(productsCartFailure(error));
        }
    });
}

export function* incrementQuantityProduct() {
    yield takeEvery(incrementQuantityProductInCartRequest, function*(action) {
        try {
             const product = yield call(getProductById, action.payload);

             const result = yield call(patchProductInCart, {
                 ...product,
                 "quantity": +product.quantity + 1
             });
             yield put(changeProductInCartSuccess(result));
        } catch (error) {
            yield put(productsCartFailure(error));
        }
    });
}

export function* deleteProduct() {
    yield takeEvery(deleteProductsFromCartRequest, function*(action) {
         try {
             yield call(deleteProductFromCart, action.payload);
             yield put(deleteProductFromCartSuccess(action.payload));
        } catch (error) {
            yield put(productsCartFailure(error));
        }
    });
}
