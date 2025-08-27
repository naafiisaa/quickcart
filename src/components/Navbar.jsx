"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSignOutAlt, FaHome } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { ThemeContext } from "@/Providers/ThemeContext";

export default function Navbar() {
  const { data: session, status } = useSession();
  const { theme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  // Theme-based colors
  const navbarGradient =
    theme === "dark"
      ? "bg-gradient-to-r from-blue-700 via-gray-900 to-blue-800"
      : "bg-gradient-to-r from-blue-200 to-blue-50";
  const textColor = theme === "dark" ? "text-white" : "text-blue-900";

  // Navigation links
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  if (status === "authenticated") {
    navItems.push({ name: "Add Product", path: "/dashboard/add-product" });
  }

  return (
    <nav
      className={` mx-auto px-4 md:px-6 lg:px-12 sticky top-0 z-50 shadow-md transition-colors duration-500 ${navbarGradient}`}
    >
      <div className= "container mx-auto flex justify-between items-center h-16">

        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center gap-2 lg:gap-4">
          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-blue-900 dark:text-white btn btn-circle btn-ghost "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className={`text-xl md:text-2xl font-bold ${textColor}`}>
            QuickCart
          </Link>
        </div>

        {/* Center: Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`font-semibold text-base hover:underline transition ${textColor}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right: Theme + Auth */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {status === "authenticated" ? (
            <div className="relative text-blue-900 dark:text-white text-center">
              {/* Profile Image */}
              <img
                src={
                  session?.user?.image ||
                  "https://i.ibb.co/5hHScZ6g/307ce493-b254-4b2d-8ba4-d12c080d6651.jpg"
                }
                alt="Profile"
                onClick={() => setShowProfile(!showProfile)}
                className=" md:h-12 md:w-12 w-10 h-10 rounded-full border-2 border-blue-900 dark:border-white hover:scale-105 transition cursor-pointer object-cover"
              />

              {/* Profile Dropdown */}
              <AnimatePresence>
                {showProfile && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute right-0 mt-3 w-64 bg-base-200 rounded-2xl shadow-lg p-4 space-y-3 z-50"
                  >
                    <div className="text-center">
                      <img
                        src={session?.user?.image}
                        alt="Profile"
                        className="w-12 h-12 rounded-full mx-auto mb-2 border-2 border-blue-900"
                      />
                      <p className="font-semibold">{session?.user?.name}</p>
                      <p className="text-sm text-gray-600 ">{session?.user?.email}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => signOut()}
                        className="btn btn-error btn-sm text-white flex items-center justify-center"
                      >
                        <FaSignOutAlt className="mr-2" /> Logout
                      </button>
                      <Link
                        href="/"
                        className="btn btn-primary btn-sm flex items-center justify-center"
                        onClick={() => setShowProfile(false)}
                      >
                        <FaHome className="mr-2" /> Home
                      </Link>
                         <Link href="/dashboard/add-product" className="btn btn-sm btn-primary border-1 border-white text-white">
                Add Product
              </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-sm md:btn-md btn-primary border-1 border-white text-white">
                Login
              </Link>
              {/* <Link href="/register" className="btn btn-sm btn-outline rounded">
                Sign Up
              </Link> */}
            </>
          )}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden px-4 pb-4 backdrop-blur-sm bg-blue-50/90 dark:bg-blue-900/80 rounded-b-xl shadow w-full"
          >
            <motion.ul
              className="menu w-full space-y-2 mt-2"
              initial="initial"
              animate="animate"
            >
              {navItems.map((item) => (
                <motion.li key={item.name}>
                  <Link
                    href={item.path}
                    className="block py-2 px-3 text-sm font-semibold text-blue-900 dark:text-blue-100"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


