import uuid from 'uuid';
import {GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORIES, CATEGORIES_LOADING} from '../actions/types';

const initialState= {
    categories: [],
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_CATEGORIES: 
        return {
            ...state,
            categories: action.payload,
            loading:false
        };
        case DELETE_CATEGORIES:
        return {
            ...state,
            categories: state.categories.filter(category => category._id != action.payload)
        };
        case ADD_CATEGORY:
        return {
            ...state,
            categories: [action.payload, ...state.categories]
        };
        case CATEGORIES_LOADING:
        return {
            ...state,
             loading:true
        };
        default:
        return state;
    }
}