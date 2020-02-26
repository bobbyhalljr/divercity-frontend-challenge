import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-md w-full bg-white fixed top-0 z-50'>
            <div className=''>
                <ul className='flex flex-row flex-no-wrap justify-between items-center p-4'>
                    <li>
                        <h1 className='font-bold text-blue-400 text-2xl'>Cool Jobs</h1>
                    </li>
                    <li>
                        <NavLink activeClassName='text-blue-400 text-lg font-semibold p-4' className='font-semibold p-4 text-lg' to="/register">Register</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='text-blue-400 text-lg font-semibold p-4' className='font-semibold p-4 text-lg' to="/login">Login</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName='text-blue-400 text-lg font-semibold p-4' className='font-semibold p-4 text-lg' to="/jobs">Jobs</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;