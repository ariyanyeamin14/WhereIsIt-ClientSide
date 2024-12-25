import React from 'react';
import Banner from './Banner';
import LatestFindLostItems from './LatestFindLostItems';
import AboutUs from './AboutUs';
import HowItWork from './HowItWorks';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <LatestFindLostItems></LatestFindLostItems>
        </div>
    );
};

export default Home;