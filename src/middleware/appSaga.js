import { call, put, select, takeEvery } from 'redux-saga/effects';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  APP_LOGIN, APP_LOGIN_FAIL, APP_LOGIN_SUCCESS, APP_SHOW_LOADING, HOME_GET_API,
  HOME_GET_API_FAIL, HOME_GET_API_SUCCESS, HOME_POST_API, HOME_POST_API_FAIL,
  HOME_POST_API_SUCCESS, TOURS_GET_API, TOURS_GET_API_FAIL,
  TOURS_GET_API_SUCCESS,
} from '../defines/ActionTypes';
import { apiGET, apiPOST } from '../servers/API';

function* login(action) {
    try {
        const response = yield call(apiPOST, {
            uri: 'http://172.31.98.148:3000/users/authenticate',
            param: action?.payload,
        })
        if (response.status == 200) {
            yield put({
                type: APP_LOGIN_SUCCESS,
                payload: response?.data
            })
            try {
                AsyncStorage.setItem('@AppAccount', JSON.stringify({
                    username: action?.payload?.username,
                    password: action?.payload?.password,
                }))
              } catch (e) {
                // saving error
              }
        } else {
            yield put({
                type: APP_LOGIN_FAIL,
                payload: error
            })
        }
    } catch (error) {
        yield put({
            type: APP_LOGIN_FAIL,
            payload: error
        })
    }
}

function* homeGetAPI(action) {
    try {
        yield put({
            type: APP_SHOW_LOADING,
            payload: true
        })
        const {app} = yield select()
        const response = yield call(apiGET, {
            uri: 'http://172.31.98.148:3000/home/getListHome',
            auth: app?.account?.token
        })
        yield put({
            type: APP_SHOW_LOADING,
            payload: false
        })
        if (response.status === 200) {
            yield put({
                type: HOME_GET_API_SUCCESS,
                payload: response?.data
            })
        } else {
            yield put({
                type: HOME_GET_API_FAIL,
                payload: error
            })
        }
    } catch (error) {
        yield put({
            type: HOME_GET_API_FAIL,
            payload: error
        })
    }
}

function* homePostAPI(action) {
    try {
        const {app} = yield select()
        const response = yield call(apiPOST, {
            uri: 'http://172.31.98.148:3000/home/postHome',
            auth: app?.account?.token,
            param: action.payload
        })
        if (response.status === 200) {
            yield put({
                type: HOME_POST_API_SUCCESS,
                payload: response?.data
            })
        } else {
            yield put({
                type: HOME_POST_API_FAIL,
                payload: error
            })
        }
    } catch (error) {
        yield put({
            type: HOME_POST_API_FAIL,
            payload: error
        })
    }
}

function* toursGetAPI(action) {
    try {
        const response = yield call(apiGET, {uri: 'https://cattechsolutions.com/maui.json'})
        if (response.status >= 300) {
            yield put({
                type: TOURS_GET_API_FAIL,
                payload: response?.error
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
            payload: error
        })
    }
}

function* appSaga() {
    yield takeEvery(APP_LOGIN, login)
    //Home
    yield takeEvery(HOME_GET_API, homeGetAPI)
    yield takeEvery(HOME_POST_API, homePostAPI)
    //Tour
    yield takeEvery(TOURS_GET_API, toursGetAPI)
}

export default appSaga