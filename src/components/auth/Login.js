import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import decode from 'jwt-decode';
import {Route,Redirect} from 'react-router-dom';

import { responsiveFontSizes } from '@material-ui/core/styles';
import NavBar from '../NavBar';


const Login = props => {
    
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;
  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    
    let config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    let data = {
      email: email,
      password: password
    };

    axios
      .post('http://localhost:5000/api/auth', data, config)
      .then(response => {
      
        let decodeddata = decode(response.data.token);
        console.log(decodeddata);
       console.log(response)
     
        sessionStorage.setItem('token', response.data.token);
      
      })
      .catch(error => {
        console.log('error ', error);
      });
  };
  return (
    <Fragment>
      <h1>Sign In</h1>
      <p>Sign Into Your Account</p>
      <form onSubmit={e => onSubmit(e)}>
        <div>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={e => onChange(e)}
          />
        </div>
        <div>
          <input
            type='password'
            placeholder='Password'
            name='password'
            minLength='6'
            value={password}
            onChange={e => onChange(e)}
          />
        </div>

        <input type='submit' value='Login' />
      </form>
      <p>
        <Link to='/register'>Register</Link>
      </p>
    </Fragment>
  );
};

export default Login;