import { applyMiddleware, createStore } from 'redux';

import createSagaMiddleware from '@redux-saga/core';

import appSaga from '../middleware/appSaga';
// import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducers';

//**** Notes: dùng createStore của Redux
const sagaMiddleware = createSagaMiddleware()
const configureStore = (initialState) => {
    const store = createStore(
        rootReducer, 
        initialState,
        applyMiddleware(sagaMiddleware)
    )
    sagaMiddleware.run(appSaga)
    return store
}

export default configureStore

//**** Notes: dùng @reduxjs/toolkit'
// const store = configureStore({
//     reducer: rootReducer,
// })

// export default store

