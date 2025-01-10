import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#ec6a0dc7] to-[#ec320dc3] text-white py-20">
            <div className='footer place-items-start md:place-items-center px-10'>
                <nav className='space-y-1'>
                    <a href='/' className="font-bold text-4xl mb-8 text-white ">WhereIsIt</a>
                    <p>301 The Greenhouse, </p>
                    <p>Custard Factory, New York, E2 8DY. </p>
                    <p>yeaminfoysal14@gmail.com, +12 (3) 456 7890</p>
                </nav>
                <nav>
                    <h6 className=" text-xl uppercase font-medium mb-4 text-white">Links</h6>
                    <Link to={'/about'} className="link link-hover">About us</Link>
                    <Link to={'/item-category'} className="link link-hover">Items Category</Link>
                    <Link to={'/allitems'} className="link link-hover">All Items</Link>
                    <Link to={'/login'} className="link link-hover">Login</Link>
                </nav>
                <nav>
                    <h6 className="text-xl uppercase font-medium mb-4 text-white">Social</h6>
                    <div className="grid grid-cols-1 gap-4">
                        <a href='https://www.facebook.com/ariyan.yeamin.1/'>
                        <FaFacebook size={20}/>
                        </a>
                        <a href='https://x.com/'>
                            <FaTwitter size={20}></FaTwitter>
                        </a>
                        <a href='https://bd.linkedin.com/'>
                            <FaLinkedin size={20}></FaLinkedin>
                        </a>
                    </div>
                </nav>
            </div>
            <hr className='w-[80%] mx-auto my-10 border-[#ffffff9a]'/>
            <div className='text-center'>
                <p>Copyright © 2025 by Yeamin Foysal. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;