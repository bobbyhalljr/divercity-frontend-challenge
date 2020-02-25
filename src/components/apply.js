import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

const Apply = ({ closeModal }) => {
    const [body, setBody] = useState({
        motiv: '',
        coverLetter: ''
    })

  const handleChange = e => {
    setBody({
        ...body,
        [e.target.name]: e.target.value
    });
  };

  const applyForJob = (e, body) => {
    e.preventDefault();
    // axiosWithAuth()
    //   .post("/jobs/:id/apply", body)
    //   .then(res => {
    //     localStorage.setItem('token', res.data.token);
    //     // redirect to the apps main page
    //     // props.history.push("/jobs");
    //     console.log(res.data)
    //   })
    //   .catch(err => console.log(err));
    if(body){
        alert('You applied!!')
        closeModal()
    } else {
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
                    value={body.motiv}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>
                    Cover Letter
                </label>
                    <br />
                <input
                    type="password"
                    name="cover-letter"
                    value={body.coverLetter}
                    onChange={handleChange}
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