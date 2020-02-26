import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='shadow-md'>
            <div>
                <ul className='flex flex-row justify-end items-center p-4'>
                    <li className='mr-auto'>
                        <h1 className='font-bold text-blue-400 text-2xl'>Cool Job Site</h1>
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