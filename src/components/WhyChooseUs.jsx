"use client";
import { FaRocket, FaShieldAlt, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaRocket size={30} className="text-blue-500" />,
      title: "Fast & Reliable",
      description: "Our platform ensures lightning-fast performance and a smooth browsing experience for all your gadgets.",
    },
    {
      icon: <FaShieldAlt size={30} className="text-blue-500" />,
      title: "Secure & Trusted",
      description: "Shop and manage products with complete peace of mind, thanks to our secure and reliable system.",
    },
    {
      icon: <FaHeadset size={30} className="text-blue-500" />,
      title: "24/7 Support",
      description: "Our dedicated support team is always ready to help you with any questions or issues.",
    },
  ];

  return (
    <section className="py-20 container px-4 lg:px-12  mx-auto md:px-6">
      <div className=" mx-auto text-center mb-12">
        <h2 className=" section-tittle mb-4">
          Why Choose Us
        </h2>
        <p className="section-sub-tittle my-4">
          Discover why thousands of tech enthusiasts trust us for the best gadgets and tech gear.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10  mx-auto">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            className="bg-white  dark:bg-gradient-to-r dark:from-blue-800 p-4 dark:via-gray-800 dark:to-blue-900 rounded-xl shadow-xl flex flex-col items-center text-center hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
          >
            <div className="mb-4 flex justify-center">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
