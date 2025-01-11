import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { Link } from "react-router-dom";

const ItemCategory = () => {
    const [activeCategory, setActiveCategory] = useState("Gadgets");
    const [items, setItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios('https://where-is-it-server-side.vercel.app/items')
            .then(res => {
                const fetchedItems = res.data;
                setItems(fetchedItems);

                // Extract unique categories from the fetched items
                const uniqueCategories = [...new Set(fetchedItems.map(item => item.category))];
                setCategories(uniqueCategories);
            });
    }, []);

    const filteredItems = items.filter((item) => item.category === activeCategory);

    if (items.length < 1) {
        return <div className='flex justify-center items-center min-h-screen'>
            <span className="loading w-[150px] text-center loading-spinner text-[#ec570d] "></span>
        </div>
    }

    return (
        <div className="w-[90%] mx-auto py-20">
            <h2 className='text-3xl md:text-[48px] text-center xl:text-[60px] font-bold leading-snug mb-8' >Item Category
            </h2>
            {/* Tab Navigation */}
            <div className="my-16 flex justify-center flex-wrap gap-3 md:gap-5">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className="transition-colors duration-300"
                        style={{
                            margin: "0 10px",
                            padding: "10px 20px",
                            borderRadius: "5px",
                            border: activeCategory === category ? "2px solid #ec570d" : "1px solid black",
                            background: activeCategory === category ? "#ec570d" : "black",
                            color: "#fff",
                            cursor: "pointer",
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Animated Category Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCategory} // Ensures a re-render and animation on tab change
                    initial={{ scale: 0.8, opacity: 0 }} // Default visible state
                    animate={{ scale: 1, opacity: 1 }} // Fully visible state
                    exit={{ scale: 0.8, opacity: 0 }} // Shrink when exiting
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {filteredItems.map((item) => (
                            <div key={item._id} className="relative group">
                                {/* Image */}
                                <img
                                    className="object-cover h-[500px] w-full rounded-lg"
                                    src={item.thumbnail}
                                    alt={item.title}
                                />

                                {/* Overlay that will appear on hover */}
                                <div
                                    className="absolute top-0 left-0 h-full w-0 bg-[#ec570de1] opacity-70 group-hover:w-full transition-all duration-500 ease-in-out overflow-hidden"
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        borderRadius: "10px",
                                    }}
                                >
                                    {/* See Details Button */}
                                    <Link
                                        to={`/items/${item._id}`}
                                        className="text-[#fff] text-3xl font-bold px-4 py-2 rounded-md opacity-0 group-hover:opacity-100  transition-opacity duration-300">
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default ItemCategory;
