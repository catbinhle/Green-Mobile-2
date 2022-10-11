import { HOME_GET_API } from '../defines/ActionTypes';

const initialState = {
    homeData: []
}

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case HOME_GET_API: 
            return {...state, homeData: action.payload}
    }
    return state
}

export default homeReducer