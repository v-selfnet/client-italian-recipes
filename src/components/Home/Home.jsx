import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from '../Chef/Chef';

const Home = () => {
    const chefs = useLoaderData()
    return (
        <div>
            <h3>Total Chefs: {chefs.length}</h3>
           {
                chefs.map(chef => <Chef
                    key={chef.id}
                    chef={chef}
                ></Chef>)
            }
        </div>
    );
};

export default Home;