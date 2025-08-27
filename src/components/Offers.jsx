"use client";

import { motion } from "framer-motion";
import { FaTag, FaBolt, FaGift } from "react-icons/fa";

export default function OffersSection() {
  const offers = [
    {
      title: "Flash Sale",
      subtitle: "Up to 50% OFF",
      desc: "Get the hottest gadgets at unbeatable prices for a limited time.",
      icon: <FaBolt className="text-yellow-500 text-2xl" />,
      image: "https://i.postimg.cc/YCNdcvrn/oscar-nilsson-W-oq-Nwbmin0-unsplash.jpg",
    },
    {
      title: "Exclusive Deals",
      subtitle: "Members Only",
      desc: "Special discounts for our premium members on top-rated products.",
      icon: <FaTag className="text-pink-500 text-2xl" />,
      image: "https://i.postimg.cc/L6cWFdzX/akhil-yerabati-Q2u-V5-Tkj-Nz8-unsplash-1.jpg",
    },
    {
      title: "Free Gifts",
      subtitle: "On Every Order",
      desc: "Enjoy exciting gifts and bonuses with every purchase you make.",
      icon: <FaGift className="text-green-500 text-2xl" />,
      image: "https://i.postimg.cc/NftcRrzb/onur-binay-Rp-PMkq-TTTg-unsplash.jpg",
    },
  ];

  return (
    <section className="py-20 container px-4 md:px-6 lg:px-12 mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold section-tittle"> Special Offers</h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Grab our latest deals and save big on your favorite items!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {offers.map((offer, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: -1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer"
          >
            <img
              src={offer.image}
              alt={offer.title}
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                {offer.icon}
                <span className="text-sm font-semibold px-2 py-1 bg-gradient-to-r from-pink-400 to-red-400 text-white rounded-full">
                  {offer.subtitle}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {offer.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {offer.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


