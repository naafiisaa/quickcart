"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Alex Johnson",
      subtitle: "Tech Enthusiast",
      text: "Amazing gadgets! Fast shipping and excellent support.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Mark Wilson",
      subtitle: "Gadget Reviewer",
      text: "High-quality products. I love the variety and offers.",
      rating: 4,
      photo: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Simon Smith",
      subtitle: "Frequent Buyer",
      text: "The best place to shop tech items. Highly recommend!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/65.jpg",
    },
  ];

  return (
    <section className="py-20 container lg:px-12 px-4 md:px-6 mx-auto">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 section-tittle">
          What Our Customers Say
        </h2>
        <p className="section-sub-tittle mb-12">
          Hear from our satisfied users who trust our products and services.
        </p>
        <div className="grid mt-12 grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, boxShadow: "0 15px 25px rgba(0,0,0,0.2)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
         className="bg-white dark:bg-gradient-to-r dark:from-blue-800 p-4 dark:via-gray-800 dark:to-blue-900 shadow-lg rounded-xl hover:shadow-2xl flex flex-col items-center text-center"
 
            >
              <img
                src={review.photo}
                alt={review.name}
                className="w-20 h-20 rounded-full p-2 object-cover mb-4"
              />
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {review.name}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-50 mb-3">
                {review.subtitle}
              </p>
              <div className="flex justify-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 mr-1" />
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-50">{review.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


