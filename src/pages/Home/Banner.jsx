import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import "../../App.css"
import hero from "../../assets/assets/hero.png"
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className=''>

            <h1 className='mt-20 font-bold text-[4.5rem]'>We Build <br />
                <span
                    className='bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent'>Productive
                </span> Apps
            </h1>
            <p className='font-normal text-[1.25rem] text-[#627382]'>
                At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                <br />Our goal is to turn your ideas into digital experiences that truly make an impact.
            </p>
            <div className='font-semibold text-[1.25rem] flex justify-center mt-10'>
                <Link to='https://play.google.com/store/games?hl=en' className="btn btn-outline btn-wide store-btn google mr-4">
                    <FaGooglePlay className='store-icon' />
                    Google Play
                </Link>
                <Link to='https://www.apple.com/app-store/' className="btn btn-outline btn-wide store-btn apple">
                    <FaAppStoreIos className='store-icon' />
                    App Store
                </Link>
            </div>

            <img className='mt-10' src={hero} alt="hero.png" />
        </div>
    );
};

export default Banner;