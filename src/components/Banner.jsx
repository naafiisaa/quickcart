"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BannerSection() {
  return (
    <section
      className="relative min-h-[90vh] py-6 flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/kGnNsvzN/hector-martinez-EG49v-Tt-Kdv-I-unsplash.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-40"></div>

      {/* Content */}
      <div className="relative container px-4 text-center text-white">
        {/* Animated Heading */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight my-3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         Next-Level Gadgets & {" "}
          <span className="text-blue-400">Tech Gear</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base md:text-lg text-gray-200 my-3 px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
         Step into a world where smart devices, sleek design, and next-generation performance come together to transform the way you live, work, and connect.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link
            href="/products"
            className="px-6 py-3 rounded-2xl bg-blue-500 hover:bg-blue-600 transition font-semibold shadow-lg"
          >
            Browse Products
          </Link>
          <Link
            href="/login"
            className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 transition font-semibold shadow-lg border border-gray-600"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

