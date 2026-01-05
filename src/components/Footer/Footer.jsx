import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from "../../assets/assets/logo.png"
import "../../App.css"


const Footer = () => {
    return (
        <div>
            <footer className="inter-normal footer footer-horizontal footer-center bg-[#001931] text-white p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h3 className='font-medium text-[1.25rem]'>Social Links</h3>
                    <div className="grid grid-flow-col gap-4">
                        <Link className='social-icon twitter' to="https://x.com/"><BsTwitterX /></Link>
                        <Link className='social-icon youtube' to="https://www.youtube.com/"><FaYoutube /></Link>
                        <Link className='social-icon facebook' to="https://www.facebook.com/"><FaFacebook /></Link>
                    </div>
                </nav>
                <aside>
                    <p
                        className='text-[1.5rem]'>
                        Copyright © {new Date().getFullYear()} - All right reserved by
                        HER
                        <img
                            className='inline-block h-6 w-6 align-baseline mx-0.5 animate-spin'
                            src={logo}
                            alt="O" />
                        .IO Ltd
                    </p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;