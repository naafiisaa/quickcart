"use client";

import React from "react";
import { motion } from "framer-motion";  // ✅ Import motion
import LoginForm from "./components/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen px-4 py-6 flex items-center justify-center dark:bg-gray-900 bg-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md p-8 "
      >
        <LoginForm />
      </motion.div>
    </div>
  );
}
