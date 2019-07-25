import uuid from 'uuid';
import {GET_ACCOUNT, ADD_ACCOUNT, DELETE_ACCOUNT, ACCOUNT_LOADING} from '../actions/types';

const initialState= {
    accounts: [],
    loading: false
}

export default function(state=initialState,action){
    switch(action.type){
        case GET_ACCOUNT: 
        return {
            ...state,
            accounts: action.payload,
            loading:false
        };
        case DELETE_ACCOUNT:
        return {
            ...state,
            accounts: state.accounts.filter(account => account._id != action.payload)
        };
        case ADD_ACCOUNT:
        return {
            ...state,
            accounts: [action.payload, ...state.accounts]
        };
        case ACCOUNT_LOADING:
        return {
            ...state,
             loading:true
        };
        default:
        return state;
    }
}