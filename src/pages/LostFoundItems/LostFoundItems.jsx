import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from './PostCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const LostFoundItems = () => {
    const [items, setItems] = useState([]); // Original data from the server
    const [filteredItems, setFilteredItems] = useState([]); // Data after filtering
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        axios.get('https://where-is-it-server-side.vercel.app/items')
            .then((response) => {
                setItems(response.data);
                setFilteredItems(response.data); // Initially, all items are displayed
            })
            .catch((error) => console.error('Error fetching items:', error));
    }, []);

    // Filter items based on the search query
    useEffect(() => {
        const lowercasedQuery = searchQuery.toLowerCase();
        const filtered = items.filter(
            (item) =>
                item.title.toLowerCase().includes(lowercasedQuery) ||
                item.location.toLowerCase().includes(lowercasedQuery)
        );
        setFilteredItems(filtered);
    }, [searchQuery, items]);

        useEffect(() => {
            AOS.init({
                duration: 500,
                offset: 50,    
            });
        }, []);

    return (
        <div className='text-center w-[90%] mx-auto my-20'>
            <h1 className='text-5xl font-bold text-center my-6'>Lost & Found Items</h1>
            <p className=' w-[90%] lg:w-[80%] mx-auto '>Browse through a collection of lost and found items posted by community members. Whether you're looking for something you lost or trying to help reunite others with their belongings, this page provides an easy way to view and connect with users about lost and found items. Simply click on a card to learn more about an item and how you can get in touch with its owner or find further details.</p>

            {/* Search Input */}
            <div className='my-10'>
                <input
                    type="text"
                    placeholder="Search by title or location..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded mb-4"
                />
            </div>
            <div data-aos-delay="600" className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-20 my-10">
                {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                        <PostCard
                            key={item._id}
                            post={item}
                            aosDelay={index % 3 * 400} 
                        ></PostCard>
                    ))
                ) : (
                    <p>No items found.</p>
                )}
            </div>
        </div>
    );
};

export default LostFoundItems;