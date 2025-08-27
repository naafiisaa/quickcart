"use client";


import { FaUsers, FaShoppingCart, FaStar, FaBoxOpen } from "react-icons/fa";
import CountUp from "react-countup";
import { motion } from "framer-motion";

export default function StatsSection() {
  const stats = [
    { icon: <FaUsers size={40} />, label: "Happy Customers", value: 1250, color: "text-blue-700" },
    { icon: <FaShoppingCart size={40} />, label: "Products Sold", value: 980, color: "text-green-700" },
    { icon: <FaStar size={40} />, label: "5-Star Reviews", value: 450, color: "text-yellow-700" },
    { icon: <FaBoxOpen size={40} />, label: "Orders Delivered", value: 1200, color: "text-pink-700" },
  ];

  return (
    <section className="py-20  container px-4 lg:px-12 mx-auto md:px-6">
      <div className=" grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          className="flex flex-col items-center 
  dark:bg-gradient-to-r dark:from-blue-400 dark:to-gray-200 dark:via-blue-300 
  bg-white
  p-6 shadow-lg rounded-xl hover:shadow-2xl"
>
            <div className={`mb-4 ${stat.color}`}>
              {stat.icon}
            </div>
            <h3 className="text-3xl font-bold text-gray-900 ">
              <CountUp end={stat.value} duration={2} />
            </h3>
            <p className="text-gray-800 font-semibold mt-2">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
