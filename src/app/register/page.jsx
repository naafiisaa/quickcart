"use client";

import React from "react";
import { motion } from "framer-motion";
import RegisterForm from "./components/RegisterForm";

export default function RegisterPage() {
  return (
    <div className="min-h-screen px-4 py-6 flex items-center justify-center  dark:bg-gray-800 bg-blue-50 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 bg-white dark:bg-gradient-to-b dark:from-blue-800 dark:via-gray-800 dark:to-blue-700 rounded-xl shadow-2xl"
      >
        <RegisterForm />
      </motion.div>
    </div>
  );
}



