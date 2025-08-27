"use client";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-4 space-y-16">
      {/* Hero Section */}
      <div className="container px-4 md:px-6 lg:px-10 mx-auto text-center">
        <h1 className="section-tittle mb-4">
          About QuickCart
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          QuickCart is a modern e-commerce platform designed for smooth and secure online shopping.
        </p>
      </div>

      {/* Features Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Mission</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            To provide a reliable and efficient online shopping platform that enhances convenience and satisfaction for all users.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            QuickCart empowers both buyers and sellers with intuitive product browsing, instant cart updates, and secure transactions.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.postimg.cc/kX1g5zRm/onur-binay-9j-LI9-Ux6-IFo-unsplash-2.jpg"
            alt="Shopping Illustration"
            className="rounded-xl shadow-lg w-full h-52 max-w-md"
          />
        </div>
      </div>

      {/* About Platform Section */}
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1 flex justify-center">
          <img
            src="https://i.postimg.cc/057Sbk9q/i-m-zion-rh-R20m0-NBNw-unsplash.jpg"
            alt="E-commerce Tech"
            className="rounded-xl shadow-lg w-full h-52 max-w-md"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Powered by Modern Tech</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            QuickCart is built with Next.js, MongoDB, and modern web technologies to ensure high-performance, scalability, and security.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            Our platform is optimized for seamless browsing and shopping experience, catering to the needs of both sellers and buyers.
          </p>
        </div>
      </div>

      {/* Team  */}
      <div className="max-w-5xl mx-auto text-center">
        {/* <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Features</h2> */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white  dark:bg-gradient-to-r dark:from-blue-400 dark:to-gray-200 dark:via-blue-300 
  bg-wh rounded-xl hover:shadow-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Fast & Intuitive</h3>
            <p className="text-gray-800 font-semibold dark:text-gray-900">Browse and add products to your cart in just a few clicks.</p>
          </div>
          <div className="bg-white  dark:bg-gradient-to-r dark:from-blue-400 dark:to-gray-200 dark:via-blue-300 
  bg-wh rounded-xl hover:shadow-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-800 font-semibold dark:text-gray-900">Your data and payments are protected with top-notch security.</p>
          </div> <div className="bg-white  dark:bg-gradient-to-r dark:from-blue-400 dark:to-gray-200 dark:via-blue-300 
  bg-wh rounded-xl hover:shadow-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
            <p className="text-gray-800 font-semibold dark:text-gray-900">Optimized for both sellers and buyers for smooth operations.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


