"use client";
import React, { useState, useEffect } from "react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const router = useRouter();
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    console.log(user)
    if (user) {
      router.push("/products");
    }
  },[]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }

    toast.loading("Signing In...");
    try {
      const response = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/products",
        redirect: false,
      });

      toast.dismiss();
      if (response?.ok) {
        toast.success("Logged in successfully");
        form.reset();
      } else {
        toast.error("Failed to log in");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Something went wrong");
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-8 bg-white dark:bg-gradient-to-b dark:from-blue-800 dark:via-gray-800 dark:to-blue-700 rounded-xl shadow-2xl space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-blue-900 dark:text-blue-100">
        Welcome Back 👋
      </h2>

      {/* Email */}
      <div>
        <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Password */}
      <div className="relative">
        <label className="block text-gray-800 dark:text-gray-200 font-semibold mb-1">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Your password"
          className="input input-bordered w-full pr-10"
          required
        />
        <span
          className="absolute right-3 top-9 cursor-pointer text-gray-700 text-lg"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </div>

      <button className="w-full h-12 bg-blue-900 text-white font-bold rounded-md hover:bg-blue-700 transition">
        Sign In
      </button>

      <div className="divider text-gray-400 dark:text-gray-300">OR</div>

      <SocialLogin />

      <p className="text-center text-gray-700 dark:text-gray-300">
        Don’t have an account?{" "}
        <Link
          href="/register"
          className="text-blue-900 dark:text-blue-50 font-semibold hover:underline"
        >
          Register
        </Link>
      </p>
    </form>
  );
}
