import React, { useState, useEffect } from 'react';
import CustomModal from '../components/modal';
// import data from '../mockAPI/data';

const hidden = 'overflow-hidden h-32';
const visible = 'overflow-visible';

const show = (visible) => {
    return visible
}

const Jobs = ({ match, jobs }) => {
    const [show, setShow] = useState('overflow-hidden h-32')
    const [text, setText] = useState('show')

    const toggleClass = () => {
        setShow(show === 'overflow-hidden h-32 text-xl pb-8' ? 'overflow-visible text-xl' : 'overflow-hidden h-32 text-xl pb-8')
    }

    

    return (
        <div>
            {jobs.map(job => {
                return (
                    <div className='' key={job.id}>
                        <div className='m-10 p-10 border shadow-lg rounded-lg bg-gray-100'>
                        <h1 className='text-2xl pb-4'>{job.title}</h1>
                        <h2 className={`${show}`}>{job.description}</h2>
                        <div className='flex justify-end'>
                        <button className='text-blue-400 font-semibold text-lg m-2' onClick={toggleClass}>
                            VIEW FULL
                        </button>
                        </div>
                        <h3>Location: {job.location}</h3>
                        <h3>Company: {job.company}</h3>
                        <h3>Job Type: {job.job_type}</h3>
                        <h4>Application Count: {job.applicant_count}</h4>
                        <h2 className='text-xl pt-8'>Skills for the job:</h2>
                        <h3 className='pt-6 pb-6'>
                            <div className='flex flex-wrap'>
                                {job.skills_tag.map(skill => (
                                    <div className='border-solid border-2 shadow-md border-blue-400 rounded-full m-2 px-4 py-2' key={skill}>
                                        {skill}
                                    </div>
                                ))}
                            </div>
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