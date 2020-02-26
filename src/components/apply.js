import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Route } from 'react-router-dom';

const Apply = ({ closeModal, match }) => {
  const [applyBody, setApplyBody] = useState({
    motivation: '',
    cover_letter: ''
  })

  const handleChange = (e) => {
    setApplyBody({
      ...applyBody,
      [e.target.name]: e.target.value
    })
  }

    const applyForJob = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post(`/jobs/${match.params.id}/apply`, applyBody)
        .then(res => {
          console.log(res.data)
          closeModal()
          alert(res.data.message)
        })
        .catch(err => {
          console.log(err)
          if(err){
            alert('Please provide a motivation and cover letter')
          } else {
            return
          }
        });

      
    };

    return (
      <div className=''>
        <div>
            <h1 className='mb-8 pb-2 mt-4 text-xl font-bold border-b-2'>Fill out the form to apply for the job</h1>
        </div>
        <form onSubmit={applyForJob}>
            <div>
            <label className='text-gray-800 mb-4'>Motivation</label>
                <input className="mb-4 bg-white focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
                  type="text" 
                  placeholder="Motivation"
                  name="motivation"
                  value={applyBody.motivation}
                  onChange={handleChange}
                />
            </div>
            <div>
              <label className='text-gray-800 mb-4'>Cover Letter</label>
              <input className="bg-white focus:outline-none focus:shadow-outline border border-gray-600 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" 
                type="text" 
                placeholder="Cover Letter"
                name="cover_letter"
                value={applyBody.cover_letter}
                onChange={handleChange}
              />
            </div>
            <button className='bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg'>
                APPLY
            </button>
        </form>
        <Route path='jobs/:id/apply'/>
      </div>
    );
}

export default Apply;