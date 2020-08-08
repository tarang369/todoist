import './App.scss';

import { Route, BrowserRouter as Router } from 'react-router-dom';

import { AuthProvider } from './context';
import Login from './components/Login';
import Main from './Main';
import PrivateRoute from './PrivateRoute';
import React from 'react';
import Signup from './components/Signup';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <PrivateRoute exact path='/' component={Main} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
      </Router>
    </AuthProvider>
  );
};
