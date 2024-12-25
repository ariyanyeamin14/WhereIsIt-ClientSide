import React, { useEffect, useState } from 'react';
import slider1 from "../../assets/slider image/1-Black-leather-wallet.jpeg"
import slider2 from "../../assets/slider image/11-Canon-DSLR.jpeg"
import { BiSolidDonateHeart } from "react-icons/bi";
import HowItWork from './HowItWorks';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const AboutUs = () => {

    return (
        <div className='grid grid-cols-subgrid xl:grid-cols-2 gap-8 w-[90%] xl:w-[85%] mx-auto py-32 md:mb-32'>
            <div className='xl:relative hidden md:block'>
                <div >
                    <motion.img
                        animate={{ y: [50, 100, 50] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={slider1}
                        className="max-w-lg rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] shadow-2xl " />
                    <motion.img
                        animate={{ x: [100, 50, 100] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        src={slider2}
                        className="max-w-lg rounded-t-3xl rounded-br-3xl border-l-[6px] border-b-[6px] shadow-2xl " />
                </div>
            </div>
            <div>
                <h2 className='text-3xl md:text-[48px] xl:text-[60px] font-bold leading-snug mb-8' >How It Works?
                </h2>
                <HowItWork></HowItWork>
                <div className='mt-10'>
                    <Link to={'/addItems'} className=' w-full btn btn-primary  rounded-full  mt-10 cursor-pointer'>Create Post</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;