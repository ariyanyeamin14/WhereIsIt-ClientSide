import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, signoutUser } = useContext(AuthContex)
    const [dropdown, setDropdown] = useState(false)
    const links = <>
        <li> <NavLink to={'/'}> Home </NavLink> </li>
        <li> <NavLink to={'/allItems'}> Lost & Found Items </NavLink> </li>
    </>

    const dropdownLinks = <>
        <li> <NavLink to={'/addItems'}> Add Lost & Found Item </NavLink> </li>
        <li> <NavLink to={'/allRecovered'}> All Recovered Items </NavLink> </li>
        <li> <NavLink to={'/myItems'}> Manage My Items </NavLink> </li>
    </>

    const handleDropDown = () => {
        return setDropdown(!dropdown)
    }
    return (
        <div className="navbar bg-base-100 h-10 md:h-14 w-[90%] mx-auto">
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
                <ul className="menu menu-horizontal gap-4 px-1 font-medium">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end w-full lg:w-[50%] items-center justify-end justify-items-end  justify-self-end jus space-x-5 relative">
                <div>
                    {
                        user ?
                            <div className='flex items-center gap-3 md:gap-6'>
                                <div onClick={handleDropDown} className="relative group w-10 md:w-14 h-10 md:h-14">
                                    <img
                                        className="w-10 border-2 border-[#1d22b8] dark:border-[#f0f647] md:w-14 rounded-full group-hover:hidden"
                                        src={`${user.photoURL}`}
                                        alt=""
                                    />
                                    <h2 className="absolute inset-0 hidden group-hover:flex justify-center items-center text-black cursor-pointer dark:text-white">
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
                <div onClick={() => setDropdown(!dropdown)} className={` bg-[#1d22b8] dark:bg-[#f0f647] absolute top-14 right-10 z-10 p-6 rounded-xl transform transition-all duration-600   ${dropdown ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none -z-10"}`}>
                    <ul className='cursor-pointer text-white dark:text-black grid gap-5'>
                        {dropdownLinks}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;