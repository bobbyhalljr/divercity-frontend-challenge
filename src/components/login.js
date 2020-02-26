import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { Link } from 'react-router-dom';

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
        closeModal()
        history.push('/jobs')
      })
      .catch(err => console.log(err));
  };

    return (
      <div className='bg-white mt-24'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-semibold pt-10 pb-12'>Login</h1>
      </div>
      <div class="w-full max-w-xs m-auto pt-36">
        <form onSubmit={login} className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
              Username
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="username" 
              type="text" 
              placeholder="Username" 
              name="username"
              value={credentials.username}
              onChange={handleChange}
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Password
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password" 
              type="password" 
              placeholder="**********" 
              name="password"
              value={credentials.password}
              onChange={handleChange}
             />
          </div>
          <div class="flex items-center justify-between">
            <button onClick={login} class="shadow-md bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Sign In
            </button>
            <a href='#' class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>

      {/* <div>
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
      </div> */}
      </div>
    );
}

export default Login;