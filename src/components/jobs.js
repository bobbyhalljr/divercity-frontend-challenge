import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useParams, Link, Route, Redirect } from 'react-router-dom';
import Apply from './apply';
// import data from '../mockAPI/data';

const Jobs = ({ match }) => {
    // const [jobs, setJobs] = useState([])
    // const [body, setBody] = useState({
    //     motiv: '',
    //     coverLetter: ''
    // })

    // const getJobs = () => {
    //     axiosWithAuth()
    //     .get('/jobs')
    //     .then(res => {
    //         console.log(res.data)
    //         setJobs(res.data.jobs)
    //     })
    //     .catch(err => console.log(err.response))
    // }

    // const applyForJob = () => {
    //     axiosWithAuth()
    //     .post(`/jobs/${match.params.id}/apply`)
    //     .then(res => {
    //         console.log(res.data)
    //         setBody(res.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

    // useEffect(() => {
    //     getJobs();
    // }, [])

    // let { id } = useParams();
    // console.log(props)

    return (
        <div>
            {jobs.map(job => {
                return (
                    <div style={{ margin: "30px" }} key={job.id}>
                        <h1>{job.title}</h1>
                        <h2>{job.description}</h2>
                        <h3>Location: {job.location}</h3>
                        <h3>Company: {job.company}</h3>
                        <h3>Job Type: {job.job_type}</h3>
                        <h4>Application Count: {job.applicant_count}</h4>
                        <h2>Skills for the job:</h2>
                        <h3>
                            {job.skills_tag.map(skill => (
                                <div key={skill}>
                                    {skill}
                                </div>
                            ))}
                        </h3>
                        <Link onClick={Apply} to={`/jobs/${match.params.id}`} style={{ background: "dodgerblue", color: "white", fontSize: "18px", fontWeight: "600", paddingLeft: "30px", paddingTop: "10px", paddingRight: "30px", paddingBottom: "10px" ,borderRadius: "40px" }}>APPLY HERE</Link>
                        {/* <Link to={`jobs/${props.match.params.id}/apply`} style={{ background: "dodgerblue", color: "white", fontSize: "18px", fontWeight: "600", paddingLeft: "30px", paddingTop: "10px", paddingRight: "30px", paddingBottom: "10px" ,borderRadius: "40px" }}>APPLY HERE</Link> */}
                        {/* <div onClick={console.log(jobs)}> */}
                            {/* <Route path={`/jobs/:id/apply`}
                                render={() => {
                                    return <Apply />
                                }}
                            >

                            </Route> */}
                        {/* </div> */}
                    </div>
                )
            })}
            {/* <Link to={`jobs/${props.match.params.id}/apply`} style={{ background: "dodgerblue", color: "white", fontSize: "18px", fontWeight: "600", paddingLeft: "30px", paddingTop: "10px", paddingRight: "30px", paddingBottom: "10px" ,borderRadius: "40px" }}>APPLY HERE</Link> */}

        </div>
    )
}

export default Jobs;