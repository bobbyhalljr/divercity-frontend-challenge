import React from 'react';
import { Link } from 'react-router-dom';
import Apply from './apply';
import Login from './login'
import CustomModal from '../components/modal';
// import data from '../mockAPI/data';

const Jobs = ({ match, jobs }) => {
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
                        <CustomModal />
                        {/* <Link to={`/jobs/${job.id}/apply`}>
                            <button onClick={() => verifyUser()} style={{ background: "dodgerblue", color: "white", fontSize: "18px", fontWeight: "600", paddingLeft: "30px", paddingTop: "10px", paddingRight: "30px", paddingBottom: "10px" ,borderRadius: "40px" }}>APPLY HERE</button>
                        </Link> */}
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

        </div>
    )
}

export default Jobs;