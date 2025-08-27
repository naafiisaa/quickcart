import { headers } from "next/headers";
import ProductCard from "./ProductCard";

async function getBaseUrl() {
  const h = await headers(); // 👈 await here
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}`;
}

export const metadata = {
  title: "Products | QuickCart",
};

export default async function ProductsPage() {
  const baseUrl = await getBaseUrl();

  const res = await fetch(`${baseUrl}/api/products`, { cache: "no-store" });

  if (!res.ok) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-700 dark:text-gray-300">
          Failed to load products.
        </p>
      </div>
    );
  }

  const products = await res.json();

  return (
    <section className="min-h-screen bg-blue-50 dark:bg-gray-900 px-4 md:px-6 py-10">
      <div className="container mx-auto">
        <header className="mb-8 text-center">
          <h1 className="section-tittle">Explore Our Products</h1>
          <p className="section-sub-tittle mt-2 text-gray-700 dark:text-gray-300">
            Hand-picked gadgets and electronics, updated in real time.
          </p>
        </header>

        {products?.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p._id} product={p} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600 dark:text-gray-300">
            No products found.
          </p>
        )}
      </div>
    </section>
  );
}
