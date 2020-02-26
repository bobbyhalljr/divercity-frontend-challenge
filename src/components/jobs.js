import React from 'react';
import CustomModal from '../components/modal';
// import data from '../mockAPI/data';

const Jobs = ({ match, jobs }) => {
    return (
        <div>
            {jobs.map(job => {
                return (
                    <div className=''>
                        <div className='m-10 p-10 border shadow-lg rounded-lg bg-gray-100' key={job.id}>
                        <h1 className='text-2xl pb-4'>{job.title}</h1>
                        <h2 className='text-xl pb-8'>{job.description}</h2>
                        <h3>Location: {job.location}</h3>
                        <h3>Company: {job.company}</h3>
                        <h3>Job Type: {job.job_type}</h3>
                        <h4>Application Count: {job.applicant_count}</h4>
                        <h2 className='text-xl pt-8'>Skills for the job:</h2>
                        <h3 className='pt-6 pb-6'>
                            {job.skills_tag.map(skill => (
                                <div key={skill}>
                                    {skill}
                                </div>
                            ))}
                        </h3>
                        <CustomModal match={match} />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Jobs;