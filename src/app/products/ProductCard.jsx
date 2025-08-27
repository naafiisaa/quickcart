import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaStar, FaCalendarAlt } from "react-icons/fa";

export default function ProductCard({ product }) {
  const { _id, name, description, price, likes, reviews, release_date, image } = product;

  return (
    <Link
      href={`/products/${_id}`}
      className="group block rounded-2xl overflow-hidden bg-white dark:bg-gray-800 shadow-md hover:shadow-2xl transition-shadow"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-white line-clamp-1">
          {name}
        </h3>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
          {description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-700 dark:text-blue-400">
            ${price}
          </span>
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
            <span className="inline-flex items-center gap-1">
              <FaHeart className="text-pink-500" />
              {likes}
            </span>
            <span className="inline-flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              {reviews}
            </span>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
          <FaCalendarAlt />
          <span>Released: {new Date(release_date).toLocaleDateString()}</span>
        </div>

        <div className="mt-4">
          <span className="inline-block px-3 py-1 rounded-lg text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300">
            View Details
          </span>
        </div>
      </div>
    </Link>
  );
}