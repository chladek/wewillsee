import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import { useLogoutMutation } from './generated/graphql';
import { setAccessToken } from './token';

const Routes: React.FC = () => {
  const [logout] = useLogoutMutation();
  return (
    <BrowserRouter>
      <div>
        <header>
          <div>
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <Link to="/register">Register</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
            <div>
              <Link to="/users">users</Link>
            </div>
            <div>
              <button
                onClick={async () => {
                  await logout();
                  setAccessToken('');
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
