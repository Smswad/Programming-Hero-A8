import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import "../../App.css"
import hero from "../../assets/assets/hero.png"

const Home = () => {
    return (
        <div className='bg-[#f5f5f5] flex flex-col items-center text-center inter-normal'>

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
                <button className="btn btn-outline btn-wide store-btn google mr-4">
                    <FaGooglePlay className='store-icon' />
                    Google Play
                </button>
                <button className="btn btn-outline btn-wide store-btn apple">
                    <FaAppStoreIos className='store-icon' />
                    App Store
                </button>
            </div>

            <img className='mt-10' src={hero} alt="hero.png" />

            {/* Facts */}
            <div className='flex flex-col text-center items-center w-full bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] text-white px-6 py-2 '>
                <h1 className='font-bold text-[3rem] mt-20'>Trusted by Millions, Built for You</h1>
                <div className='grid grid-cols-3 place-items-center mt-10 mb-10 mx-auto gap-15'>
                    <section className=''>
                        <h4 className='font-extralight text-[1rem]' >Total Downloads</h4>
                        <h1 className='font-extrabold text-[4rem]'>29.6M</h1>
                        <h4 className='font-extralight text-[1rem]'>21% more than last month</h4>
                    </section>
                    <section className=''>
                        <h4 className='font-extralight text-[1rem]'>Total Reviews</h4>
                        <h1 className='font-extrabold text-[4rem]'>906K</h1>
                        <h4 className='font-extralight text-[1rem]'>46% more than last month</h4>
                    </section>
                    <section className=''>
                        <h4 className='font-extralight text-[1rem]'>Active Apps</h4>
                        <h1 className='font-extrabold text-[4rem]'>132+</h1>
                        <h4 className='font-extralight text-[1rem]'>31 more will Launch</h4>
                    </section>
                </div>

            </div>

            {/* Apps */}
            <div>
                <h1>Trending Apps</h1>
                <h3>Explore All Trending Apps on the Market developed by us</h3>
            </div>
        </div>
    );
};

export default Home;