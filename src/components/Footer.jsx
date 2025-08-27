"use client";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-300/40 dark:bg-gradient-to-r dark:from-blue-700 dark:via-gray-900 dark:to-blue-800 text-gray-900 dark:text-white py-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">QuickCart</h2>
          <p>Reliable, fast, and affordable shopping at your fingertips.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/products" className="hover:underline">Products</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/" target="blank" className="p-2 rounded-full bg-white text-blue-500"><FaFacebookF /></a>
            <a href="https://www.x.com/" target="blank" className="p-2 rounded-full bg-white text-blue-500"><FaTwitter /></a>
            <a href="https://www.instagram.com" target="blank" className="p-2 rounded-full bg-white text-blue-500"><FaInstagram /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold mb-2">Newsletter</h3>
          <form className="flex flex-col gap-2">
            <input type="email" placeholder="Your email" className="p-2 bg-gray-600  dark:bg-gray-200 text-white dark:text-gray-800 rounded border" />
            <button className="btn-primary  0 p-2 rounded font-semibold">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-700">
        © {new Date().getFullYear()} QuickCart. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;

