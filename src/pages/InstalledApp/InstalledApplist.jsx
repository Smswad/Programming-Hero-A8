import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstalledApp, removeInstalledApp } from '../../Utility/addToDB';
import InstalledAppCard from '../InstalledAppCard/InstalledAppCard';
import { IoMdArrowDropdown } from 'react-icons/io';
import { Bounce, ToastContainer, toast } from 'react-toastify';

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
    const handleRemove = (id) => {
        removeInstalledApp(id);
        const removedApp = installedApp.find(app => app.id === id);
        setInstalledApp(prev =>
            prev.filter(app => app.id !== id) // update UI
        );
        toast.error(`${removedApp?.title} is Uninstalled!`, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };
    return (
        <div>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
                transition={Bounce}
            />
            <div className="space-y-4 inter-normal py-10 md:py-20 bg-[#f5f5f5] min-h-screen">
                <section className='text-center px-4'>
                    <h1 className='font-bold text-3xl md:text-[3rem]'>Your Installed Apps</h1>
                    <h3 className='text-base md:text-[1.25rem] text-[#627382] mt-2'>Explore All Trending Apps on the Market developed by us</h3>
                </section>
                <section className='w-full px-4 lg:w-[80%] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 mt-8'>
                    <h1 className='font-semibold text-[1.5rem]'>{installedApp.length} Apps Found</h1>

                    {/* Sorting Button */}
                    <div className="dropdown dropdown-bottom md:dropdown-end">
                        <div tabIndex={0} role="button" className="btn m-1 text-[1rem] text-[#627382] font-normal w-full md:w-auto">Sort by Downloads : {sort ? sort : ""} <IoMdArrowDropdown />
                        </div>
                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort('Low-High')}>Low-High</a></li>
                            <li><a onClick={() => handleSort('High-Low')}>High-Low</a></li>
                        </ul>
                    </div>

                </section>
                {
                    installedApp.map(a => (
                        <InstalledAppCard key={a.id} app={a} onRemove={handleRemove}></InstalledAppCard>))
                }

            </div>

        </div>
    );
};

export default InstalledApplist;