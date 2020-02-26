import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Register = ({ history, closeModal }) => {
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
    axiosWithAuth()
      .post("/register", credentials)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        history.push("/jobs")
        closeModal()
      })
      .catch(err => console.log(err));
  };

    return (
      <>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl font-semibold pt-10 pb-12'>Register</h1>
      </div>
      <div class="w-full max-w-xs m-auto pt-36">
        <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
          <div class="mb-2">
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
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
              Name
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="name" 
              type="text" 
              placeholder="John Doe" 
              name="name"
              value={credentials.name}
              onChange={handleChange}
             />
          </div>
          <div class="flex items-center justify-between">
            <button onClick={register} class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Register
            </button>
          </div>
        </form>
      </div>

      {/* // <div>
      //   <form onSubmit={register}>
      //     <input
      //       type="text"
      //       name="username"
      //       value={credentials.username}
      //       onChange={handleChange}
      //     />
      //     <input
      //       type="password"
      //       name="password"
      //       value={credentials.password}
      //       onChange={handleChange}
      //     />
      //     <input
      //       type="text"
      //       name="name"
      //       value={credentials.name}
      //       onChange={handleChange}
      //     />
      //     <button>register</button>
      //   </form>
      // </div> */}
      </>
    );
}

export default Register;