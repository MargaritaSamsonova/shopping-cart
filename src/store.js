import rootReducer from "./modules";
import createSagaMiddleWare from "redux-saga";
import {applyMiddleware, compose, createStore} from "redux";
import {rootSaga} from "./modules/rootSaga";

const sagaMiddleware = createSagaMiddleWare();

const createAppStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(sagaMiddleware),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : noop => noop,
        ),
    );

    sagaMiddleware.run(rootSaga);

    return store;
};

export default createAppStore;
