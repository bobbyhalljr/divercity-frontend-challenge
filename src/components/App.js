import React from 'react';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './login';
import Register from './register';
import Jobs from './jobs';
import Apply from './apply';
import PrivateRoute from './privateRoute';

const [jobs, setJobs] = useState([])
    const [body, setBody] = useState({
        motiv: '',
        coverLetter: ''
    })

    const getJobs = () => {
        axiosWithAuth()
        .get('/jobs')
        .then(res => {
            console.log(res.data)
            setJobs(res.data.jobs)
        })
        .catch(err => console.log(err.response))
    }

    const applyForJob = () => {
        axiosWithAuth()
        .post(`/jobs/${match.params.id}/apply`)
        .then(res => {
            console.log(res.data)
            setBody(res.data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    useEffect(() => {
        getJobs();
    }, [])

const App = ({ match }) => {
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
          <Route path='/jobs' component={Jobs}/>
          <PrivateRoute exact path={`/jobs/:id/apply`} component={jobs} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
