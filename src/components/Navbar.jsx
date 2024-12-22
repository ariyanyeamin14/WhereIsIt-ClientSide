import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const Navbar = () => {
    const {user, signoutUser} = useContext(AuthContex)
    const links = <>
        <li> <NavLink to={'/'}> Home </NavLink> </li>
        <li> <NavLink to={'/lost-found-items'}> Lost & Found Items </NavLink> </li>
        <li>
            <details>
                <summary>Profile Picture</summary>
                <ul className="p-2">
                    <li> <NavLink to={'/add-lost-found-item'}> Add Lost & Found Item </NavLink> </li>
                    <li> <NavLink to={'/all-recovered-items'}> All Recovered Items </NavLink> </li>
                    <li> <NavLink to={'/manage-my-items'}> Manage My Items </NavLink> </li>
                </ul>
            </details>
        </li>
        <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-base-100 h-10 md:h-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl lg:text-2xl">WhereIsIt</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-medium">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end w-full lg:w-[50%] items-center justify-end justify-items-end  justify-self-end jus space-x-5">
                <div>
                    {
                        user ?
                            <div className='flex items-center gap-3 md:gap-6'>
                                <div className="relative group w-10 md:w-14">
                                    <img
                                        className="w-10 border-2 border-[#1d22b8] dark:border-[#f0f647] md:w-14 rounded-full group-hover:hidden"
                                        src={`${user.photoURL}`}
                                        alt=""
                                    />
                                    <h2 className="absolute inset-0 hidden group-hover:flex justify-center items-center text-black dark:text-white">
                                        {user.displayName}
                                    </h2>
                                </div>
                                <button onClick={signoutUser} className='btn bg-[#1d22b8] dark:bg-[#f0f647] dark:text-black border-none outline-none text-white  btn-primary btn-sm md:btn-md'>Logout</button>
                            </div> :
                            <div className='flex gap-4 items-center'>
                                <Link className='font-medium' to={'/login'}>Log in</Link>
                                <Link className='font-medium' to={'/register'}>Register</Link>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;