import axios from 'axios';
import { GET_CATEGORIES, ADD_CATEGORY, DELETE_CATEGORIES, CATEGORIES_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';
export const getCategories = () => (dispatch, getState) => {
    dispatch(setCategoriesLoading());
    axios
        .get('http://localhost:5000/api/tasks', tokenConfig(getState))
        .then(res =>
            dispatch({
                type: GET_CATEGORIES,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}
export const addCategory = (category) => (dispatch, getState) => {
    axios
        .post('http://localhost:5000/api/tasks', category, tokenConfig(getState))
        .then(res =>
            dispatch({
                type: ADD_CATEGORY,
                payload: res.data
            }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}

export const deleteCategory = (id) => (dispatch, getState) => {
    axios.delete(`http://localhost:5000/api/tasks/${id}`, tokenConfig(getState))
        .then(res => dispatch({
            type: DELETE_CATEGORIES,
            payload: id
        }))
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}


export const setCategoriesLoading = () => {
    return {
        type: CATEGORIES_LOADING

    };
}