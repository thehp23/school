"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative w-full bg-[#f4c400] pt-8 pb-4 px-4 sm:px-6 lg:px-12">
      
      {/* Main Footer Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        
        {/* Logo + Description */}
        <div className="lg:col-span-1">
          <div className="relative w-[130px] h-[80px]">
            <Image
              src="/intro-images/logo.png"
              alt="Little Millennium Logo"
              fill
              className="object-contain"
            />
          </div>

          <p className="mt-3 text-black text-sm leading-relaxed max-w-xs">
            Little Millennium – Nurturing young minds with a scientifically
            designed, play-based curriculum.
          </p>
        </div>

        {/* Column 1 */}
        <div className="space-y-2 text-black text-sm">
          <Link href="#" className="block hover:underline">
            About
          </Link>
          <Link href="#" className="block hover:underline">
            Programs
          </Link>
          <Link href="#" className="block hover:underline">
            Curriculum
          </Link>
          <Link href="#" className="block hover:underline">
            Franchise with us
          </Link>
          <Link href="#" className="block hover:underline">
            Admission Details
          </Link>
        </div>

        {/* Column 2 */}
        <div className="space-y-2 text-black text-sm">
          <Link href="#" className="block hover:underline">
            Onsite Daycare
          </Link>
          <Link href="#" className="block hover:underline">
            Careers
          </Link>
          <Link href="#" className="block hover:underline">
            Blogs
          </Link>
          <Link href="#" className="block hover:underline">
            Term of Use
          </Link>
        </div>

        {/* Contact */}
        <div className="space-y-2 text-black text-sm lg:col-span-1">
          <h3 className="font-semibold">Contact Us</h3>
          <p>Little Millennium Education Pvt. Ltd. (LMEPL)</p>
          <p>Sector 66, Gurgaon – 122002</p>
          <p>0124 – 4536350</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-black text-lg font-semibold mb-3">Social</h3>
          <div className="flex gap-3 text-lg text-black">
            <Link
              href="#"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform duration-300"
            >
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-5xl mx-auto border-t border-black/30 mt-6 pt-3 text-center">
        <p className="text-black text-sm">
          © 2025 Little Millennium | All Rights Reserved
        </p>
      </div>

      {/* Scroll To Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 z-50 w-10 h-10 rounded-full bg-white border border-black/20 shadow-md flex items-center justify-center text-lg text-black hover:scale-110 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;