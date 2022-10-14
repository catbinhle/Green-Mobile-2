import { HOME_GET_API } from '../defines/ActionTypes';

export const homeGetAPISuccess = (params) => (
    {
        type: HOME_GET_API,
        payload: params
    }
)

export const homeGetAPI = () => (
    async (dispatch, getState) => {
        console.log('BINH GREEN: ', getState().app)
        fetch('https://cattechsolutions.com/maui.json')
        .then((response) => response.json())
        .then((json) => {
            dispatch(homeGetAPISuccess(json))
        })
        .catch((error) => {
            console.error(error)
        })
    }
)
