import React from 'react';
import "../../App.css"
import Banner from './Banner';
import Facts from './Facts';
import Apps from './Apps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='bg-[#f5f5f5] flex flex-col items-center text-center inter-normal w-full overflow-x-hidden'>
            <Banner></Banner>
            <Facts></Facts>
            <Apps data={data}></Apps>
        </div>
    );
};

export default Home;