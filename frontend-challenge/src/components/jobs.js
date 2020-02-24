import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth'
;
const Jobs = () => {
    const [jobs, setJobs] = useState([])

    const getJobs = () => {
        axiosWithAuth()
        .get('/jobs')
        .then(res => {
            console.log(res.data)
            setJobs(res.data)
        })
        .catch(err => console.log(err.response))
    }

    useEffect(() => {
        getJobs();
    }, [])

    return (
        <div>
            <h1>{jobs.message}</h1>
            {jobs.map(job => {
                return (
                    <div key={job.id}>
                        <h1>{job.title}</h1>
                        <h3>{job.description}</h3>
                    </div>
                )
            })}
        </div>
    )
}

export default Jobs;