import React from 'react';
import MissionVissionCart from './MissionVissionCart';

const MissionVission = () => {
    const content = [
        {title: 'Connecting People, Restoring Belongings', description: 'Our mission is to bridge the gap between lost and found items by creating a reliable and accessible platform where individuals can reunite .'},
        {title: 'Simplifying Lost and Found Solutions Worldwide', description: 'Our goal is to simplify the process of reclaiming lost items by offering an intuitive, user-friendly platform that serves as a hub for reuniting people with their belongings.'},
        {title: 'A World Where Nothing Stays Lost & Found', description: 'We aim to foster a sense of community and trust by enabling people to report, browse, and recover lost items seamlessly through technology and collaboration.'}
    ]
    return (
        <div className='mt-28 mb-20 text-center overflow-hidden relative'>
            <div class="relative z-10">
                <h1 className="text-3xl lg:text-5xl font-bold text-center my-6" >
                    Mission & Vission
                </h1>
                {/* <p className="w-[90%] lg:w-[80%] mx-auto">
                    Our mission is to reconnect people with their lost belongings through an easy-to-use platform that bridges the gap between those who have lost and found items.
                    We envision a world where no cherished possession remains lost. By leveraging technology and community, we aim to simplify recoveries, foster trust, and redefine the lost-and-found experience.
                </p> */}
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12 xl:gap-16 my-20 w-[90%] mx-auto'>
                    {
                        content.map((cart, index) => <MissionVissionCart cart={cart} index={index} key={index}></MissionVissionCart> )
                    }
                </div>
            </div>
            <div class="background absolute  z-0">

            </div>
        </div>
    );
};

export default MissionVission;