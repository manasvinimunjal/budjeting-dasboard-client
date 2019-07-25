import React from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from './../components/App';
import Account from './../components/Account';
import Category from './../components/Category';
import Budget from './../components/Budget';
import Posts from './../components/Posts';
import FileNotFound from './../components/FileNotFound';
import Home from '../components/Home';
import NavBar from '../components/NavBar';
import Login from '../components/auth/Login'
import Transaction from '../components/Transactions';
import {loadUser} from '../actions/authActions';


import {Provider} from 'react-redux';
import store from './../components/store';

class AppRouter extends React.Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
<Provider store={store}>
<BrowserRouter>
<div>
      
    <NavBar/>
  <Switch>
   <Route path="/" exact component={App}/>
   <Route path="/account" component={Account}/>
   <Route path="/category" component={Category}/>
   <Route path="/transaction" component={Transaction}/>
   <Route path="/budget" component={Budget}/>
   <Route path="/account" component={Account}/>
   <Route path="/posts" component={Posts}/>
   <Route path="/login" component={Login}/>
   <Route  component={FileNotFound}/>
   </Switch>
   </div>

</BrowserRouter>
   </Provider>
    );
  }
}

export default AppRouter;