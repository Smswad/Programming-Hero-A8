import React from 'react';
import "../../App.css"


const Facts = () => {
    return (
        // {/* Facts */}
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
    );
};

export default Facts;