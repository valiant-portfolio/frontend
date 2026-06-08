import React from "react";
import {
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-black-100/55 text-white flex flex-col items-center gap-3">
      <div className="flex justify-center gap-6">
        <a
          href="https://www.linkedin.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="mailto:valiantcodez@gmail.com"
          aria-label="Email"
        >
          <FaEnvelope size={24} />
        </a>
        <a
          href="https://www.instagram.com/valiant_joe/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://t.me/Valiant_code"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
        >
          <FaTelegram size={24} />
        </a>
      </div>
      <p className="text-secondary text-[13px]">
        © {2026} Victor Joseph Otung · Senior Full-Stack Developer · iGaming &amp; AI Engineer
      </p>
    </footer>
  );
};

export default Footer;
