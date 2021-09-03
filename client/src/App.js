import React from 'react';
import { ROUTES } from 'utils/routes';
import { Route } from 'react-router';
import Main from 'pages/Main/Main';
import SignUp from 'pages/SignUp/SignUp';

const App = () => {
  return (
    <div>
      <Route exact path={ROUTES.MAIN} component={Main} />
      <Route path={ROUTES.SIGNUP} component={SignUp} />
    </div>
  );
};

export default App;
