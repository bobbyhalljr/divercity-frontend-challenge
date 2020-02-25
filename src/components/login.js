import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Login = ({ closeModal, history }) => {
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // redirect to the apps main page
        history.push("/jobs");
      })
      .catch(err => console.log(err));
      closeModal()
  };

    return (
      <div>
        <form onSubmit={login}>
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
          <button>Log in</button>
        </form>
      </div>
    );
}

export default Login;