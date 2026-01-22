import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import AppDetails from '../pages/AppDetails/AppDetails';
import Ratingcharts from '../pages/RatingCharts/Ratingcharts';
import Installation from '../pages/Installation/Installation';
import Allapps from '../pages/Allapps/Allapps';
import LoadingAnimation from '../pages/LoadingAnimation/LoadingAnimation';
import AppNotFound from '../pages/AppNotFound/AppNotFound';


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
                loader: async ({ params }) => {
                    const res = await fetch('/appData.json');
                    const data = await res.json();

                    const appId = parseInt(params.id);
                    const appExists = data.find(app => app.id === appId);

                    if (!appExists) {
                        throw new Response("App Not Found", {
                            status: 404,
                            statusText: "Invalid App ID"
                        });
                    }

                    return data;
                },
                Component: AppDetails,
                errorElement: <AppNotFound></AppNotFound>
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
            },
            {
                path: '/loading',
                loader: () => fetch('/appData.json'),
                Component: LoadingAnimation
            }
        ]
    },
]);