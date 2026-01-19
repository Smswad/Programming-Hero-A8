import React from 'react';
import "../../App.css"

import ErrorImage from '../../assets/assets/error-404.png'
import { Link } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='inter-normal flex flex-col items-center justify-center text-center font-semibold min-h-screen'>
                <img src={ErrorImage} alt="404-Error.jpg" />
                <h1 className='mt-4 text-[3rem]'>Oops, page not found!</h1>
                <h3 className='mt-2 text-[1.25rem] text-[#627382] font-normal'>The page you are looking for is not available.</h3>
                <Link to='/' className="btn mt-4 w-37.5 h-12 bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] text-white rounded-lg">
                    <span className='font-semibold text-[1rem]'>Go Back</span>
                </Link>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;