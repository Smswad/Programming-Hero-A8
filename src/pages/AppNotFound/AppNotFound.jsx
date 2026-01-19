import React from 'react';
import "../../App.css"
import AppNotFoundImage from '../../assets/assets/App-Error.png'
import { Link, useNavigate } from 'react-router';

const AppNotFound = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/apps');
        setTimeout(() => {
            navigate(0); // reload page
        }, 0);
    };
    return (
        <div>
            <div className='inter-normal flex flex-col items-center justify-center text-center font-semibold'>
                <img src={AppNotFoundImage} alt="AppNotFound.jpg" />
                <h1 className='mt-4 text-[3rem]'>OOPS!! APP NOT FOUND</h1>
                <h3 className='mt-2 text-[1.25rem] text-[#627382] font-normal'>The App you are requesting is not found on our system.  please try another apps</h3>
                <Link to='/apps' onClick={handleClick} className="btn mt-4 w-37.5 h-12 bg-[linear-gradient(125deg,#632EE3_0%,#9F62F2_100%)] text-white rounded-lg">
                    <span className='font-semibold text-[1rem]'>Go Back</span>
                </Link>
            </div>
        </div>
    );
};

export default AppNotFound;