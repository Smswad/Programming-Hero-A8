import React from 'react';
import "../../App.css"
import downloadIcon from "../../assets/assets/icon-downloads.png"
import ratingsIcon from "../../assets/assets/icon-ratings.png"
import { Link } from 'react-router';
const App = ({ singleApp }) => {

    // console.log(singleApp);

    const { image, title, downloads, ratingAvg, id } = singleApp;


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

    return (

        // {/* Card */}
        <Link to={`/appDetails/${id}`}>
            <div className="card bg-base-100 shadow-sm h-full w-full max-w-[20rem] mb-6 mt-6 mx-auto">
                <figure className="p-4 mt-4 hover-3d">
                    <img
                        src={image}
                        alt=""
                        className="rounded-2xl" />
                    {/* those divs are made for 3D image effects */}
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </figure>
                <div className="card-body font-medium items-center text-center p-4">
                    <h2 className="text-[1.2rem]">{title}</h2>
                    <section className='flex justify-between w-full px-2 text-[1rem]'>
                        <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[4.31rem] h-[1.94rem]">
                            <img className='h-4 w-4' src={downloadIcon} alt="" /> {convertDownload}
                        </span>
                        <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                            <img className='h-4 w-4' src={ratingsIcon} alt="" /> {ratingAvg}
                        </span>
                    </section>
                </div>
            </div>
        </Link>
    );
};

export default App;