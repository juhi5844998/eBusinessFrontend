import {createStore,combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools } from 'redux-devtools-extension/developmentOnly'
import {getBlogReducer} from '../Redux/Reducers/blogItem'


const reducers = combineReducers({
    getBlogAll: getBlogReducer
})
const initialState={

}

const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
)
export default store

