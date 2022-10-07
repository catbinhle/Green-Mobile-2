const initialState = {
    isLogin: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'APP_LOGIN': 
            return {...state, isLogin: true}
        case 'APP_LOGOUT':
            return {...state, isLogin: false}
    }
    return state
}

export default appReducer