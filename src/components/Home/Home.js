import React from 'react';
import Banner from './Banner/Banner';
import TireServices from './TireServices/TireServices';
import TopGallery from './TopGallery/TopGallery';
import TopServices from './TopServices/TopServices';


const Home = () => {
    return (
        <div>
            <Banner />
            <TireServices />
            <TopServices />
            <TopGallery />
        </div>
    );
};

export default Home;