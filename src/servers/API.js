// Promise
// export const api = ({uri, method = 'GET', param = {}, successAction, failAction}) => (
//     async (dispatch, getState) => {
//         fetch(uri, {
//             method: method,
//             headers: {
//                 Accept: 'application/json',
//                 'Content-Type': 'application/json',
//                 // 'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
//             },
//             // body: JSON.stringify(param)
//         })
//         .then((response) => response.json())
//         .then((json) => {
//             dispatch(successAction(json))
//         })
//         .catch((error) => {
//             failAction(error)
//         })
//     }
// )

//Async - Await
// export const api = async ({uri, method = 'GET', param = {}, successAction, failAction}) => {
//     return async function request(dispatch, getState) {
//         try {
//             const response = await fetch(uri, {
//                 method: method,
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json',
//                     // 'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
//                 },
//                 // body: JSON.stringify(param)
//             })

//             const json = await response.json()
//             dispatch(successAction(json))

//         } catch (error) {
//             failAction(error)
//         }
//     }
// }

// Dùng Axios
import axios from 'axios';

export const api = ({uri, method = 'GET', param = {}, successAction, failAction}) => (
    async (dispatch, getState) => {
        // fetch(uri, {
        //     method: method,
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //         // 'Authorization': isLogin ? null : 'Bearer ' +  userInfo?.accessToken, 
        //     },
        //     // body: JSON.stringify(param)
        // })
        // .then((response) => response.json())
        // .then((json) => {
        //     dispatch(successAction(json))
        // })
        // .catch((error) => {
        //     failAction(error)
        // })
        axios({
            method: method,
            url: uri
        }).then(function (response) {
            dispatch(successAction(response.data))
        }).catch((error) => {
            failAction(error)
        })
    }
)

