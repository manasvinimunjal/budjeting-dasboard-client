import uuid from 'uuid';
import {GET_BUDGET, ADD_BUDGET, DELETE_BUDGET, BUDGET_LOADING} from '../actions/types';

const initialState= {
    budgets: [],
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_BUDGET: 
        return {
            ...state,
            budgets: action.payload,
            loading:false
        };
        case DELETE_BUDGET:
        return {
            ...state,
            budgets: state.budgets.filter(budget => budget._id != action.payload)
        };
        case ADD_BUDGET:
        return {
            ...state,
            budgets: [action.payload, ...state.budgets]
        };
        case BUDGET_LOADING:
        return {
            ...state,
             loading:true
        };
        default:
        return state;
    }
}