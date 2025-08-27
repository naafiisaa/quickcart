// import dbConnect from "@/lib/dbConnect";
// import { ObjectId } from "mongodb";
// import { FaHeart, FaStar, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

// export default async function ProductPage({ params }) {
//   const { id } = params;

//   const collection = await dbConnect("products");
//   const product = await collection.findOne({ _id: new ObjectId(id) });

//   if (!product) {
//     return (
//       <div className="p-10 text-center text-red-500">
//         ❌ Product not found
//       </div>
//     );
//   }

//   return (
//     <div className=" bg-blue-50 dark:bg-black mx-auto p-6">
//       <div className=" max-w-4xl mx-auto  bg-white dark:bg-gradient-to-b dark:from-blue-700 dark:to-blue-800 dark:via-gray-800 
// rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden">
//         {/* Product Image */}
//         <img
//           src={product.image || "/placeholder.png"}
//           alt={product.name}
//           className="w-full h-72 object-cover rounded-t-2xl p-4 md:p-10 "
//         />

//         {/* Product Info */}
//         <div className="p-6">
//           <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
//             {product.name}
//           </h1>
//           <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
//             {product.description}
//           </p>

//           {/* Price */}
//           <div className="flex items-center gap-2 mb-3">
//             <FaDollarSign className="text-green-600 dark:text-green-200" />
//             <span className="text-xl font-semibold text-gray-700 dark:text-white">
//               {product.price}
//             </span>
//           </div>

//           {/* Likes, Reviews, Release Date */}
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
//             <div className="flex items-center gap-2 text-gray-700 dark:text-white">
//               <FaHeart className="text-red-600 dark:text-red-300" />
//               <span>{product.likes || 0} Likes</span>
//             </div>

//             <div className="flex items-center gap-2 text-gray-700 dark:text-white">
//               <FaStar className="text-yellow-600 dark:text-yellow-300" />
//               <span>{product.reviews || 0} Reviews</span>
//             </div>

//             <div className="flex items-center gap-2 text-gray-700 dark:text-white">
//               <FaCalendarAlt className="text-blue-600 dark:text-blue-300" />
//               <span>
//                 {product.release_date
//                   ? new Date(product.release_date).toLocaleDateString()
//                   : "N/A"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";
import {
  FaHeart,
  FaStar,
  FaCalendarAlt,
  FaDollarSign,
} from "react-icons/fa";
import ProductActions from "@/components/ProductActions";

export default async function ProductPage({ params }) {
  const { id } = params;

  const collection = await dbConnect("products");
  const productData = await collection.findOne({ _id: new ObjectId(id) });

  if (!productData) {
    return (
      <div className="p-10 text-center text-red-500">
        ❌ Product not found
      </div>
    );
  }

  // Convert MongoDB ObjectId to string and create plain object
  const product = {
    ...productData,
    _id: productData._id.toString(),
  };

  return (
    <div className="bg-blue-50 dark:bg-black mx-auto p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gradient-to-b dark:from-blue-700 dark:to-blue-800 dark:via-gray-800 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden">
        <img
          src={product.image || "/placeholder.png"}
          alt={product.name}
          className="w-full h-72 object-cover rounded-t-2xl p-4 md:p-10"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">
            {product.name}
          </h1>
          <p className="text-gray-700 dark:text-white mb-4 leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-2 mb-3">
            <FaDollarSign className="text-green-600 dark:text-green-200" />
            <span className="text-xl font-semibold text-gray-700 dark:text-white">
              {product.price}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-700 dark:text-white">
              <FaHeart className="text-red-600 dark:text-red-300" />
              <span>{product.likes || 0} Likes</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 dark:text-white">
              <FaStar className="text-yellow-600 dark:text-yellow-300" />
              <span>{product.reviews || 0} Reviews</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700 dark:text-white">
              <FaCalendarAlt className="text-blue-600 dark:text-blue-300" />
              <span>
                {product.release_date
                  ? new Date(product.release_date).toLocaleDateString()
                  : "N/A"}
              </span>
            </div>
          </div>

          {/* Client-side Add to Cart */}
          <ProductActions product={product} />
        </div>
      </div>
    </div>
  );
}

