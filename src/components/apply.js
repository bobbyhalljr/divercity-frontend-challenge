import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

const Apply = ({ closeModal, history }) => {
    const [motivation, setMotivation] = useState('')
    const [coverLetter, setCoverLetter] = useState('')

  const handleMotivation = (e) => {
    setMotivation(e.target.value);

  const handleCoverLetter = (e) => {
    setCoverLetter(e.target.value)
  }


    const applyForJob = (e) => {
      e.preventDefault();
      axiosWithAuth()
        .post("/jobs/2/apply", motivation, coverLetter)
        .then(res => {
          localStorage.setItem('token', res.data.token);
          // setMotivation(res.data.motivation)
          // setCoverLetter(res.data.coverLetter)
          // redirect to the apps main page
          history.push("/jobs");
          // console.log(res.data.motivation)
          // console.log(res.data.coverLetter)
        })
        .catch(err => console.log(err));

      if(motivation && coverLetter){
          alert('You applied!!')
          closeModal()
      } else {
          // alert('You applied!!')
          // closeModal()
          alert('Please add a motivation and cover letter')
      }
    };

    return (
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
                    value={motivation}
                    onChange={handleMotivation}
                />
            </div>
            <div>
                <label>
                    Cover Letter
                </label>
                    <br />
                <input
                    type="text"
                    name="coverLetter"
                    value={coverLetter}
                    onChange={handleCoverLetter}
                />
            </div>
            <button>
                APPLY
            </button>
        </form>
      </div>
    );
}

export default Apply;