import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-[#295943] text-white py-11 md:px-1 px-3 mt-12">
      <div className="container font-poppins grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  gap-12 mx-auto">
        {/* ft part one */}
        <div className="space-y-5">
          <h3 className="text-[20px] font-semibold font-inter leading-[30px] text-white">
            TourHub
          </h3>
          <p className="font-normal font-inter text-14px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor rhoncus dolor purus non enim praesent elementum facilisis
            leo, vel.
          </p>
          <ul className="flex items-center gap-6">
            <a href="#">
              <FaFacebook className="text-xl hover:scale-110 duration-300 transition-all" />
            </a>
            <a href="#">
              <FaInstagram className="text-xl hover:scale-110 duration-300 transition-all" />
            </a>
            <a href="#">
              <FaSquareXTwitter className="text-xl hover:scale-110 duration-300 transition-all" />
            </a>
            <a href="#">
              <IoLogoYoutube className="text-xl hover:scale-110 duration-300 transition-all" />
            </a>
          </ul>
        </div>
        {/* ft part two */}
        <div className="lg:ml-12">
          <h3 className="text-[20px] font-semibold font-inter leading-[30px] text-white">
            Links
          </h3>
          <ul className="flex flex-col pt-5 gap-3">
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href=""
            >
              Discover
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Special Deals
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Services
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Community
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              About Us
            </Link>
          </ul>
        </div>
        {/* ft part three */}
        <div>
          <h3 className="text-[20px] font-semibold font-inter leading-[30px] text-white">
            Services
          </h3>
          <ul className="flex flex-col pt-5 gap-3">
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              About Us
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Blog & Articles
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Term and Condition
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Privacy Policy
            </Link>
            <Link
              className="hover:underline text-14px font-inter font-normal"
              href="#"
            >
              Contact Us
            </Link>
          </ul>
        </div>
        {/* ft part four */}
        <div>
          <h3 className="text-[20px] font-semibold font-inter leading-[30px] text-white">
            Contact
          </h3>
          <ul className="flex flex-col pt-5 gap-3">
            <li className="text-14px font-inter font-normal">
              Address: Jl.Codelaras No.205A
            </li>
            <li className="text-14px font-inter font-normal">
              Kediri, Pare AG17
            </li>
            <li className="text-14px font-inter font-normal">
              Phone: 123 456 7890
            </li>
            <li className="text-14px font-inter font-normal">
              Email: myagungperdana@gmail.com
            </li>
            <li className="text-14px font-inter font-normal">
              Maps: Kediri, East java
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
