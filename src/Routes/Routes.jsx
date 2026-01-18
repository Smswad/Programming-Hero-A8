import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
// import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';
import Ratingcharts from '../pages/RatingCharts/Ratingcharts';
import InstalledApplist from '../pages/InstalledApp/InstalledApplist';
import Installation from '../pages/Installation/Installation';
// import Apps from '../pages/App/Apps';
import Allapps from '../pages/Allapps/Allapps';


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: () => fetch('/appData.json'),
                path: "/",
                Component: Home
            },
            {
                path: '/appDetails/:id',
                loader: () => fetch('/appData.json'),
                Component: AppDetails
            },
            {
                path: '/ratingCharts/:id',
                loader: () => fetch('/appData.json'),
                Component: Ratingcharts
            },
            {
                path: '/apps',
                loader: () => fetch('/appData.json'),
                Component: Allapps
            },
            {
                path: '/installation',
                loader: () => fetch('/appData.json'),
                Component: Installation
            }
        ]
    },
]);