"use client";

import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useRouter } from "next/navigation";

const ProductHighlights = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products"); // your API endpoint
        const data = await res.json();

        // Sort products by 'likes' descending and pick top 6
        const mostLiked = data
          .sort((a, b) => b.likes - a.likes)
          .slice(0, 6);

        setProducts(mostLiked);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading products...</p>;

  return (
    <section className="py-12">
      <div className="container md:px-6 lg:px-10 mx-auto px-4 ">
        <h2 className="section-tittle ">
          Most Liked Products
        </h2>

        <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="relative bg-white dark:bg-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition overflow-hidden flex flex-col"
            >
              {/* Hot Badge */}
              <span className="absolute top-3 left-3 bg-gradient-to-r from-red-500 via-yellow-500 to-pink-500 text-white px-3 py-1 text-xs font-bold rounded-full z-10 shadow-lg">
                HOT
              </span>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    ${product.price}
                  </p>
                  <div className="flex items-center mt-2">
                    <FaHeart className="text-red-500 mr-2" />
                    <span className="text-gray-600 dark:text-gray-300">
                      {product.likes} Likes
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => router.push(`/products/${product._id}`)}
                  className="btn-primary btn mt-4 transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => router.push("/products")}
            className="btn p-3 bg-blue-800 rounded-2xl text-white font-semibold px-6 py-3 hover:bg-blue-500 transition"
          >
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;


