import React, { Suspense } from 'react';
import Apps from '../Home/Apps';
import App from '../App/App';
import "../../App.css"
import { useLoaderData } from 'react-router';
import { Search } from 'lucide-react';

const Allapps = () => {
    const data = useLoaderData();
    return (
        <div className='bg-[#f5f5f5] flex flex-col items-center text-center inter-normal py-20'>
            <div className='w-[80%]'>

                <section>
                    <h1 className='font-bold text-[3rem]'>Our All Applications</h1>
                    <h3 className='mt-4 text-[#627382] text-[1.25rem]'>Explore All Apps on the Market developed by us. We code for Millions</h3>
                </section>

                <section className='flex justify-between items-center mt-10'>
                    {/* App Count */}
                    <h1 className='font-semibold text-[1.5rem]'>(20) Apps Found</h1>
                    {/* Search Bar */}
                    <label className="input">
                        <Search />
                        <input type="search" required placeholder="Search App" />
                    </label>
                </section>

            </div>

            <div className='grid grid-cols-4 gap-4'>
                <Suspense fallback={<span>Loading.......</span>}>
                    {
                        data.map((singleApp) => <App key={singleApp.id} singleApp={singleApp}></App>)
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Allapps;