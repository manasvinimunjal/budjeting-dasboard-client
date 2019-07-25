import axios from 'axios';
import { GET_BUDGET, ADD_BUDGET, DELETE_BUDGET, BUDGET_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
export const getBudget = () => dispatch => {
    dispatch(setBudgetLoading());
    axios
        .get('http://localhost:5000/api/budget')
        .then(res =>
            dispatch({
                type: GET_BUDGET,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const addBudget = (budget) => (dispatch, getState) => {
    axios
        .post('http://localhost:5000/api/budget', budget, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_BUDGET,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteBudget = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:5000/api/budget/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_BUDGET,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const setBudgetLoading = () => {
    return {
        type: BUDGET_LOADING

    };
}