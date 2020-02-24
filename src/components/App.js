import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './login';
import Register from './register'
import Jobs from './jobs'
import PrivateRoute from './privateRoute';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
        <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/jobs">Protected Jobs Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/jobs" component={Jobs} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
