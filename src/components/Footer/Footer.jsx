import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from "../../assets/assets/logo.png"
import "../../App.css"


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-[#001931] text-white p-10 rounded-t-xl inter-normal">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover text-base">About us</a>
                    <a className="link link-hover text-base">Contact</a>
                    <a className="link link-hover text-base">Jobs</a>
                    <a className="link link-hover text-base">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-6">
                        <Link className='social-icon twitter text-3xl' to="https://x.com/"><BsTwitterX /></Link>
                        <Link className='social-icon youtube text-3xl' to="https://www.youtube.com/"><FaYoutube /></Link>
                        <Link className='social-icon facebook text-3xl' to="https://www.facebook.com/"><FaFacebook /></Link>
                    </div>
                </nav>
                <aside>
                    <p className='text-base md:text-lg opacity-80 mt-2 flex items-center justify-center gap-2'>
                        Copyright © {new Date().getFullYear()} - All right reserved by
                        <span className='font-bold flex items-center'>HER
                            <img
                                className='inline-block h-6 w-6 animate-spin mx-1'
                                src={logo}
                                alt="O" />
                            .IO Ltd</span>
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;