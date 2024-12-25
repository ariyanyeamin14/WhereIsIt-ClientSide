import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import slider1 from '../assets/slider image/13-gold-ring.jpg'
import slider2 from '../assets/slider image/12-glasses.jpg'
import slider3 from '../assets/slider image/7-Blue-mountain-bike (1).jpg'
import slider4 from '../assets/slider image/5-Blue-passport.jpeg'
import slider5 from '../assets/slider image/3-Small-dog.jpg'
import slider6 from '../assets/slider image/1-Black-leather-wallet.jpeg'


const Slider = () => {
    const slides = [
        { id: 1, image: slider1, title: 'Lost Gold ring with a diamond.' },
        { id: 2, image: slider2, title: 'Found pair of reading glasses in a brown case.' },
        { id: 3, image: slider3, title: 'Lost a blue mountain bike.' },
        { id: 4, image: slider4, title: 'Lost a blue passport with a UK visa.' },
        { id: 5, image: slider5, title: 'Lost small brown dog with a red collar.' },
        { id: 6, image: slider6, title: 'Lost black leather wallet with ID cards and cash' },
    ];
    return (
        <div className="relative w-full">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                autoplay={{ delay: 4000 }}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                className="fashion-slider w-full h-screen"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative  w-full h-full">
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover rounded-lg shadow-lg"
                            />
                            <div id='gradient-bg' className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                                <div className='md:w-[80%]'>
                                    <h1 className='font-semibold text-[48px] md:text-[60px] xl:text-[96px] leading-snug'>
                                         A Place to Find What’s Missing
                                    </h1>
                                    <h3 className="text-3xl font-semibold">{slide.title}</h3>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;