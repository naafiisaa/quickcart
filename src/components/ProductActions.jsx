"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

export default function ProductActions({ product }) {
  const router = useRouter();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.find((item) => item._id === product._id)) setAdded(true);
  }, [product._id]);

  const handleAddToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (!cart.find((item) => item._id === product._id)) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      setAdded(true);
      toast.success("Added to cart successfully!");
    } else {
      toast("Already in cart");
    }
  };

  return (
    <div className="mt-6 flex gap-4">
      <Toaster />
      <button
        onClick={handleAddToCart}
        className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        disabled={added}
      >
        {added ? "Added!" : "Add to Cart"}
      </button>

      <button
        onClick={() => router.push("/products")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Back to Products
      </button>
    </div>
  );
}
