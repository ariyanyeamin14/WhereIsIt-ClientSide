import React, { useEffect } from 'react';
import AnimatedProgressBar from '../../components/AnimatedProgressBar';
import Aos from 'aos';
import 'aos/dist/aos.css';

const MissionVissionCart = ({cart, index}) => {
    useEffect(() => {
        Aos.init({
          duration: 1500, // Animation duration in milliseconds
          easing: 'ease-in', // Animation easing
          once: false, // Whether animation should happen only once
        });
      }, []);

      const getAosAnimation = (index) => {
        // Determine animation based on position in row
        const position = index % 3; // 3 cards per row
        if (position === 0) return "fade-left"; // 1st card
        if (position === 1) return "fade-up"; // 2nd card
        if (position === 2) return "fade-right"; // 3rd card
      };

    return (
        <div data-aos={getAosAnimation(index)} className='bg-[#191e24] p-8 text-left'>
            <h1 className='text-3xl font-bold text-[#ec570d]'>{index + 1}</h1>
            <h1 className='text-2xl leading-relaxed font-semibold my-6'>{cart.title}</h1>
            <p className='text-gray-300'>{cart.description}</p>
            <AnimatedProgressBar></AnimatedProgressBar>
        </div>
    );
};

export default MissionVissionCart;