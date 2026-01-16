import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import AppDetails from '../pages/AppDetails/AppDetails';
import Ratingcharts from '../pages/RatingCharts/Ratingcharts';


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
                path: '/about',
                Component: About
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
            }
        ]
    },
]);