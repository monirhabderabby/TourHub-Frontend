import React from 'react';
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#295943] text-white py-11 md:px-1 px-3 mt-12">
            <div className="container font-poppins grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-12 mx-auto">
                {/* ft part one */}
                <div className="space-y-5">
                    <h3 className="text-2xl font-bold">travelaja</h3>
                    <p className="font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus
                        venenatis, lectus magna fringilla urna,
                        porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel.
                    </p>
                    <h4 className="font-bold text-xl">Ikuti Kami</h4>
                    <ul className="flex items-center gap-6">
                        <a href='#'><FaFacebook className="text-2xl" /></a>
                        <a href='#'><FaInstagram className="text-2xl" /></a>
                        <a href='#'><FaSquareXTwitter className="text-2xl" /></a>
                        <a href='#'><IoLogoYoutube className="text-2xl" /></a>
                    </ul>
                </div>
                {/* ft part two */}
                <div className="lg:ml-12">
                    <h3 className="text-2xl font-bold">Links</h3>
                    <ul className="flex flex-col pt-5 gap-3">
                        <Link className="hover:underline" href=''>Discover</Link>
                        <Link className="hover:underline" href='#'>Special Deals</Link>
                        <Link className="hover:underline" href='#'>Services</Link>
                        <Link className="hover:underline" href='#'>Community</Link>
                        <Link className="hover:underline" href='#'>About Us</Link>
                    </ul>
                </div>
                {/* ft part three */}
                <div>
                    <h3 className="text-2xl font-bold">Services</h3>
                    <ul className="flex flex-col pt-5 gap-3">
                        <Link className="hover:underline" href='#'>About Us</Link>
                        <Link className="hover:underline" href='#'>Blog & Articles</Link>
                        <Link className="hover:underline" href='#'>Term and Condition</Link>
                        <Link className="hover:underline" href='#'>Privacy Policy</Link>
                        <Link className="hover:underline" href='#'>Contact Us</Link>
                    </ul>
                </div>
                {/* ft part four */}
                <div>
                    <h3 className="text-2xl font-bold">Contact</h3>
                    <ul className="flex flex-col pt-5 gap-3">
                        <li>Address: Jl.Codelaras No.205A</li>
                        <li>Kediri, Pare AG17</li>
                        <li>Phone: 123 456 7890</li>
                        <li>Email: myagungperdana@gmail.com</li>
                        <li>Maps: Kediri, East java</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;