import React, { Suspense } from 'react';
import "../../App.css"
import App from '../App/App';
import { Link } from 'react-router';

const Apps = ({ data }) => {


    return (
        // {/* Apps */}
        <div className='mt-10 md:mt-20 px-4 w-full max-w-7xl mx-auto'>
            <h1 className='font-bold text-3xl md:text-[3rem]'>Trending Apps</h1>
            <h3 className='font-normal text-base md:text-[1.25rem] text-[#627382] mt-4'>Explore All Trending Apps on the Market developed by us</h3>

            {/* ALl CARDS */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                <Suspense fallback={<span>Loading.......</span>}>
                    {
                        data.slice(0, 8).map(singleApp => (
                            <App key={singleApp.id} singleApp={singleApp} />
                        ))
                    }
                </Suspense>
            </div>
            <button
                className="mb-20 mt-10 font-semibold text-[1rem] btn btn-outline bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] text-white px-6 py-2 rounded-lg">
                <Link to="/apps">
                    Show All
                </Link>
            </button>


        </div >

    );
};

export default Apps;