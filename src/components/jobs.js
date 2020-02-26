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
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResult, setSearchResult] = useState([])

    // const handleSearchTerm = (e) => {
    //     setSearchTerm(e.target.selectValue)
    // }

    // useEffect(() => {
    //     const results = jobs.filter(job => job.toLowercase().includes(searchTerm))
    //     setSearchResult(results)
    // }, [searchTerm])

    const toggleClass = () => {
        setShow(show === 'overflow-hidden h-32 text-xl pb-8' ? 'overflow-visible text-xl' : 'overflow-hidden h-32 text-xl pb-8')
    }

    return (
        <div className='pt-24 pb-4'>
            <div className='flex justify-center'>
                <div class="inline-block relative w-64">
                    <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                        <option>Filter</option>
                        <option name='skills'>Skills</option>
                        <option name='jobType'>Job Type</option>
                        <option name='location'>Location</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                </div>
            </div>
            {jobs.map(job => {
                return (
                    <div className='max-w-screen-md mx-auto' key={job.id}>
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