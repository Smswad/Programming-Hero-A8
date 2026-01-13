import React from 'react';
import "../../App.css"
import downloadIcon from "../../assets/assets/icon-downloads.png"
import ratingsIcon from "../../assets/assets/icon-ratings.png"
const App = ({ singleApp }) => {

    console.log(singleApp);

    const { image, title, downloads, ratingAvg } = singleApp;

    return (

        // {/* Card */}
        <div className="card bg-base-100 shadow-sm h-101 w-[19.81rem] mb-6 mt-6">
            <figure className="p-4 mt-4">
                <img
                    src={image}
                    alt="Shoes"
                    className="rounded-2xl" />
            </figure>
            <div className="card-body font-medium items-center text-center">
                <h2 className="text-[1.2rem]">{title}</h2>
                <section className='grid grid-cols-2 gap-35 text-[1rem]'>
                    <span className="bg-[#f1f5e8] text-[#00d390] badge rounded-sm w-[9.31rem] h-[1.94rem]">
                        <img className='h-4 w-4' src={downloadIcon} alt="" /> {downloads}
                    </span>
                    <span className="bg-[#fff0e1] text-[#ff8811] badge h-[1.94rem] w-[3.38rem]">
                        <img className='h-4 w-4' src={ratingsIcon} alt="" /> {ratingAvg}
                    </span>
                </section>
            </div>
        </div>
    );
};

export default App;