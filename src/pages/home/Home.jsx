import React from 'react';
import Banner from './Banner';
import LatestFindLostItems from './LatestFindLostItems';
import AboutUs from './AboutUs';
import FAQ from './FAQ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <LatestFindLostItems></LatestFindLostItems>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;