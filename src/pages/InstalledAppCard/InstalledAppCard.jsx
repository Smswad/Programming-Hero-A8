import React from 'react';
import "../../App.css"
import downloadIcon from "../../assets/assets/icon-downloads.png"
import ratingsIcon from "../../assets/assets/icon-ratings.png"
import "../../App.css"
import { removeInstalledApp } from '../../Utility/addToDB';

const InstalledAppCard = ({ app, onRemove }) => {
    const { image, title, downloads, ratingAvg, size, id } = app;

    // const handleUninstall = (id) => {
    //     removeInstalledApp(id);
    //     setInstalledApp(prev => prev.filter(app => app.id !== id));
    // };


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

    return (
        <div className=''>


            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-[white] rounded-xl shadow-sm w-full max-w-[40rem] mx-auto mb-4">
                <img
                    src={image}
                    alt={title}
                    className="w-14 h-14 rounded-xl"
                />

                <div className="flex-2 w-full text-center sm:text-left">
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <div className='flex justify-center sm:justify-start gap-4 max-w-full font-medium mt-1'>
                        <section className="text-[#00d390] flex items-center">
                            <img className='h-4 w-4' src={downloadIcon} alt="" />
                            <h1 className='ml-1'>
                                {convertDownload}
                            </h1>
                        </section>
                        <section className="text-[#ff8811] flex items-center">
                            <img className='h-4 w-4' src={ratingsIcon} alt="" />
                            <h1 className='ml-1'>
                                {ratingAvg}
                            </h1>
                        </section>
                        <h1 className="font-normal text-[#627382]">{size} MB</h1>

                    </div>
                </div>

                <button onClick={() => onRemove(id)} className="btn btn-sm bg-[#00D390] text-white font-semibold text-[1rem] w-full sm:w-25 h-10.75">
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledAppCard;