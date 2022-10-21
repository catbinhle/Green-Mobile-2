import { call, put, takeEvery } from 'redux-saga/effects';

import {
  HOME_GET_API, HOME_GET_API_FAIL, HOME_GET_API_SUCCESS, TOURS_GET_API,
  TOURS_GET_API_FAIL, TOURS_GET_API_SUCCESS,
} from '../defines/ActionTypes';
import { api } from '../servers/API';

function* homeGetAPI(action) {
    try {
        const response = yield call(api, {uri: 'https://cattechsolutions.com/maui.json'})
        if (response.status >= 300) {
            yield put({
                type: HOME_GET_API_FAIL,
                payload: error
            })
        } else {
            yield put({
                type: HOME_GET_API_SUCCESS,
                payload: response?.data
            })
        }
    } catch (error) {
        yield put({
            type: HOME_GET_API_FAIL,
            payload: error
        })
    }
}

function* toursGetAPI(action) {
    try {
        const response = yield call(api, {uri: 'https://cattechsolutions.com/maui.json'})
        if (response.status >= 300) {
            yield put({
                type: TOURS_GET_API_FAIL,
                payload: response?.data
            })
        } else {
            yield put({
                type: TOURS_GET_API_SUCCESS,
                payload: response?.data
            })
        }
        
    } catch (error) {
        yield put({
            type: TOURS_GET_API_FAIL,
            payload: response?.data
        })
    }
}

function* appSaga() {
    yield takeEvery(HOME_GET_API, homeGetAPI)
    yield takeEvery(TOURS_GET_API, toursGetAPI)
}

export default appSaga