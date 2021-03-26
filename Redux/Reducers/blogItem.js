import {
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL
} from '../Reducers/Constant';

// const blogItems = (state = [], action) => {
//     switch (action.type) {
//         case  GET_BLOG_REQUEST:
//             return [...state, action.payload]
//         case  GET_BLOG_SUCCESS:
//             return state.filter(blogItem => blogItem !== action.payload)
//         case GET_BLOG_FAIL:
//             return state = []
//     }
//     return state;
// }
// export default blogItems

 export const getBlogReducer = (state = {}, action) => {
    switch (action.type) {
        case  GET_BLOG_REQUEST:
            return {
                loading: true
            }
        case  GET_BLOG_SUCCESS:
           // return state.filter(blogItem => blogItem !== action.payload)
           return {
            loading: false,
            blogs:action.payload
        }
        case GET_BLOG_FAIL:
            //return state = []
return {
    loading: false,
    error:action.payload
}
    }
    return state;
}
