import React from "react";
import { FaInstagram, FaXTwitter, FaLinkedin, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/valiant_joe/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>
      <a href="https://t.me/Valiant_code" target="_blank" rel="noopener noreferrer">
        <FaTelegram size={24} />
      </a>
    </footer>
  );
};

export default Footer;