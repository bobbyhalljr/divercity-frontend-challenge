import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Login from './login';
import Register from './register';
import Jobs from './jobs';
import Apply from './apply';
import Header from './header';

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

    useEffect(() => {
        getJobs();
    }, [])

  return (
    <Router>
      <div className="App bg-gray-200">
        <Header />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path='/' render={props => <Jobs jobs={jobs} {...props} /> }/>
          <Route path='/jobs/:id/apply' component={Apply} jobs={jobs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
