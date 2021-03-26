import {
    GET_BLOG_REQUEST,
    GET_BLOG_SUCCESS,
    GET_BLOG_FAIL
} from '../Reducers/Constant';
import axios from 'axios'

// export const getBlog = (payload) => {
//     return {
//         type: GET_BLOG_REQUEST,
//         payload
//     }
// }

// export const successBlog = (payload) => {
//     return {
//         type: GET_BLOG_SUCCESS,
//         payload
//     }
// }

// export const failBlog = () => {
//     return {
//         type: GET_BLOG_FAIL
//     }
// }

export const blogAction =()=> async(dispatch) =>{
    try{
        dispatch({
            type:GET_BLOG_REQUEST,
            loading:true
        })
        const {data} = await axios.get(`https://eco-business.herokuapp.com/api/getblog`);
        //console.log(data)
    dispatch({
        type:GET_BLOG_SUCCESS,
        payload:data
        
    })
    }catch(error){
        dispatch(
           { type: GET_BLOG_FAIL,
            payload:error
        }
        )
    }
    
}