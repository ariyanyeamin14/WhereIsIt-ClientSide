import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PostCard from './PostCard';

const LostFoundItems = () => {
    const allPost = useLoaderData()
    return (
        <div className='text-center w-[90%] mx-auto my-20'>
            <h1 className='text-5xl font-bold text-center my-6'>Lost & Found Items</h1>
            <p className=' w-[90%] lg:w-[80%] mx-auto '>Browse through a collection of lost and found items posted by community members. Whether you're looking for something you lost or trying to help reunite others with their belongings, this page provides an easy way to view and connect with users about lost and found items. Simply click on a card to learn more about an item and how you can get in touch with its owner or find further details.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-20 my-10'>
                {
                    allPost.map( post => <PostCard post={post} key={post._id}></PostCard> )
                }
            </div>
        </div>
    );
};

export default LostFoundItems;