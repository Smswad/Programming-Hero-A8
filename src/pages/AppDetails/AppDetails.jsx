import React from 'react';
import "../../App.css"
import downloadIcon from "../../assets/assets/icon-downloads.png"
import ratingsIcon from "../../assets/assets/icon-ratings.png"
import reviewsIcon from "../../assets/assets/icon-review.png"
import { useLoaderData, useParams } from 'react-router';
import Ratingcharts from '../RatingCharts/Ratingcharts';

const AppDetails = () => {

    const { id } = useParams();
    const AppId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === AppId);
    // console.log(singleApp);
    const { image, title, downloads, ratingAvg, reviews, companyName, size, description } = singleApp;

    // 1000000 M  ; 1000000000 B
    let millionconvertorNumber = 1000000;
    let billionconvertorNumber = 1000000000;
    let convertDownload = 0;
    if (downloads >= 1000000 && downloads < 1000000000) {
        convertDownload = (downloads / millionconvertorNumber) + 'M';
        // return (convertDownload + 'M');
    }
    else if (downloads >= 1000000000) {
        convertDownload = (downloads / billionconvertorNumber) + 'B';
        // return (convertDownload + 'B');
    }

    const convertReviews = (reviews / 1000).toFixed(1) + "K";


    return (
        <div className='ml-20 mr-20 inter-normal'>
            <div className='flex'>
                <section className='mr-10'>
                    <img src={image} alt="" />

                </section>

                <section className=''>
                    <h1 className='font-bold text-[2rem]'>{title}</h1>
                    <h3 className='text-[#627382] text-[1.25rem] font-normal'>Developed by
                        <span className='font-semibold bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent'> {companyName}
                        </span>
                    </h3>
                    <div className="flex w-full flex-col">
                        <div className="divider"></div>
                    </div>

                    <section className='grid grid-cols-3 text-[1rem]'>
                        {/* Download Count */}
                        <span className="">
                            <img className='' src={downloadIcon} alt="" />
                            <h1 className='text-[1rem] text-[#001931] font-normal mt-2'>Downloads</h1>
                            <span className='font-extrabold text-[2.5rem]'>
                                {convertDownload}
                            </span>
                        </span>
                        {/* Average Ratings */}
                        <span className="">
                            <img className='' src={ratingsIcon} alt="" />
                            <h1 className='text-[1rem] text-[#001931] font-normal mt-2'>Average Ratings</h1>
                            <span className='font-extrabold text-[2.5rem]'>
                                {ratingAvg}
                            </span>
                        </span>
                        {/* Total Reviews */}
                        <span className=''>
                            <img className='' src={reviewsIcon} alt="" />
                            <h1 className='text-[1rem] text-[#001931] font-normal mt-2'>Total Reviews</h1>
                            <span className='font-extrabold text-[2.5rem]'>
                                {convertReviews}
                            </span>
                        </span>
                        <button className="btn btn-success text-white font-semibold text-[1.25rem] mt-7.5 p-5">Install Now ({size} MB)</button>

                    </section>
                </section>
            </div>
            <div className="flex w-full flex-col">
                <div className="divider"></div>
            </div>
            {/* Ratings */}
            <div className=''>
                <Ratingcharts></Ratingcharts>
            </div>
            {/* Apps Description */}
            <div className='mt-10 mb-20'>
                <h1 className='font-semibold text-[1.5rem]'>Description</h1>
                <p className='mt-6 text-[1.25rem] text-[#627382] text-justify'>{description}</p>

            </div>
        </div>
    );
};

export default AppDetails;