import { GET_TRANSACTION, ADD_TRANSACTION, DELETE_TRANSACTION, TRANSACTION_LOADING } from '../actions/types';

const initialState = {
    transactions: [],
    loading: false
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_TRANSACTION:
            return {
                ...state,
                transactions: action.payload,
                loading: false
            };
        case DELETE_TRANSACTION:
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id != action.payload)
            };
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };
        case TRANSACTION_LOADING:
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }
}