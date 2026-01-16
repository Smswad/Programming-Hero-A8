import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const Ratingcharts = () => {

    const { id } = useParams();
    const AppId = parseInt(id);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === AppId);
    // console.log(singleApp);
    const { ratingAvg, ratings } = singleApp;

    const reversedRatings = [...ratings].reverse();




    return (
        <div>
            <div>
                {
                    ratings.map((rating, index) => (
                        <h1 key={index}>
                        </h1>
                    ))

                }
                <div>
                    <ResponsiveContainer width="100%" height={354}>
                        <BarChart
                            data={reversedRatings}
                            layout="vertical"
                            margin={{ top: 10, right: 20, left: 40, bottom: 10 }}
                        >
                            <XAxis
                                type="number"
                                axisLine={false}
                                tickLine={false}
                                tickFormatter={(value) => {
                                    return (value / 1000) + "K";
                                }}
                            />
                            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} />
                            <Tooltip />
                            <Bar dataKey="count" fill="#FF8811" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Ratingcharts;