import React, { useEffect, useState } from 'react';
import "../../App.css"
import downloadIcon from "../../assets/assets/icon-downloads.png"
import ratingsIcon from "../../assets/assets/icon-ratings.png"
import reviewsIcon from "../../assets/assets/icon-review.png"
import { useLoaderData, useParams } from 'react-router';
import Ratingcharts from '../RatingCharts/Ratingcharts';
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import ScrollToTop from '../ScrollToTop/ScrollToTop';
import { addInstalledApp, getInstalledApp } from '../../Utility/addToDB';
import { Bounce, ToastContainer, toast } from 'react-toastify';

// const MySwal = withReactContent(Swal)
const AppDetails = () => {
    const { id } = useParams();
    const AppId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === AppId);
    const { image, title, downloads, ratingAvg, reviews, companyName, size, description } = singleApp;

    // Downloads Conversion
    // 1000000 M  ; 1000000000 B
    let millionconvertorNumber = 1000000;
    let billionconvertorNumber = 1000000000;
    let convertDownload = 0;
    if (downloads >= 1000000 && downloads < 1000000000) {
        convertDownload = (downloads / millionconvertorNumber) + 'M';
    }
    else if (downloads >= 1000000000) {
        convertDownload = (downloads / billionconvertorNumber) + 'B';
    }
    // Reviews Conversion 
    const convertReviews = (reviews / 1000).toFixed(1) + "K";

    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const installedApps = getInstalledApp().map(Number);
        setIsInstalled(installedApps.includes(AppId));
    }, [AppId]);

    const handleInstall = () => {

        // Swal.fire({
        //     title: "Good job!",
        //     text: "The app is installed!",
        //     icon: "success"
        // });
        // toast();
        toast.success(`${title} is Installed!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });


        addInstalledApp(AppId);
        setIsInstalled(true);
    };




    return (
        <div className='px-4 lg:px-20 inter-normal max-w-7xl mx-auto'>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                <section className='mb-8 lg:mb-0 lg:mr-10'>
                    <img src={image} alt="" className="w-full max-w-[200px] lg:max-w-none mx-auto rounded-xl" />

                </section>

                <section className='w-full'>
                    <h1 className='font-bold text-3xl md:text-[2rem] text-center lg:text-left'>{title}</h1>
                    <h3 className='text-[#627382] text-lg md:text-[1.25rem] font-normal text-center lg:text-left mt-2'>Developed by
                        <span className='font-semibold bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] bg-clip-text text-transparent'> {companyName}
                        </span>
                    </h3>
                    <div className="flex w-full flex-col">
                        <div className="divider"></div>
                    </div>

                    <section className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 text-[1rem] text-center lg:text-left'>
                        {/* Download Count */}
                        <span className="flex flex-col items-center lg:items-start">
                            <img className='' src={downloadIcon} alt="" />
                            <h1 className='text-[1rem] text-[#001931] font-normal mt-2'>Downloads</h1>
                            <span className='font-extrabold text-3xl md:text-[2.5rem]'>
                                {convertDownload}
                            </span>
                        </span>
                        {/* Average Ratings */}
                        <span className="flex flex-col items-center lg:items-start">
                            <img className='' src={ratingsIcon} alt="" />
                            <h1 className='text-[1rem] text-[#001931] font-normal mt-2'>Average Ratings</h1>
                            <span className='font-extrabold text-3xl md:text-[2.5rem]'>
                                {ratingAvg}
                            </span>
                        </span>
                        {/* Total Reviews */}
                        <span className='flex flex-col items-center lg:items-start'>
                            <img className='' src={reviewsIcon} alt="" />
                            <h1 className='text-[1rem] text-[#001931] font-normal mt-2'>Total Reviews</h1>
                            <span className='font-extrabold text-3xl md:text-[2.5rem]'>
                                {convertReviews}
                            </span>
                        </span>
                        {/* Install Button */}
                        <div className="md:col-span-3 lg:col-span-3 flex justify-center lg:justify-start">
                            <button
                                onClick={handleInstall}
                                disabled={isInstalled}
                                className={`btn mt-7.5 p-5 text-white font-semibold text-[1.25rem] w-full md:w-auto
                                        ${isInstalled
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'btn-success'}`}>
                                {isInstalled ? 'Installed' : `Install Now (${size} MB)`}
                            </button>
                        </div>

                    </section>
                </section>
            </div>
            {/* Divider */}
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