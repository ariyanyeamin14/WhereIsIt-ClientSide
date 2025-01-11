import React, { useEffect, useState } from 'react';
import slider1 from "../../assets/slider image/1-Black-leather-wallet.jpeg"
import slider2 from "../../assets/slider image/11-Canon-DSLR.jpeg"
import HowItWork from './HowItWorks';
import { motion } from "framer-motion";
import Aos from 'aos';

const AboutUs = () => {

    useEffect(() => {
            Aos.init({
                duration: 1000, // Animation duration in milliseconds
                offset: 50,     // Offset from the viewport
            });
        }, []);
    return (
        <div className='grid grid-cols-subgrid xl:grid-cols-2 gap-8 w-[90%] xl:w-[85%] mx-auto py-20 overflow-hidden'>
            <div className='xl:relative hidden md:block'>
                <div data-aos="fade-right">
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={slider1}
                        className="max-w-lg rounded-t-3xl rounded-br-3xl border-[#ec570d] border-l-[8px] border-b-[8px] shadow-2xl " />
                    <motion.img
                        animate={{ x: [100, 50, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={slider2}
                        className="max-w-lg rounded-t-3xl rounded-br-3xl border-[#ec570d] border-l-[8px] border-b-[8px] shadow-2xl " />
                </div>
            </div>
            <div>
                <h2 className='text-3xl md:text-[48px] xl:text-[60px] font-bold leading-snug mb-8' >How It Works?
                </h2>
                <HowItWork></HowItWork>
            </div>
        </div>
    );
};

export default AboutUs;