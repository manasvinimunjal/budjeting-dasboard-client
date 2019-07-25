import axios from 'axios';
import { GET_ACCOUNT, ADD_ACCOUNT, DELETE_ACCOUNT, ACCOUNT_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
export const getAccount = () => (dispatch, getState) => {
    dispatch(setAccountLoading());
    axios
        .get('http://localhost:5000/api/accounts', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_ACCOUNT,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const addAccount = (account) => (dispatch, getState) => {
    axios
        .post('http://localhost:5000/api/accounts', account, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_ACCOUNT,
                payload: res.data
            }))
        .catch(err => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
}

export const deleteAccount = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:5000/api/accounts/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_ACCOUNT,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const setAccountLoading = () => {
    return {
        type: ACCOUNT_LOADING

    };
}