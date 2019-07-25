import { combineReducers } from 'redux';
import categoryReducer from './categoryReducer';
import accountReducer from './accountReducer';
import budgetReducer from './budgetReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import transactionReducer from './transactionReducer';

export default combineReducers({
    category: categoryReducer,
    budget: budgetReducer,
    account: accountReducer,
    error: errorReducer,
    auth: authReducer,
    transaction: transactionReducer
})