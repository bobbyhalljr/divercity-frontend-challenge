import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = (props) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: "", 
        name: "",
    })

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const register = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post("/register", credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // redirect to the apps main page?
        props.history.push("/users");
      })
      .catch(err => console.log(err));
  };

    return (
      <div>
        <form onSubmit={register}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <input
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
          />
          <button>register</button>
        </form>
      </div>
    );
}

export default Register;