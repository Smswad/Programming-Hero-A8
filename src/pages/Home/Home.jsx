import React from 'react';
import { FaAppStoreIos, FaGooglePlay } from 'react-icons/fa';
import "../../App.css"
import hero from "../../assets/assets/hero.png"
import downloadIcon from "../../assets/assets/icon-downloads.png"
import ratingsIcon from "../../assets/assets/icon-ratings.png"

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
            {/* width: 19.81rem; height: 25.25rem; */}
            <div className='mt-20 '>
                <h1 className='font-bold text-[3rem]'>Trending Apps</h1>
                <h3 className='font-normal text-[1.25rem] text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</h3>

                {/* ALl CARDS */}
                <div className='grid grid-cols-4 gap-4'>
                    {/* Card */}
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
                        <figure className="p-4 mt-4">
                            {/* width: 17.81rem; height: 17.81rem; */}
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-2xl w-76 h-100 " />
                        </figure>
                        <div className="card-body font-medium items-center text-center">
                            <h2 className="text-[1.2rem]">Forest: Focus for Productivity</h2>
                            <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                                {/* width: 4.31rem;height: 1.94rem; */}
                                <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                                    <img className='h-4 w-4' src={downloadIcon} alt="" /> 9M
                                </span>
                                {/* width: 3.38rem;height: 1.94rem; */}
                                <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                                    <img className='h-4 w-4' src={ratingsIcon} alt="" /> 5
                                </span>
                            </section>
                        </div>
                    </div>
                </div>
                <button className="mb-20 mt-10 font-semibold text-[1rem] btn btn-outline bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] text-white px-6 py-2 rounded-lg">Show All</button>


            </div>

        </div>
    );
};

export default Home;