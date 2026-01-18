import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <ScrollToTop></ScrollToTop>
            <main className="">
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Root;