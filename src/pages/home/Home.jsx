import React from 'react';
import Banner from './Banner';
import LatestFindLostItems from './LatestFindLostItems';
import AboutUs from './AboutUs';
import FAQ from './FAQ';
import MissionVission from './MissionVission';
import ItemCategory from './ItemCategory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ItemCategory></ItemCategory>
            <LatestFindLostItems></LatestFindLostItems>
            <MissionVission></MissionVission>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;