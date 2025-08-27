"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext"; // your auth context

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
console.log(user,'PrivateRoute')
useEffect(() => {

  if (!loading && !user && router.pathname !== "/login") {
    router.replace("/login"); // prevent history stack issues
  }
}, [user, loading, router]);

  if (loading || !user) {
    return <p className="text-center py-10">Checking authentication...</p>;
  }

  return children;
};

export default PrivateRoute;
