"use client";

export default function Error({ error, reset }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-3 text-center">
      <p className="text-red-600 dark:text-red-400 font-semibold">
        Something went wrong loading products.
      </p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
      >
        Try again
      </button>
    </div>
  );
}