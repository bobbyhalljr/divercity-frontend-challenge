import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './login';
import Register from './register';
import Jobs from './jobs';
import Apply from './apply';
import PrivateRoute from './privateRoute';

function App(props) {
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
            <Link to="/jobs">Jobs Page</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/jobs/:id/apply" render={props => <Apply {...props} />} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path='/jobs' render={props => <Jobs {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
