"use client";

import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! We will get back to you soon."); // Replace with Swal if needed
    e.target.reset();
  };

  return (
    <div className="py-10 bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="container mx-auto px-4 lg:px-10 md:px-6">
        <motion.h1
          className="text-3xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          CONTACT US
        </motion.h1>
        <motion.p
          className="mt-2 max-w-2xl text-gray-600 dark:text-gray-300 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          If you have any questions, please feel free to get in touch with us via phone, text, email, the form below, or even on social media!
        </motion.p>
      </div>

      {/* Main Contact Section */}
      <div className="container mx-auto px-4 lg:px-10 md:px-6  mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Form */}
        <motion.div
          className="p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-4 text-blue-600">GET IN TOUCH</h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Enter your name*"
                className="border border-gray-300 dark:border-gray-600 rounded p-3 w-full bg-white dark:bg-gray-900 text-black dark:text-white"
                required
              />
              <input
                type="tel"
                placeholder="Enter your phone number*"
                className="border border-gray-300 dark:border-gray-600 rounded p-3 w-full bg-white dark:bg-gray-900 text-black dark:text-white"
                required
              />
            </div>
            <input
              type="email"
              placeholder="Enter your email*"
              className="border border-gray-300 dark:border-gray-600 rounded p-3 w-full bg-white dark:bg-gray-900 text-black dark:text-white"
              required
            />
            <textarea
              placeholder="Your message"
              className="border border-gray-300 dark:border-gray-600 rounded p-3 w-full h-28 bg-white dark:bg-gray-900 text-black dark:text-white"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              SEND MESSAGE
            </button>
          </form>
        </motion.div>

        {/* Right: Contact Info + Business Hours */}
        <div className="space-y-6">
          {/* Contact Info */}
          <motion.div
            className="p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-600">CONTACT INFORMATION</h3>
            <div className="space-y-3 text-gray-800 dark:text-gray-200">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600" />
                <span>773-385-1240</span>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600" />
                <span>office@quickcart.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-600" />
                <span>1425 N McLean Blvd, Elgin, IL</span>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            className="p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-blue-600">BUSINESS HOURS</h3>
            <div className="space-y-1 text-gray-800 dark:text-gray-200">
              <p>Monday – Friday: 9:00 am – 8:00 pm</p>
              <p>Saturday: 9:00 am – 6:00 pm</p>
              <p>Sunday: 9:00 am – 5:00 pm</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Map */}
      <motion.div
        className="container mx-auto px-4 lg:px-10 md:px-6 mt-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          width="100%"
          height="300"
          className="rounded-lg shadow-sm"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>
    </div>
  );
};

export default ContactUs;





