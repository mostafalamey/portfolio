import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const links = [
    { href: "https://twitter.com", icon: <FaTwitter /> },
    { href: "https://linkedin.com", icon: <FaLinkedin /> },
    { href: "https://instagram.com", icon: <FaInstagram /> },
    { href: "https://facebook.com", icon: <FaFacebook /> },
    { href: "https://youtube.com", icon: <FaYoutube /> },
  ];

  return (
    <footer className="w-screen py-4 bg-stone-200 text-stone-700">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left font-body">
          &copy; 2025 Architecture Studio. All rights reserved.
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-500 ease-in-out text-stone-600 hover:text-sage-600"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a
          href="#privacy-policy"
          className="text-center text-sm hover:underline md:text-right font-body text-stone-600 hover:text-sage-600"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
