import React from 'react';
import Logo from '../../../components/Logo/Logo';
import { FaFacebook, FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
    return (
        <footer className="max-w-7xl mx-auto rounded-2xl footer footer-horizontal footer-center  text-white p-10 bg-black my-8">
            <aside>
                <Logo></Logo>
                <p className="py-4">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br /> business shipments — we deliver on time, every time.
                </p>
            </aside>
            <div className='flex gap-8 border-t border-b border-dashed py-6 border-green-800'>
                <p>Services</p>
                <p>Coverage</p>
                <p>About us</p>
                <p>Pricing</p>
                <p>Blog</p>
                <p>Contact</p>
            </div>
            <div className="flex gap-4">
                <div className="w-12 h-12 bg-[#0A66C2] rounded-full flex items-center justify-center 
                  hover:scale-110 transition">
                    <FaLinkedin className="text-white text-xl" />
                </div>

                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center 
                  hover:scale-110 transition">
                    <FaSquareXTwitter className="text-white text-xl" />
                </div>

                <div className="w-12 h-12 bg-[#1877F2] rounded-full flex items-center justify-center 
                  hover:scale-110 transition">
                    <FaFacebook className="text-white text-xl" />
                </div>

                <div className="w-12 h-12 bg-[#FF0000] rounded-full flex items-center justify-center 
                  hover:scale-110 transition">
                    <IoLogoYoutube className="text-white text-xl" />
                </div>
            </div>

        </footer>
    );
};
//Rider can Accept or Reject a delivery"
export default Footer;