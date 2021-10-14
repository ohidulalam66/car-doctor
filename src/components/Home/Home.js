import React from 'react';
import Banner from './Banner/Banner';
import PricingCart from './PricingCart/PricingCart';
import TireServices from './TireServices/TireServices';
import TopGallery from './TopGallery/TopGallery';
import TopServices from './TopServices/TopServices';
import Works from './Works/Works';


const Home = () => {
    return (
        <div>
            <Banner />
            <TireServices />
            <TopServices />
            <TopGallery />
            <Works />
            <PricingCart />
        </div>
    );
};

export default Home;