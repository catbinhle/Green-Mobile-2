import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  APP_LOGIN_FAIL, APP_LOGIN_SUCCESS, APP_LOGOUT, APP_SHOW_LOADING,
} from '../defines/ActionTypes';

const initialState = {
    account: {},
    isLoadng: false,
    error: null
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case APP_SHOW_LOADING:
            return {...state, isLoadng: action.payload}
        case APP_LOGIN_SUCCESS: 
            return {...state, account: action.payload}
        case APP_LOGIN_FAIL:
            return {...state, error: action.payload}
        case APP_LOGOUT:
            AsyncStorage.removeItem('@AppAccount')
            return {...state, account: null}
    }
    return state
}



export default appReducer