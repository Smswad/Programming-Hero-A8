import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp } from '../../Utility/addToDB';
import App from '../App/App';
import InstalledAppCard from '../InstalledAppCard/InstalledAppCard';
import { IoMdArrowDropdown } from 'react-icons/io';

const InstalledApplist = () => {

    const [installedApp, setInstalledApp] = useState([]);
    const [sort, setSort] = useState("");
    const data = useLoaderData();

    useEffect(() => {
        const storedAppData = getInstalledApp();
        const convertedStoredApps = storedAppData.map(id => parseInt(id))
        const myInstalledApp = data.filter(app => convertedStoredApps.includes(app.id));
        setInstalledApp(myInstalledApp);

    }, [data])

    const handleSort = (type) => {
        setSort(type);

        if (type === "Low-High") {
            const sortedByLowToHigh = [...installedApp].sort((a, b) => a.downloads - b.downloads);
            setInstalledApp(sortedByLowToHigh);
            console.log(sortedByLowToHigh);
        }
        else if (type === "High-Low") {
            const sortedByHightToLow = [...installedApp].sort((a, b) => b.downloads - a.downloads);
            setInstalledApp(sortedByHightToLow);
            console.log(sortedByHightToLow);
        }
    }


    return (
        <div>
            <div className="space-y-4 inter-normal py-20 bg-[#f5f5f5]">
                <section className='text-center'>
                    <h1 className='font-bold text-[3rem]'>Your Installed Apps</h1>
                    <h3 className='text-[1.25rem] text-[#627382]'>Explore All Trending Apps on the Market developed by us</h3>
                </section>
                <section className=' ml-20 mr-20 items-center justify-between flex'>
                    <h1 className='font-semibold text-[1.5rem]'>{installedApp.length} Apps Found</h1>

                    {/* Sorting Button */}
                    <div className="dropdown dropdown-center">
                        <div tabIndex={0} role="button" className="btn m-1 text-[1rem] text-[#627382] font-normal">Sort by Downloads : {sort ? sort : ""} <IoMdArrowDropdown />
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                            <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                        </ul>
                    </div>

                </section>
                {
                    installedApp.map(a => (
                        <InstalledAppCard key={a.id} app={a}></InstalledAppCard>))
                }

            </div>

        </div>
    );
};

export default InstalledApplist;