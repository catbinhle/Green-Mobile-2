import { HOME_GET_API } from '../defines/ActionTypes';

export const homeGetAPI = (params) => (
    {
        type: HOME_GET_API,
        payload: params
    }
)