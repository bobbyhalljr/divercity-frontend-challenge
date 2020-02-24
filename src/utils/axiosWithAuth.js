import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
  
    return axios.create({
      baseURL: " https://divercity-test.herokuapp.com/",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Authorization":  "a token"
      }
    });
  };