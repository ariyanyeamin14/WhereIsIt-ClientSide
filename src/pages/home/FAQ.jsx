import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import QnaAnimation1 from "../../assets/QNA_Animation1.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const faqs = [
        {
            question: "What is WhereIsIt?",
            answer:
                "WhereIsIt is a Lost and Found platform that connects people who have lost personal belongings with those who may have found them. You can report lost items, browse found items, and interact with others to recover your belongings.",
        },
        {
            question: "How do I report a lost item?",
            answer:
                "To report a lost item, go to the 'Find' tab, fill out the form with details about your item (such as description, location, and date), and upload a photo if available. Submit the form to create a post.",
        },
        {
            question: "How do I report a found item?",
            answer:
                "To report a found item, navigate to the 'Return' tab, provide a detailed description of the item, upload a photo if possible, and mention where and when it was found.",
        },
        {
            question: "Is WhereIsIt free to use?",
            answer: "Yes, WhereIsIt is completely free to use for reporting and searching lost or found items.",
        },
        {
            question: "How do I contact someone about an item?",
            answer:
                "Once you find a matching post, you can use our secure messaging system to communicate with the person who reported the item. This ensures safe and private interactions.",
        },
        {
            question: "How does the verification process work?",
            answer:
                "When connecting with someone about an item, verify ownership by sharing specific details like unique marks, serial numbers, or other distinguishing features before arranging to meet.",
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            offset: 50,     // Offset from the viewport
        });
    }, []);

    return (
        <div className="w-[90%] mx-auto py-20">
            <h2 className="text-3xl lg:text-5xl font-bold text-center mb-10">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center ">
                <div>
                    <div className="w-[90%] md:w-[90%] mx-auto">
                        <Lottie animationData={QnaAnimation1} loop={true} />
                    </div>
                </div>
                <div className="container mx-auto p-6 overflow-hidden">
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div data-aos="fade-left"
                            data-aos-delay={index * 200}   key={index} className="border rounded-lg p-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleFAQ(index)}
                                >
                                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                                    <span className="text-xl">
                                        {activeIndex === index ? "-" : "+"}
                                    </span>
                                </div>
                                <motion.div
                                    initial={false}
                                    animate={{ height: activeIndex === index ? "auto" : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                >
                                    {activeIndex === index && (
                                        <motion.p
                                            className="mt-2 text-gray-300 "
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {faq.answer}
                                        </motion.p>
                                    )}
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;