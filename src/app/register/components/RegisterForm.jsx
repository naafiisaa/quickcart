"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import SocialLogin from "@/app/login/components/SocialLogin";
import { useRouter } from "next/navigation";
import { registerUser } from "@/app/actions/auth/registerUser";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();

    if (!name || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const user = await registerUser({ name, email, password });
      setLoading(false);

      if (!user) {
        toast.error("User already exists or invalid data");
      } else {
        toast.success("Registration successful! You can now log in.");
        form.reset();
        router.push("/login");
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message || "Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
        Join QuickCart
      </h2>

      {/* Name */}
      <div>
        <label className="text-gray-800 dark:text-gray-200 font-semibold mb-1 block">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="input input-bordered w-full"
          required
        />
      </div>

      {/* Email */}
      <div>
        <label className="text-gray-800 dark:text-gray-200 font-semibold mb-1 block">
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
        <label className="text-gray-800 dark:text-gray-200 font-semibold mb-1 block">
          Password
        </label>
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Your password"
          className="input input-bordered w-full pr-10"
          required
          autoComplete="new-password"
        />
        <span
          className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-gray-300 text-lg"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
        </span>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn btn-primary w-full bg-blue-900 text-white hover:bg-blue-700 flex justify-center items-center"
      >
        {loading ? (
          <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Register"
        )}
      </button>

      <div className="divider my-4 text-gray-400 dark:text-gray-300">OR</div>

      {/* Google Login */}
      <SocialLogin />

      {/* Login Link */}
      <p className="mt-4 text-center text-gray-700 dark:text-gray-300 text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="btn-primary btn font-semibold hover:underline text-blue-900 dark:text-blue-400"
        >
          Login
        </Link>
      </p>
    </form>
  );
}


// "use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import { toast } from "react-hot-toast";
// import SocialLogin from "@/app/login/components/SocialLogin";

// export default function RegisterForm() {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const name = form.name.value.trim();
//     const email = form.email.value.trim();
//     const password = form.password.value.trim();

//     if (!name || !email || !password) {
//       toast.error("Please fill in all fields");
//       return;
//     }
//     if (password.length < 6) {
//       toast.error("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       // Use NextAuth credential sign-up API (replace with your NextAuth sign-up logic)
//       await fetch("/api/auth/register", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ name, email, password }),
//       });
//       toast.success("Registration successful!");
//       form.reset();
//     } catch (err) {
//       toast.error(err.message || "Registration failed");
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4">
//       <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-900 dark:text-blue-100 mb-6">
//         Join QuickCart
//       </h2>

//       {/* Name */}
//       <div>
//         <label className="text-gray-800 dark:text-gray-200 font-semibold mb-1 block">
//           Name
//         </label>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your name"
//           className="input input-bordered w-full"
//           required
//         />
//       </div>

//       {/* Email */}
//       <div>
//         <label className="text-gray-800 dark:text-gray-200 font-semibold mb-1 block">
//           Email
//         </label>
//         <input
//           type="email"
//           name="email"
//           placeholder="Your email"
//           className="input input-bordered w-full"
//           required
//         />
//       </div>

//       {/* Password */}
//   <div className="relative">
//   <label className="text-gray-800 dark:text-gray-200 font-semibold mb-1 block">
//     Password
//   </label>
//   <input
//     type={showPassword ? "text" : "password"}
//     name="password"
//     placeholder="Your password"
//     className="input input-bordered w-full pr-10"
//     required
//   />
//   <span
//     className="absolute right-3 top-3 cursor-pointer text-gray-600 dark:text-gray-300 text-lg"
//     onClick={() => setShowPassword(!showPassword)}
//   >
//     {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
//   </span>
// </div>

//       {/* Submit */}
//       <button className="btn btn-primary w-full bg-blue-900 text-white hover:bg-blue-700">
//         Register
//       </button>

//       <div className="divider my-4 text-gray-400 dark:text-gray-300">OR</div>

//       {/* Google Login */}
//       <SocialLogin />

//       {/* Login Link */}
//       <p className="mt-4 text-center text-gray-700 dark:text-gray-300 text-sm">
//         Already have an account?{" "}
//         <Link
//           href="/login"
//           className="btn-primary btn font-semibold hover:underline text-blue-900 dark:text-blue-400"
//         >
//           Login
//         </Link>
//       </p>
//     </form>
//   );
// }


