import React from 'react';
import logo from '../../assets/assets/logo.png'
import "../../App.css"

const LoadingAnimation = () => {
    return (
        <div className="fixed inset-0 bg-white/90 flex items-center justify-center z-50">
            <h1 className='inter-normal flex items-center text-4xl md:text-[4rem] font-bold'>
                L
                <img
                    className='inline-block h-10 w-10 md:h-14 md:w-14 mx-1 animate-spin'
                    src={logo}
                    alt="O"
                />
                ADING
            </h1>
        </div>
    );
};

export default LoadingAnimation;