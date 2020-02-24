import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
// import data from '../mockAPI/data';

const Jobs = () => {
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
                        <h4>
                            {job.skills_tag.map(skill => (
                                <div key={skill}>
                                    {skill}
                                </div>
                            ))}
                        </h4>
                        <div>
                            <button style={{ background: "dodgerblue", color: "white", fontSize: "18px", fontWeight: "600", paddingLeft: "30px", paddingTop: "10px", paddingRight: "30px", paddingBottom: "10px" ,borderRadius: "40px" }}>APPLY HERE</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Jobs;