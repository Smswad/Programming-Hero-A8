import React from 'react';
import logo from "../../assets/assets/logo.png"
import "../../App.css"
const Navbar = () => {
    const links = <>
        <ul className='flex space-x-8 inter-normal font-semibold text-[1rem]'>
            <li>Home</li>
            <li>Apps</li>
            <li>Installation</li>
        </ul>
    </>
    return (
        <div>

            {/* <h1>This is Header Section</h1> */}
            <div className="navbar bg-base-100 shadow-sm mr-2 inter-normal">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* Hero logo & Name */}
                    <a className="flex items-center text-xl">
                        <img className="w-10 h-10 ml-20 mr-1 " src={logo} alt="hero.logo" />
                        <span className="font-bold text-[1rem] bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent"
                        >HERO.IO</span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    
                    <a className="btn mr-20">Button</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;