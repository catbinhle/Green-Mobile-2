import {
  HOME_GET_API, HOME_POST_API, TOURS_GET_API,
} from '../defines/ActionTypes';

// export const homeGetAPISuccess = (params) => (
//     {
//         type: HOME_GET_API,
//         payload: params
//     }
// )

// export const toursGetAPISuccess = (params) => (
//     {
//         type: TOURS_GET_API_SUCCESS,
//         payload: params
//     }
// )
// export const updateUploadFie = (params) => (
//     {
//         type: UPDATE_PROGRESS_UPLOAD,
//         payload: params
//     }
// )


export const homeGetAPI = () => (
    {
        type: HOME_GET_API,
    }
)

export const homePostAPI = (param) => (
    {
        type: HOME_POST_API,
        payload: param
    }
)

export const toursGetAPI = () => (
    {
        type: TOURS_GET_API,
    }
)
