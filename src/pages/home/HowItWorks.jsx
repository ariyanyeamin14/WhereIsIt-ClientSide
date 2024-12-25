import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HowItWork = () => {
    const retuenContent = <ul className='space-y-4 list-decimal text-lg'>
        <li>Create a post detailing the item you found, including a description, photos, and the location where it was discovered. </li>
        <li>Add any distinguishing features that can help the owner identify the item. </li>
        <li>Wait for potential matches or responses from users who may have lost the item.</li>
    </ul>

    const findContent = <ul className='space-y-4 list-decimal text-lg'>
        <li>Browse through posts in the "Return" section to check if someone has found your item. </li>
        <li>Use advanced filters like location, category, and keywords to narrow down your search. </li>
        <li>Post a detailed report about the item you’ve lost, including photos, description, and where it might have gone missing.</li>
    </ul>

    const tabs = [
        { id: 'tab1', label: 'Return', content: retuenContent },
        { id: 'tab2', label: 'Find', content: findContent },
    ];

    const [activeTab, setActiveTab] = useState(tabs[0]);


    return (
        <div className="container mx-auto ">
            {/* Tab Headers */}
            <div className="flex space-x-4 border-b-2 pb-2">
                {tabs.map((tab) => (
                    <motion.div
                        key={tab.id}
                        className={`cursor-pointer p-2 relative text-2xl ${activeTab.id === tab.id ? 'text-blue-500 font-bold' : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab(tab)}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                    >
                        {tab.label}
                        {activeTab.id === tab.id && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500 rounded"
                            />
                        )}
                    </motion.div>
                ))}
            </div>

            {/* Tab Content */}
            <motion.div
                key={activeTab.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="mt-6 p-16 leading-relaxed rounded-lg shadow-md bg-[#13161b]"
            >
                {activeTab.content}
            </motion.div>
        </div>
    );
};

export default HowItWork;
