import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
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
          </div>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
