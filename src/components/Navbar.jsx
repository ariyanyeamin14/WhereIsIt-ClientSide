import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContex } from '../Providers/AuthProvider';
import { LuSquareMenu } from 'react-icons/lu';

const Navbar = () => {
    const { user, signoutUser } = useContext(AuthContex)
    const [dropdown, setDropdown] = useState(false)
    const [active, setActive] = useState(false)
    const links = <>
        <li> <NavLink style={({ isActive }) => ({
            backgroundColor: isActive ? "#ec570d" : "transparent", color: "white"
        })} to={'/'}> Home </NavLink> </li>
        <li> <NavLink style={({ isActive }) => ({
            backgroundColor: isActive ? "#ec570d" : "transparent", color: "white"
        })} to={'/allItems'}> Lost & Found Items </NavLink> </li>
    </>

    const dropdownLinks = <>
        <li> <NavLink to={'/addItems'}> Add Lost & Found Item </NavLink> </li>
        <li> <NavLink to={'/allRecovered'}> All Recovered Items </NavLink> </li>
        <li> <NavLink to={'/myItems'}> Manage My Items </NavLink> </li>
    </>

    const handleDropDown = () => {
        return setDropdown(!dropdown)
    }
    const handleMobileMenu = () => {
        (active)
        return setActive(!active)

    }
    return (
        <div className="navbar bg-base-100 h-10 md:h-14 w-[90%] mx-auto">
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl text-[#ec570d] lg:text-2xl">WhereIsIt</a>
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
                                        className="w-10 border-2 border-[#ec570d] [#f0f647] md:w-14 rounded-full group-hover:hidden"
                                        src={`${user.photoURL}`}
                                        alt=""
                                    />
                                    <h2 className="absolute inset-0 hidden group-hover:flex justify-center items-center text-white cursor-pointer dark:text-white">
                                        {user.displayName}
                                    </h2>
                                </div>
                                <button onClick={signoutUser} className='btn bg-[#ec570d] border-none outline-none text-white   btn-sm md:btn-md'>Logout</button>
                            </div> :
                            <div className='flex gap-4 items-center'>
                                <Link className='font-medium' to={'/login'}>Log in</Link>
                                <Link className='font-medium' to={'/register'}>Register</Link>
                            </div>
                    }
                </div>
                <div>
                    <LuSquareMenu color='' className='text-[#ec570d] dark:text-[#f0f647] lg:hidden' onClick={() => handleMobileMenu()} size={30} />
                </div>
                <div onClick={() => setDropdown(!dropdown)} className={` bg-[#ec570d]  absolute top-14 right-10 z-10 p-6 rounded-xl transform transition-all duration-600   ${dropdown ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none -z-10"}`}>
                    <ul className='cursor-pointer text-white dark:text-black grid gap-5'>
                        {dropdownLinks}
                    </ul>
                </div>
            </div>
            <div onClick={() => setActive(!active)} className={` bg-[#ec570d]  text-white  absolute grid right-2 z-10  p-6 gap-5 rounded-xl duration-1000   ${active ? "top-14 " : "-top-80"}`}>
                {links}
            </div>
        </div>
    );
};

export default Navbar;