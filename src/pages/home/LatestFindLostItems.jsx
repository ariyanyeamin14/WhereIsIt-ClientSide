import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostCard from '../LostFoundItems/PostCard';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import Aos from 'aos';

const LatestFindLostItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios('https://where-is-it-server-side.vercel.app/recentItems')
            .then(res => setItems(res.data));
    }, []);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            offset: 50, 
            once: false,   
        });
    }, []);

    return (
        <div>
            <div className="text-center w-[90%] mx-auto py-20">
                <h1 className="text-3xl md:text-[48px] xl:text-[60px] font-bold leading-snug mb-8 text-center" >
                    Latest Lost & Found Items
                </h1>
                <p
                    className="w-[90%] lg:w-[80%] mx-auto"
                >
                    Browse through a collection of lost and found items posted by community members.
                    Whether you're looking for something you lost or trying to help reunite others
                    with their belongings, this page provides an easy way to view and connect with
                    users about lost and found items. Simply click on a card to learn more about an
                    item and how you can get in touch with its owner or find further details.
                </p>
                <div
                    className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-20 my-8">
                    {items.map((post, index) => (
                        <PostCard
                            post={post}
                            key={post._id}
                            aosDelay={index % 3 * 200} 
                        />
                    ))}
                </div>
                <div >
                    <Link to="/allItems" className="btn w-full bg-[#ec570d] text-white">
                        See All
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LatestFindLostItems;
