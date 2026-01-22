import React, { Suspense, useEffect, useMemo, useState } from 'react';
import App from '../App/App';
import "../../App.css"
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';
import AppNotFound from '../AppNotFound/AppNotFound';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

const Allapps = () => {
    const data = useLoaderData();
    const [searchText, setSearchText] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    // Filter apps (case-insensitive)
    const filteredApps = useMemo(() => {
        return data.filter(app =>
            app.title.toLowerCase().includes(searchText.toLowerCase())
        );
    }, [data, searchText]);

    useEffect(() => {
        if (searchText === "") return;

        setIsSearching(true);

        const timer = setTimeout(() => {
            setIsSearching(false);
        }, 400); // ⏱️ 400ms delay

        return () => clearTimeout(timer);
    }, [searchText]);



    return (
        <div className='bg-[#f5f5f5] flex flex-col items-center text-center inter-normal py-10 md:py-20 w-full'>
            <div className='w-full px-4 lg:w-[80%]'>

                <section>
                    <h1 className='font-bold text-3xl md:text-[3rem]'>Our All Applications</h1>
                    <h3 className='mt-4 text-[#627382] text-lg md:text-[1.25rem]'>Explore All Apps on the Market developed by us. We code for Millions</h3>
                </section>

                <section className='flex flex-col md:flex-row justify-between items-center mt-10 gap-4'>
                    {/* App Count */}
                    <h1 className='font-semibold text-[1.5rem]'>({filteredApps.length}) Apps Found</h1>
                    {/* Search Bar */}
                    <label className="input w-full md:w-auto">
                        <Search size={18} />
                        <input
                            type="search"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            placeholder="Search App"
                            className="w-full" />
                    </label>
                </section>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8'>
                {isSearching ? (
                    <LoadingAnimation></LoadingAnimation>
                ) : filteredApps.length > 0 ? (
                    filteredApps.map((singleApp) => (
                        <App key={singleApp.id} singleApp={singleApp} />
                    ))
                ) : (
                    <div className="col-span-1 md:col-span-2 lg:col-span-4">
                        <AppNotFound />
                    </div>
                )}
            </div>

        </div>
    );
};

export default Allapps;