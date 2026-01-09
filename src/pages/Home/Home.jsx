import React from 'react';
import "../../App.css"
import Banner from './Banner';
import Facts from './Facts';
import Apps from './Apps';

const Home = () => {
    return (
        <div className='bg-[#f5f5f5] flex flex-col items-center text-center inter-normal'>
            <Banner></Banner>
            <Facts></Facts>
            <Apps></Apps>
        </div>
    );
};

export default Home;