import React from 'react';
import { ROUTES } from 'utils/routes';
import { Route } from 'react-router';
import Main from 'pages/Main/Main';
import Login from 'pages/Login/Login';
import SignUp from 'pages/SignUp/SignUp';
import Navbar from 'components/Navbar/Navbar';
import Post from 'pages/Post/Post';

const App = () => {
  return (
    <div>
      <Navbar />
      <Route exact path={ROUTES.MAIN} component={Main} />
      <Route path={ROUTES.SIGNUP} component={SignUp} />
      <Route path={ROUTES.LOGIN} component={Login} />
      <Route path={ROUTES.POST} component={Post} />
    </div>
  );
};

export default App;
