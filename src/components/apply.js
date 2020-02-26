import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link, Route, useParams, Redirect } from 'react-router-dom';

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
      <>
      <div>
        <div>
            <h1>Fill out the form to apply to the job</h1>
        </div>
        <form onSubmit={applyForJob}>
            <div>
                <label>
                    Motivation
                </label>
                <br />
                <input
                    type="text"
                    name="motivation"
                    value={applyBody.motivation}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>
                    Cover Letter
                </label>
                    <br />
                <input
                    type="text"
                    name="cover_letter"
                    value={applyBody.cover_letter}
                    onChange={handleChange}
                />
            </div>
            <button>
                APPLY
            </button>
        </form>
      </div>

      <Route path='jobs/:id/apply'/>
      </>
    );
}

export default Apply;