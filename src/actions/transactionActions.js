import axios from 'axios';
import { GET_TRANSACTION, ADD_TRANSACTION, DELETE_TRANSACTION, TRANSACTION_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
export const getTransactions = () => (dispatch, getState) => {
    dispatch(setTransactionLoading());
    axios
        .get('http://localhost:5000/api/transactions', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_TRANSACTION,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const addTransaction = (transaction) => (dispatch, getState) => {
    axios
        .post('http://localhost:5000/api/transactions', transaction, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_TRANSACTION,
                payload: res.data
            }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const deleteTransaction = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:5000/api/transactions/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_TRANSACTION,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const setTransactionLoading = () => {
    return {
        type: TRANSACTION_LOADING

    };
}