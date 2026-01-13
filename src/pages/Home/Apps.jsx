import React, { Suspense } from 'react';
import "../../App.css"
// import downloadIcon from "../../assets/assets/icon-downloads.png"
// import ratingsIcon from "../../assets/assets/icon-ratings.png"
import App from '../App/App';

const Apps = ({ data }) => {


    return (
        // {/* Apps */}
        <div className='mt-20 '>

            <h1 className='font-bold text-[3rem]'>Trending Apps</h1>
            <h3 className='font-normal text-[1.25rem] text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</h3>

            {/* ALl CARDS */}
            <div className='grid grid-cols-4 gap-4'>
                <Suspense fallback={<span>Loading.......</span>}>
                    {
                        data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                    }
                </Suspense>
            </div>
            <button className="mb-20 mt-10 font-semibold text-[1rem] btn btn-outline bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] text-white px-6 py-2 rounded-lg">Show All</button>


        </div>

    );
};

export default Apps;