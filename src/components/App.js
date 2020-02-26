import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Login from './login';
import Register from './register';
import Jobs from './jobs';
import Apply from './apply';
import PrivateRoute from './privateRoute';

const App = (props) => {
  const [jobs, setJobs] = useState([])


    const getJobs = () => {
        axiosWithAuth()
        .get('/jobs')
        .then(res => {
            console.log(res.data)
            setJobs(res.data.jobs)
        })
        .catch(err => console.log(err.response))
    }

    // const applyForJob = ({ id }) => {
    //     axiosWithAuth()
    //     .post(`/jobs/${id}/apply`)
    //     .then(res => {
    //         console.log(res.data)
    //         setBody(res.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    useEffect(() => {
        getJobs();
    }, [])

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
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path='/jobs' render={props => <Jobs jobs={jobs} {...props} /> }/>
          <Route path='/jobs/:id/apply' component={Apply} jobs={jobs} />
          {/* <Route exact path={`/jobs/:id/apply`} render={props => <Apply jobs={jobs} {...props} />} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
