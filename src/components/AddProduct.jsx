"use client";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddProduct() {
  const [loading, setLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const { data: session, status } = useSession();
  const router = useRouter();
  const imageHostKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  const [formValues, setFormValues] = useState({
    name: "",
    description: "",
    price: "",
    addedByName: "",
    addedByEmail: "",
  });

  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
    if (session) {
      setFormValues({
        ...formValues,
        addedByName: session.user.name || "",
        addedByEmail: session.user.email || "",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, session]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, description, price, addedByName, addedByEmail } = formValues;
    let imageUrl = "";

    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const imgRes = await fetch(
        `https://api.imgbb.com/1/upload?key=${imageHostKey}`,
        { method: "POST", body: formData }
      );

      const imgData = await imgRes.json();
      if (imgData.success) imageUrl = imgData.data.url;
      else {
        Swal.fire("Error", "Image upload failed. Please try again.", "error");
        setLoading(false);
        return;
      }
    }

    const product = {
      name,
      description,
      price,
      image: imageUrl,
      likes: 0,
      reviews: 0,
      release_date: new Date().toISOString(),
      addedByName,
      addedByEmail,
    };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (res.ok) {
        Swal.fire({
          icon: "success",
          title: "Product Added!",
          text: "Your product has been successfully added.",
          confirmButtonColor: "#3085d6",
        });
        setFormValues({
          name: "",
          details: "",
          price: "",
          addedByName: session.user.name || "",
          addedByEmail: session.user.email || "",
        });
        setSelectedFile(null);
      } else throw new Error("Failed to save product");
    } catch (err) {
      Swal.fire("Error", err.message, "error");
    }

    setLoading(false);
  };

  if (status === "loading") return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10">
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-700 p-8 hover:shadow-2xl rounded-xl shadow-lg">
        <h2 className="section-tittle">
         Add Product
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formValues.name}
              onChange={handleChange}
              className="w-full p-3 dark:bg-gray-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700  dark:text-gray-200">Product Description</label>
            <textarea
              name="description"
              placeholder="Enter product details"
              rows="4"
              value={formValues.description}
              onChange={handleChange}
              className="w-full p-3 dark:bg-gray-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              value={formValues.price}
              onChange={handleChange}
              className="w-full p-3 dark:bg-gray-200 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Added By (Name)</label>
            <input
              type="text"
              name="addedByName"
              placeholder="Your name"
              value={formValues.addedByName}
               readOnly
              className="w-full p-3 dark:bg-gray-200 rounded-lg border border-gray-300 bg-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              name="addedByEmail"
              value={formValues.addedByEmail}
              readOnly
              className="w-full dark:bg-gray-200 p-3 rounded-lg border border-gray-300 bg-gray-200 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>
<div>
  <label className="block mb-1 text-gray-700 dark:text-gray-800">Product Image</label>
  <label className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-300 transition bg-white dark:bg-gray-200">
    <FaCloudUploadAlt className="w-5 h-5 text-gray-500" />
    <span className="truncate w-full">
      {selectedFile ? selectedFile.name : "Choose Product Image"}
    </span>
    <input
      type="file"
      name="image"
      accept="image/*"
      hidden
      onChange={(e) => setSelectedFile(e.target.files[0])}
    />
  </label>
</div>


          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition duration-300 shadow-lg"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
}