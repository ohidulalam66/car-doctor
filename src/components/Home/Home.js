import React from 'react';
import Banner from './Banner/Banner';
import TireServices from './TireServices/TireServices';
import TopServices from './TopServices/TopServices';


const Home = () => {
    return (
        <div>
            <Banner />
            <TireServices />
            <TopServices />
        </div>
    );
};

export default Home;