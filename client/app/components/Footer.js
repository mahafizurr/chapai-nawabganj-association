import Link from "next/link";
import React from "react";

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-8">
          <div className="flex">
            <div className="w-full md:w-1/2 mb-4 md:mb-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14511.184324473501!2d88.25457573996576!3d24.596232788861435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fbb6da98245afd%3A0x40f143bdb8ec586e!2sChapainawabganj%20District%20Judge%20Court!5e0!3m2!1sen!2sus!4v1698080345046!5m2!1sen!2sus"
                width="400"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="pt-8 w-full md:w-1/2 mb-4 md:mb-0">
              <li>
                <Link href="/">
                  <span className="text-white hover:text-gray-300">HOME</span>
                </Link>
              </li>

              {/* Other navigation links */}
              <li>
                <Link href="/advocates">
                  <span className="text-white hover:text-gray-300">
                    MEMBERS DIRECTORY
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/notice">
                  <span className="text-white hover:text-gray-300">NOTICE</span>
                </Link>
              </li>
              <li>
                <Link href="/stafs">
                  <span className="text-white hover:text-gray-300">
                    EMPLOYEE
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-white hover:text-gray-300">
                    CONTACT
                  </span>
                </Link>
              </li>
            </div>
            <div className="w-full md:w-1/2">
              <div className="address  py-4 bg-gray-900 text-white">
                <h1 className="text-2xl text-yellow-500 ">Address</h1>
                <br />

                <p className="text-lg">
                  Chapainawabganj Court, Chapainawabganj
                </p>
                <p className="text-lg">
                  Post Code - 6300, Thana: Chapainawabganj Sadar
                </p>
                <p className="text-lg">Mobile Number : +880258893306</p>
                <p className="text-lg">Email : advbarcnj@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-8 space-x-4 mb-8">
            <span href="#" className="text-gray-400 hover:text-gray-300">
              <FaTwitter />
            </span>
            <span href="#" className="text-gray-400 hover:text-gray-300">
              <FaFacebook />
            </span>
            <span href="#" className="text-gray-400 hover:text-gray-300">
              <FaInstagram />
            </span>
            <span href="#" className="text-gray-400 hover:text-gray-300">
              <FaLinkedin />
            </span>
          </div>
          <p className="text-center">
            &copy; {new Date().getFullYear()} Chapai Nawabganj Bar Association
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
