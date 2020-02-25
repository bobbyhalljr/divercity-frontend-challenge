import React from 'react';

import Login from '../components/login';
import Apply from '../components/apply';

export const verifyUser = (token) => {
    token = localStorage.getItem('token')
    if(!token){
        console.log('no token')
        return (
            // <Redirect to='/login' />
            <Login />
        )
    } else {
        console.log('token verified')
        return (
            <Apply />
        )
    }
}